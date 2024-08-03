import { WEBSITE_API } from "~/shared/config/api";
import { metatags } from "~/shared/seo/meta-semantic";

export const metaSparrechner = [
  { title: "Sparrechner" },
  {
    name: metatags.description,
    content:
      "Der Sparrechner hilft Ihnen dabei, Ihre Ersparnisse zu planen und zu verwalten. Er berechnet zukünftige Sparbeträge basierend auf regelmäßigen Einzahlungen, Zinssätzen und Laufzeiten.",
  },
  { name: metatags.language, content: "DE" },
  {
    name: metatags.keywords,
    content: "Sparrechner, Sparen, Finanzplanung",
  },
  { name: metatags.classification, content: WEBSITE_API.classification },
  { name: metatags.author, content: WEBSITE_API.author },
  { name: metatags.owner, content: WEBSITE_API.author },
  { name: metatags.url, content: WEBSITE_API.url },
];
