// save as verify-components-simple.js
const fs = require('fs');
const path = require('path');

// Define the root directory and components directory
const ROOT_DIR = process.cwd();
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src', 'components');

// List of components to check from error messages
const componentsToCheck = [
  'Container',
  'Button',
  'Footer',
  'Gradient'
];

// Check if components directory exists
if (!fs.existsSync(COMPONENTS_DIR)) {
  console.error(`Error: Components directory does not exist at ${COMPONENTS_DIR}`);
  process.exit(1);
}

console.log('Checking components...');
console.log('====================');
console.log();

let hasErrors = false;

// Check each component
componentsToCheck.forEach(component => {
  // Check exact match with common extensions
  const extensions = ['.jsx', '.tsx', '.js', '.ts'];
  let found = false;
  
  for (const ext of extensions) {
    const filePath = path.join(COMPONENTS_DIR, `${component}${ext}`);
    if (fs.existsSync(filePath)) {
      // Get the directory containing the file
      const dir = path.dirname(filePath);
      // Get the filename
      const basename = path.basename(filePath);
      
      // Read the directory and check if the file exists with exact case
      const files = fs.readdirSync(dir);
      if (files.includes(basename)) {
        console.log(`✓ ${component}${ext} - Found at correct path and case`);
        found = true;
        break;
      }
    }
  }
  
  if (!found) {
    hasErrors = true;
    console.log(`✗ ${component} - Not found with exact name`);
    
    // Find potential matches
    try {
      const files = fs.readdirSync(COMPONENTS_DIR);
      const potentialMatches = files.filter(file => 
        file.toLowerCase().startsWith(component.toLowerCase()) && 
        !fs.statSync(path.join(COMPONENTS_DIR, file)).isDirectory()
      );
      
      if (potentialMatches.length > 0) {
        console.log(`  Potential matches found:`);
        potentialMatches.forEach(match => {
          console.log(`  - ${match}`);
        });
      } else {
        console.log(`  No potential matches found. Component might be missing entirely.`);
      }
    } catch (error) {
      console.log(`  Error finding potential matches: ${error.message}`);
    }
  }
});

console.log();

// Check jsconfig.json or tsconfig.json
const jsconfigPath = path.join(ROOT_DIR, 'jsconfig.json');
const tsconfigPath = path.join(ROOT_DIR, 'tsconfig.json');

let configPath = '';
if (fs.existsSync(jsconfigPath)) {
  configPath = jsconfigPath;
} else if (fs.existsSync(tsconfigPath)) {
  configPath = tsconfigPath;
}

if (configPath) {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const hasPathsConfig = config.compilerOptions && 
                          config.compilerOptions.baseUrl === '.' && 
                          config.compilerOptions.paths && 
                          config.compilerOptions.paths['@/*'];
    
    if (hasPathsConfig) {
      console.log(`✓ Path aliases correctly configured in ${path.basename(configPath)}`);
    } else {
      hasErrors = true;
      console.log(`✗ Path aliases not correctly configured in ${path.basename(configPath)}`);
      console.log(`  Should have compilerOptions.baseUrl = '.' and compilerOptions.paths = { '@/*': ['./src/*'] }`);
    }
  } catch (error) {
    hasErrors = true;
    console.log(`✗ Error reading ${path.basename(configPath)}: ${error.message}`);
  }
} else {
  hasErrors = true;
  console.log(`✗ Neither jsconfig.json nor tsconfig.json found in project root`);
}

// Check next.config.js
const nextConfigPath = path.join(ROOT_DIR, 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log(`Next.js config file exists. No further configuration needed for path aliases.`);
} else {
  console.log(`No next.config.js found. This is usually fine for path aliases.`);
}

console.log();
if (hasErrors) {
  console.log('Issues found. Please fix the problems above to resolve path aliasing issues.');
} else {
  console.log('All checks passed! Your components should resolve correctly.');
}