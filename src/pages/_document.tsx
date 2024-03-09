import * as React from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";

export default function AppDocument(
  props: DocumentProps & DocumentHeadTagsProps
) {
  return (
    <Html lang="en">
      {/* Head metatags added */}
      <Head>
        <meta
          name="description"
          content="An incident tracing application reported by employees in organization."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Nextjs, Reactjs"
        />
        <meta name="author" content="Saurabh Shankariya" />
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'none'; script-src 'self' 'unsafe-eval'; connect-src 'self'; img-src 'self'; style-src 'self' 'unsafe-inline';
          base-uri 'self';form-action 'self'"
        ></meta> */}
        <link rel="icon" href="/favicon.ico" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
