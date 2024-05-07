import { googleTagManager } from "~/shared/config";

export default function GoogleAnalytics() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-${googleTagManager}');
`,
      }}
    ></script>
  );
}
