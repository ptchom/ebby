import { WEBSITE_API } from "~/shared/config/api";
import { metatags } from "~/shared/seo/meta-semantic";

export const metaZinsrechner = [
  { title: "Zinsrechner" },
  {
    name: metatags.description,
    content:
      "Der Zinsrechner hilft Ihnen, die Zinsen für verschiedene Finanzierungsoptionen zu berechnen. Er berücksichtigt Faktoren wie den Zinssatz, die Laufzeit und den Kreditbetrag.",
  },
  { name: metatags.language, content: "DE" },
  {
    name: metatags.keywords,
    content: "Zinsrechner, Zinsen berechnen, Finanzierungsrechner",
  },
  { name: metatags.classification, content: WEBSITE_API.classification },
  { name: metatags.author, content: WEBSITE_API.author },
  { name: metatags.owner, content: WEBSITE_API.author },
  { name: metatags.url, content: WEBSITE_API.url },
];
