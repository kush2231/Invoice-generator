import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import getSymbolFromCurrency from "currency-symbol-map";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    width: "95%",
    justifyContent: "space around",
    margin: "auto",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
  table: {
    display: "table",
    width: "95%",
    margin: "auto",
    border: "1px solid lightgray",
  },
  tableRow: {
    flexDirection: "row",
    border: "1px solid lightgray",
  },
  tableCell: {
    padding: 5,
    flex: 1,
    border: "1px solid lightgray",
  },
});

const PDFDocument = ({ formData, currency }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View>
          <div style={{ display: "flex" }}>
            <Image
              src={formData.selectedImage}
              style={{ height: "120px", width: "120px" }}
              alt='uploadedImage'
            />
            <Text
              style={{
                fontSize: "40px",
                alignSelf: "flex-end",
              }}
            >
              InvoiceNo #{formData.invoiceNo}
            </Text>
          </div>
          <Text style={{ marginLeft: "20px" }}>
            Invoice from:{formData.invoicefrom}
          </Text>
          <Text style={{ marginLeft: "20px", alignSelf: "flex-start" }}>
            Invoice to:
            {formData.invoiceto}
          </Text>
          <Text style={{ margin: "5px 3px", alignSelf: "flex-end" }}>
            <Text>Payment Terms: </Text>
            {formData.paymentTerms}
          </Text>
          <Text style={{ margin: "5px 3px", alignSelf: "flex-end" }}>
            <Text>PO number: </Text>
            {formData.POnumber}
          </Text>
          <Text style={{ marginLeft: "190px", alignSelf: "flex-start" }}>
            Ship To:
            {formData.shipto}
          </Text>
          <Text style={{ margin: "5px 3px", alignSelf: "flex-end" }}>
            <Text>Date: </Text> {formData.cddate}
          </Text>
          <Text
            style={{
              margin: "5px 3px",
              alignSelf: "flex-end",
            }}
          >
            <Text>Due Date: </Text>
            {formData.dueDate}
          </Text>
          <View style={styles.table}>
            <View
              style={{ flexDirection: "row", backgroundColor: "lightblue" }}
            >
              <Text style={styles.tableCell}>Quantity </Text>
              <Text style={styles.tableCell}>Item Description</Text>
              <Text style={styles.tableCell}>Price </Text>
              <Text style={styles.tableCell}>Amount</Text>
            </View>
            {formData.items.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.quantity}</Text>
                <Text style={styles.tableCell}>{item.description}</Text>
                <Text style={styles.tableCell}>
                  {item.unitPrice}
                  {getSymbolFromCurrency(currency)}
                </Text>
                <Text style={styles.tableCell}>
                  {item.unitPrice * item.quantity}
                  {getSymbolFromCurrency(currency)}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              marginTop: "20px",
              margin: "5px 3px",

              alignSelf: "flex-end",
            }}
          >
            <Text>Sub total: </Text>
            {getSymbolFromCurrency(currency)} {formData.total}
          </Text>
          <Text
            style={{
              margin: "5px 3px",

              alignSelf: "flex-end",
            }}
          >
            <Text>Discount: </Text>
            {getSymbolFromCurrency(currency)} {formData.Discount}
          </Text>
          <Text
            style={{
              margin: "5px 3px",

              alignSelf: "flex-end",
            }}
          >
            <Text> Tax: </Text>
            {getSymbolFromCurrency(currency)} {formData.Tax}
          </Text>
          <Text
            style={{
              margin: "5px 3px",

              alignSelf: "flex-end",
            }}
          >
            <Text>Shipping: </Text>
            {getSymbolFromCurrency(currency)} {formData.Shipping}
          </Text>
          <Text
            style={{
              margin: "5px 3px",
              alignSelf: "flex-end",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            : {getSymbolFromCurrency(currency)}{" "}
            {Number(formData.AmountDue) + Number(formData.AmountPaid)}
          </Text>
          <Text
            style={{
              margin: "5px 3px",
              alignSelf: "flex-end",
              marginBottom: "20px",
            }}
          >
            <Text>Amount paid: </Text>
            {getSymbolFromCurrency(currency)}
            {formData.AmountPaid}
          </Text>
          <Text
            style={{
              margin: "5px 3px",
              alignSelf: "flex-end",

              marginBottom: "20px",
            }}
          >
            <Text>Balance Due: </Text>
            {getSymbolFromCurrency(currency)} {formData.AmountDue}
          </Text>

          <div style={{ marign: "50px" }}></div>
          <Text style={{ margin: "5px 3px", alignSelf: "flex-start" }}>
            Notes :{formData.Notes}
          </Text>
          <Text style={{ margin: "5px 3px", alignSelf: "flex-start" }}>
            Terms:
            {formData.Terms}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
