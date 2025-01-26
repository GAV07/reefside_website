"use client";

export function HomeBackground({ className }) {
  return (
    <div className={className}>
      <style jsx>{`
        @keyframes wave {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.05) translate(-10px, -10px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        
        .blob-group {
          animation: wave 20s ease-in-out infinite;
        }
        
        .blob-group:nth-child(2) {
          animation-delay: -10s;
        }
      `}</style>
      <BlobScene />
    </div>
  );
}

const BlobScene = () => (
  <svg
    id="visual"
    viewBox="0 0 900 450"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
    version="1.1"
  >
    <rect x="0" y="0" width="900" height="450" fill="#003b46" />
    
    <defs>
      <linearGradient id="grad1_0" x1="50%" y1="100%" x2="100%" y2="0%">
        <stop offset="10%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="90%" stopColor="#ffffff" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="grad1_1" x1="50%" y1="100%" x2="100%" y2="0%">
        <stop offset="10%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="90%" stopColor="#dae0e2" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="grad1_2" x1="50%" y1="100%" x2="100%" y2="0%">
        <stop offset="10%" stopColor="#b6c3c6" stopOpacity="1" />
        <stop offset="90%" stopColor="#dae0e2" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="grad1_3" x1="50%" y1="100%" x2="100%" y2="0%">
        <stop offset="10%" stopColor="#b6c3c6" stopOpacity="1" />
        <stop offset="90%" stopColor="#93a5ab" stopOpacity="1" />
      </linearGradient>
    </defs>

    <g className="blob-group" transform="translate(900, 450)">
      <path
        d="M-292.5 0C-273.7 -35.1 -255 -70.3 -234.7 -97.2C-214.3 -124.1 -192.4 -142.9 -173.9 -173.9C-155.5 -205 -140.4 -248.4 -111.9 -270.2C-83.5 -292 -41.8 -292.3 0 -292.5L0 0Z"
        fill="#1a4752"
      />
      <path
        d="M-255.9 0C-239.5 -30.7 -223.1 -61.5 -205.3 -85.1C-187.5 -108.6 -168.4 -125 -152.2 -152.2C-136 -179.4 -122.8 -217.4 -97.9 -236.5C-73.1 -255.5 -36.5 -255.7 0 -255.9L0 0Z"
        fill="#3e616a"
      />
      <path
        d="M-219.4 0C-205.3 -26.3 -191.2 -52.7 -176 -72.9C-160.8 -93.1 -144.3 -107.2 -130.5 -130.5C-116.6 -153.8 -105.3 -186.3 -84 -202.7C-62.6 -219 -31.3 -219.2 0 -219.4L0 0Z"
        fill="#5f7c83"
      />
    </g>

    <g className="blob-group" transform="translate(0, 0)">
      <path
        d="M292.5 0C283.7 39.5 274.8 79.1 252.2 104.5C229.6 129.9 193.3 141.2 170.4 170.4C147.5 199.7 138.1 246.9 111.9 270.2C85.8 293.6 42.9 293 0 292.5L0 0Z"
        fill="#1a4752"
      />
      <path
        d="M255.9 0C248.2 34.6 240.5 69.2 220.7 91.4C200.9 113.6 169.1 123.5 149.1 149.1C129.1 174.7 120.8 216 97.9 236.5C75.1 256.9 37.5 256.4 0 255.9L0 0Z"
        fill="#3e616a"
      />
      <path
        d="M219.4 0C212.7 29.6 206.1 59.3 189.2 78.4C172.2 97.4 145 105.9 127.8 127.8C110.6 149.7 103.6 185.2 84 202.7C64.3 220.2 32.2 219.8 0 219.4L0 0Z"
        fill="#5f7c83"
      />
    </g>
  </svg>
);


// import { clsx } from 'clsx'


// export function HomeBackground({ className }) {
//   return (
//     <div className={className}>
//       <BlobScene/>
//     </div>
//   )
// }



// const BlobScene = () => (
//     <svg
//       id="visual"
//       viewBox="0 0 900 450"
//       width="100%"
//       height="100%"
//       preserveAspectRatio="none"
//       version="1.1"
//     >
//       <rect x="0" y="0" width="900" height="450" fill="#003b46" />
      
//       <defs>
//         <linearGradient id="grad1_0" x1="50%" y1="100%" x2="100%" y2="0%">
//           <stop offset="10%" stopColor="#ffffff" stopOpacity="1" />
//           <stop offset="90%" stopColor="#ffffff" stopOpacity="1" />
//         </linearGradient>
//         <linearGradient id="grad1_1" x1="50%" y1="100%" x2="100%" y2="0%">
//           <stop offset="10%" stopColor="#ffffff" stopOpacity="1" />
//           <stop offset="90%" stopColor="#dae0e2" stopOpacity="1" />
//         </linearGradient>
//         <linearGradient id="grad1_2" x1="50%" y1="100%" x2="100%" y2="0%">
//           <stop offset="10%" stopColor="#b6c3c6" stopOpacity="1" />
//           <stop offset="90%" stopColor="#dae0e2" stopOpacity="1" />
//         </linearGradient>
//         <linearGradient id="grad1_3" x1="50%" y1="100%" x2="100%" y2="0%">
//           <stop offset="10%" stopColor="#b6c3c6" stopOpacity="1" />
//           <stop offset="90%" stopColor="#93a5ab" stopOpacity="1" />
//         </linearGradient>
//       </defs>
  
//       <g transform="translate(900, 450)">
//         <path d="M-292.5 0C-273.7 -35.1 -255 -70.3 -234.7 -97.2C-214.3 -124.1 -192.4 -142.9 -173.9 -173.9C-155.5 -205 -140.4 -248.4 -111.9 -270.2C-83.5 -292 -41.8 -292.3 0 -292.5L0 0Z" fill="#1a4752" />
//         <path d="M-255.9 0C-239.5 -30.7 -223.1 -61.5 -205.3 -85.1C-187.5 -108.6 -168.4 -125 -152.2 -152.2C-136 -179.4 -122.8 -217.4 -97.9 -236.5C-73.1 -255.5 -36.5 -255.7 0 -255.9L0 0Z" fill="#3e616a" />
//         <path d="M-219.4 0C-205.3 -26.3 -191.2 -52.7 -176 -72.9C-160.8 -93.1 -144.3 -107.2 -130.5 -130.5C-116.6 -153.8 -105.3 -186.3 -84 -202.7C-62.6 -219 -31.3 -219.2 0 -219.4L0 0Z" fill="#5f7c83" />
//       </g>
  
//       <g transform="translate(0, 0)">
//         <path d="M292.5 0C283.7 39.5 274.8 79.1 252.2 104.5C229.6 129.9 193.3 141.2 170.4 170.4C147.5 199.7 138.1 246.9 111.9 270.2C85.8 293.6 42.9 293 0 292.5L0 0Z" fill="#1a4752" />
//         <path d="M255.9 0C248.2 34.6 240.5 69.2 220.7 91.4C200.9 113.6 169.1 123.5 149.1 149.1C129.1 174.7 120.8 216 97.9 236.5C75.1 256.9 37.5 256.4 0 255.9L0 0Z" fill="#3e616a" />
//         <path d="M219.4 0C212.7 29.6 206.1 59.3 189.2 78.4C172.2 97.4 145 105.9 127.8 127.8C110.6 149.7 103.6 185.2 84 202.7C64.3 220.2 32.2 219.8 0 219.4L0 0Z" fill="#5f7c83" />
//       </g>
//     </svg>
//   );
  