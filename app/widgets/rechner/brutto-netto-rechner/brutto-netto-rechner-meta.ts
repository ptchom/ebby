import { WEBSITE_API } from "~/shared/config/api";
import { metatags } from "~/shared/seo/meta-semantic";

export const metaBruttoNetto = [
  { title: "Brutto Netto Rechner" },
  {
    name: metatags.description,
    content:
      "Der Brutto Netto Rechner hilft Ihnen, Ihr Nettogehalt basierend auf Ihrem Bruttogehalt zu berechnen. Er berücksichtigt Faktoren wie Steuern, Sozialabgaben und andere Abzüge.",
  },
  { name: metatags.language, content: "DE" },
  {
    name: metatags.keywords,
    content: "Brutto Netto Rechner, Nettogehalt berechnen, Gehaltsrechner",
  },
  { name: metatags.classification, content: WEBSITE_API.classification },
  { name: metatags.author, content: WEBSITE_API.author },
  { name: metatags.owner, content: WEBSITE_API.author },
  { name: metatags.url, content: WEBSITE_API.url },
];
