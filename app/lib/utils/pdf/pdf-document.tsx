import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { ZinsrechnerUserData } from "~/pages/rechner/zinsrechner-form/type";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const debug =
  "Derzeit funktioniert die PDF-Generierungsfunktion nicht. Wir sind uns dieses Problems bewusst und arbeiten aktiv daran, es so schnell wie möglich zu beheben. Wir danken Ihnen für Ihr Verständnis und Ihre Geduld.";
export const PdfDocument = ({ content }: { content: ZinsrechnerUserData }) => {
  if (!content) {
    return null; // или верните индикатор загрузки, если вам это нужно
  }
  const {
    initialCapital,
    interestRate,
    duration,
    durationUnit,
    compoundInterest,
  } = content;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>eb.by - ZinsrechnerForm</Text>
          <Text>{debug}</Text>
        </View>
        <View style={styles.section}>
          <Text>Anfangskapital: {initialCapital}</Text>
          <Text>Zinssatz: {interestRate}</Text>
          <Text>Laufzeit: {duration}</Text>
          <Text>LaufzeitUnit: {durationUnit}</Text>
          <Text>Zinseszins: {compoundInterest ? "ja" : "nein"}</Text>
        </View>
      </Page>
    </Document>
  );
};
