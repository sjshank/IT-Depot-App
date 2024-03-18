# IT Garage

    * IT Garage platform as software offers workflow management that enables organizations to manage incident problems related with access control, hardware, project & software. *

## Functional Features

    - User should able to login into system using email : "johndoe@example.com"
    - Authorized users should have provision to navigate pages such as Dashboard, Report & Update Incident
    - Each page must have header & subheader
    - Dashboard screen should highlight overall incident metrics along with incident grid view grouped by category
    - User should have provision to submit or update incident details in different categories
    - User should have provision to View or Delete incident
    - Form should ask incident details such as title, description, category, priority & assignee
    - Basic validation should be implemented at client side
    - Only authenticate users navigate to different pages from main navigation menu

## Non-Functional Features

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
    - Express-validator : NextJS APIs validator with Middleware to integrate with express-validator
    - Formik & Yup : Implemented to render forms, submit data & client validation
    - useMemo, React.memo, useCallback : Memiozed & optimize component performance
    - HOC :  Reuse component logic, form layout, page layout
    - Constants : Static dropdown values
    - ValidationRules : Added to validate & sanitize inputs at API route handler
    - Helper : utility functions added

## Demo

   <img width="1470" alt="Screenshot 2024-03-18 at 7 45 20 PM" src="https://github.com/sjshank/IT-Depot-App/assets/17022643/df887eac-8837-4247-8160-3c2d1039bc73">
   <img width="1470" alt="Screenshot 2024-03-18 at 7 45 41 PM" src="https://github.com/sjshank/IT-Depot-App/assets/17022643/97bd7889-d4d5-4845-885a-6d1180921853">
   <img width="1470" alt="Screenshot 2024-03-18 at 7 45 57 PM" src="https://github.com/sjshank/IT-Depot-App/assets/17022643/bc2d3e56-fce8-48e3-8ff0-adb2dc13b372">
   <img width="1470" alt="Screenshot 2024-03-18 at 7 46 18 PM" src="https://github.com/sjshank/IT-Depot-App/assets/17022643/d01b6336-2742-4041-bd18-18fc5f1d4bc5">
   <img width="1470" alt="Screenshot 2024-03-18 at 7 46 26 PM" src="https://github.com/sjshank/IT-Depot-App/assets/17022643/7f57c22f-6778-4968-ae31-b73177c4c836">

   
## Dependencies

    - React :  [18.2](https://react.dev/learn/installation)
    - MUI : [5.15](https://mui.com/)
    - MongoDB : [6.4](https://www.mongodb.com/)
    - Formik : [2.4](https://formik.org/)
    - Snyk : [1.12](https://snyk.io/)
    - NextAuth : [4.2](https://next-auth.js.org/)
