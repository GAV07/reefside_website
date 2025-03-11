/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.basehub.com',
          pathname: '**',
        },
        // Keep any other existing domains you have configured
      ],
    },
    // Any other Next.js config you have
  };
  
  export default nextConfig;
