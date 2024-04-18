/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Adicione a regra do loader
    config.module.rules.push({
      test: [/\.webm$/, /\.mp4$/, /\.ogv$/],
      use: {
        loader: "file-loader",
        options: {
          name: "assets/video/[name].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
