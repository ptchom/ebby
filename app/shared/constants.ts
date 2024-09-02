type Bundesland = {
  name: string;
  insuranceRate: number;
  kirchebetrag?: number;
};

export const bundeslaender: { [key: string]: Bundesland } = {
  BadenWuerttemberg: {
    name: "Baden-Württemberg",
    kirchebetrag: 9,
    insuranceRate: 0.12,
  },
  Bayern: {
    name: "Bayern",
    insuranceRate: 0.11,
  },
  Berlin: {
    name: "Berlin",
    insuranceRate: 0.14,
  },
  Brandenburg: {
    name: "Brandenburg",
    insuranceRate: 0.13,
  },
  Bremen: {
    name: "Bremen",
    insuranceRate: 0.1,
  },
  Hamburg: {
    name: "Hamburg",
    insuranceRate: 0.12,
  },
  Hessen: {
    name: "Hessen",
    insuranceRate: 0.11,
  },
  MecklenburgVorpommern: {
    name: "Mecklenburg-Vorpommern",
    insuranceRate: 0.12,
  },
  Niedersachsen: {
    name: "Niedersachsen",
    insuranceRate: 0.11,
  },
  NordrheinWestfalen: {
    name: "Nordrhein-Westfalen",
    insuranceRate: 0.13,
  },
  RheinlandPfalz: {
    name: "Rheinland-Pfalz",
    insuranceRate: 0.12,
  },
  Saarland: {
    name: "Saarland",
    insuranceRate: 0.11,
  },
  Sachsen: {
    name: "Sachsen",
    insuranceRate: 0.1,
  },
  SachsenAnhalt: {
    name: "Sachsen-Anhalt",
    insuranceRate: 0.11,
  },
  SchleswigHolstein: {
    name: "Schleswig-Holstein",
    insuranceRate: 0.1,
  },
  Thueringen: {
    name: "Thüringen",
    insuranceRate: 0.11,
  },
};
