type Bundesland = {
  name: string;
  insuranceRate: number;
};

export const bundeslaender: { [key: string]: Bundesland } = {
  badenWuerttemberg: {
    name: "Baden-Württemberg",
    insuranceRate: 0.12,
  },
  bayern: {
    name: "Bayern",
    insuranceRate: 0.11,
  },
  berlin: {
    name: "Berlin",
    insuranceRate: 0.14,
  },
  brandenburg: {
    name: "Brandenburg",
    insuranceRate: 0.13,
  },
  bremen: {
    name: "Bremen",
    insuranceRate: 0.1,
  },
  hamburg: {
    name: "Hamburg",
    insuranceRate: 0.12,
  },
  hessen: {
    name: "Hessen",
    insuranceRate: 0.11,
  },
  mecklenburgVorpommern: {
    name: "Mecklenburg-Vorpommern",
    insuranceRate: 0.12,
  },
  niedersachsen: {
    name: "Niedersachsen",
    insuranceRate: 0.11,
  },
  nordrheinWestfalen: {
    name: "Nordrhein-Westfalen",
    insuranceRate: 0.13,
  },
  rheinlandPfalz: {
    name: "Rheinland-Pfalz",
    insuranceRate: 0.12,
  },
  saarland: {
    name: "Saarland",
    insuranceRate: 0.11,
  },
  sachsen: {
    name: "Sachsen",
    insuranceRate: 0.1,
  },
  sachsenAnhalt: {
    name: "Sachsen-Anhalt",
    insuranceRate: 0.11,
  },
  schleswigHolstein: {
    name: "Schleswig-Holstein",
    insuranceRate: 0.1,
  },
  thueringen: {
    name: "Thüringen",
    insuranceRate: 0.11,
  },
};
