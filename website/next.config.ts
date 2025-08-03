import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Handle trailing slashes consistently  
    trailingSlash: false,

    // Ensure proper image optimization on Vercel
    images: {
        unoptimized: false,
    },
};

export default nextConfig;
