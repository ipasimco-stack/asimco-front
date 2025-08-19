import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazir:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* <script type="text/javascript">
          (
          function () {
            document.createElement("script").type = "text/javascript",
            document.createElement("script").async = true,
            document.createElement("script").src = "https://www.goftino.com/widget/" + "HrYZnf",
            document.getElementsByTagName("head")[0].appendChild(document.createElement("script")),
  }
          )();
        </script> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
