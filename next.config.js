/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ["app.localhost:3000"],
    },
  },
  images: {
    remotePatterns: [
      { hostname: "q9h60nauzszpyoua.public.blob.vercel-storage.com" },
      { hostname: "public.blob.vercel-storage.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "abs.twimg.com" },
      { hostname: "pbs.twimg.com" },
      { hostname: "avatar.vercel.sh" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "www.google.com" },
      { hostname: "flag.vercel.app" },
      { hostname: "illustrations.popsy.co" },
    ],
  },
};
