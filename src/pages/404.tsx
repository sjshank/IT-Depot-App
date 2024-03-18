import Layout from "@/layout";

// Override inbuilt 404 error page with customized
export default function Custom404Page() {
  return (
    <Layout>
      <div id="fof-main">
        <div className="fof">
          <h1>Error 404</h1>
          <p>Page not found</p>
        </div>
      </div>
    </Layout>
  );
}
