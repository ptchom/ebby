import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
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
// const MyPDFDownloadLink = () => (
//   <PDFDownloadLink document={<MyDocument />} fileName="my-file-name.pdf">
//     {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
//   </PDFDownloadLink>
// );
// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>eb.by - ZinsrechnerForm</Text>
        <Text>
          Derzeit funktioniert die PDF-Generierungsfunktion nicht. Wir sind uns
          dieses Problems bewusst und arbeiten aktiv daran, es so schnell wie
          möglich zu beheben. Wir danken Ihnen für Ihr Verständnis und Ihre
          Geduld.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
