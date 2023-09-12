import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>

            {/* Start your Google Analytics event tracking code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function gtag_report_conversion(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  gtag('event', 'conversion', {
                      'send_to': 'AW-11000791019/Ckm-CJq-hOAYEOv_yv0o',
                      'event_callback': callback
                  });
                  return false;
                }
              `,
            }}
          />
            {/* End your Google Analytics event tracking code */}

            {/* Place your Google Ads gtag.js code here */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11000791019"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11000791019');
              `,
            }}
          />
          {/* End of Google Ads gtag.js code */}

          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-HHE37ED8GC"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HHE37ED8GC');
            `,
            }}
          ></script>
          {/* Google tag end (gtag.js) */}

          </Head>
          <body>

          {/* Start your noscript iframe code */}
          
          {/* End your noscript iframe code */}
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }