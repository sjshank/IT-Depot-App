/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

//CSP header configuration
const cspHeader = `
    default-src 'none'; 
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    connect-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
`;

const nextConfig = {
  reactStrictMode: true, // run react strict mode
  crossOrigin: "anonymous", // Use the crossOrigin option to add a crossorigin attribute all script tags generated by nextjs.
  distDir: "build", // custom build directory to use instead of .next
  //allow you to set custom HTTP headers
  //async function that expects an array to be returned holding objects with source and headers properties
  async headers() {
    return [
      {
        source: "/(.*)", //incoming request path pattern
        headers: [
          // CSP policy to secure application from unauthorized content injection
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
          //Indicates whether the site should be allowed to be displayed within an iframe. This can prevent against clickjacking attacks.
          {
            key: "X-Frame-Options",
            value: process.env.X_FRAME_OPTION,
          },
          //prevents the browser from attempting to guess the type of content if the Content-Type header is not explicitly set. This can prevent XSS exploits for websites that allow users to upload and share files
          {
            key: "X-Content-Type-Options",
            value: process.env.X_CONTENT_TYPE_OPTION,
          },
          //controls how much information the browser includes when navigating from the current website (origin) to another
          {
            key: "Referrer-Policy",
            value: process.env.REFERRER_POLICY,
          },
          //informs browsers it should only be accessed using HTTPS, instead of using HTTP
          {
            key: "Strict-Transport-Security",
            value: process.env.STRICT_TRANSPORT_SECURITY,
          },
          //controls DNS prefetching, allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      //CORS support for route handlers,
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  //log all the fetch api calls
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  poweredByHeader: false,
  // replacing Terser with SWC for minifying JavaScript
  swcMinify: true,
};

export default withBundleAnalyzer(nextConfig);
