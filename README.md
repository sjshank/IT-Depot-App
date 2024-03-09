# IT-Garage

IT incident application to trace all the incidents reported by employees.

# Non-Functional Features

    - SEO support added : robots.txt, sitemap.xml, sitemap generator on every build run
    - CSP header added for all route : XSS protection, content security
    - Other headers added for all route : X_FRAME_OPTION, X_CONTENT_TYPE_OPTION, REFERRER_POLICY, STRICT_TRANSPORT_SECURITY, X-DNS-Prefetch-Control
    - CORS added for route handlers : Access-Control-Allow-Origin, Access-Control-Allow-Methods
    - Mongodb connection for Dev & Prod : Global type for Mongoclient (Dev)
    - Env variables support : security headers, sitemap, mongodb uri
    - Typescript support
    - Core Web-Vitals support
    - Responsive behavior
    - Bundle analyzer support
    - Overrided 404, 500 & Error page
    - Enabled SWCMinify : Replaced Terser with SWC for minifying JavaScript