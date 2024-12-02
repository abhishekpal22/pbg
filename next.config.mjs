/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        // {
        //   protocol: 'http', // or 'http', depending on your domain's protocol
        //   hostname: '127.0.0.1',
        //   pathname: '/**', // This will allow images from all paths under this domain
        // },
        {
          protocol: 'https', // or 'http', depending on your domain's protocol
          hostname: 'pbgadmin.onrender.com',
          pathname: '/**', // This will allow images from all paths under this domain
        },
        {
          protocol: 'https', // or 'http', depending on your domain's protocol
          hostname: 'res.cloudinary.com',
          pathname: '/**', // This will allow images from all paths under this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  