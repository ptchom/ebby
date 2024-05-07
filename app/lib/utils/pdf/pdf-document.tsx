import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ReactNode } from "react";

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
export const PdfDocument = ({ content }: { content: ReactNode }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>eb.by - ZinsrechnerForm</Text>
        <Text>{debug}</Text>
      </View>
      <View style={styles.section}>
        <Text>{content}</Text>
      </View>
    </Page>
  </Document>
);
