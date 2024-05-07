import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ZinsrechnerPdfData } from "~/ui/rechner/zinsrechner-form/type";

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
export const PdfDocument = ({ content }: { content: ZinsrechnerPdfData }) => {
  if (!content) {
    return null; // или верните индикатор загрузки, если вам это нужно
  }
  const { test1, test2 } = content;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>eb.by - ZinsrechnerForm</Text>
          <Text>{debug}</Text>
          <Text>{test1}</Text>
        </View>
        <View style={styles.section}>
          <Text>{test1}</Text>
          <Text>{test2}</Text>
        </View>
      </Page>
    </Document>
  );
};
