import Layout from "@/layout";

// Override inbuilt 500 error page with customized
export default function Custom500Page() {
  return (
    <Layout>
      <div id="fof-main">
        <div className="fof">
          <h1>Error 500</h1>
          <p>Internal server error</p>
        </div>
      </div>
    </Layout>
  );
}
