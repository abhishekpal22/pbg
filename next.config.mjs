/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // or 'http', depending on your domain's protocol
          hostname: 'pbgadmin.onrender.com',
          pathname: '/**', // This will allow images from all paths under this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  