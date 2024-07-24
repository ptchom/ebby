import { WEBSITE_API } from "~/lib/config/api";
import { metatags } from "~/lib/seo/meta-semantic";

export const metaZinsrechner = [
  { title: "Kreditrechner" },
  {
    name: metatags.description,
    content:
      "Die Berechnung der Kreditrechner kann eine komplexe Aufgabe sein, da sie von verschiedenen Faktoren abhängt, wie beispielsweise Ihrem persönlichen Einkommen, Ihrem Familienstand und anderen Details.",
  },
  { name: metatags.language, content: "DE" },
  {
    name: metatags.keywords,
    content: "Kreditrechnerrechner Kreditrechner",
  },
  { name: metatags.classification, content: WEBSITE_API.classification },
  { name: metatags.author, content: WEBSITE_API.author },
  { name: metatags.owner, content: WEBSITE_API.author },
  { name: metatags.url, content: WEBSITE_API.url },
];
