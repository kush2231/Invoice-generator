import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./new.css";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  Grid,
  IconButton,
} from "@mui/material";
import getSymbolFromCurrency from "currency-symbol-map";
import SideComponent from "./SideComponent";

const MyForm = () => {
  const [invoicefrom, setinvoicefrom] = useState("");
  const [invoiceto, setinvoiceto] = useState("");
  const [shipto, setshipto] = useState("");
  const [cddate, setdcdate] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [paymentTerms, setpaymentTerms] = useState("");
  const [POnumber, setPOnumber] = useState("");
  const [currency, setcurrency] = useState("USD");
  const [taskId, settaskId] = useState();
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("item1");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [AmountPaid, setAmountPaid] = useState(0);
  const [total, settotal] = useState(0);
  const [Terms, setTerms] = useState("");
  const [Notes, setNotes] = useState("");
  const [discountrate, setdiscountrate] = useState(0);
  const [taxRate, settaxRate] = useState(0);
  const [Shipping, setShipping] = useState(0);
  const [invoiceNo, setinvoiceNo] = useState(1);
  const [edit, setedit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setformData] = useState({
    invoiceNo: invoiceNo,
    invoicefrom: invoicefrom,
    cddate: cddate,
    dueDate: dueDate,
    selectedImage: selectedImage,

    invoiceto: invoiceto,
    shipto: shipto,
    Shipping: Shipping,
    paymentTerms: paymentTerms,
    items: items,
    POnumber: POnumber,
    total: total,
    description: description,
    quantity: quantity,
    unitPrice: unitPrice,
    Discount: (total * discountrate) / 100,
    Tax: (total * taxRate) / 100,
    AmountPaid: AmountPaid,
    AmountDue:
      total -
      (total * discountrate) / 100 +
      (total * taxRate) / 100 +
      Number(Shipping) -
      AmountPaid,
    Notes: Notes,
    Terms: Terms,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setformData({
      invoiceNo: invoiceNo,
      invoicefrom: invoicefrom,
      POnumber: POnumber,
      cddate: cddate,
      dueDate: dueDate,
      invoiceto: invoiceto,
      shipto: shipto,
      items: items,
      total: total,
      selectedImage: selectedImage,

      description: description,
      quantity: quantity,
      unitPrice: unitPrice,
      paymentTerms: paymentTerms,
      Discount: (total * discountrate) / 100,
      Tax: (total * taxRate) / 100,
      AmountPaid: AmountPaid,
      Shipping: Shipping,
      AmountDue:
        total -
        (total * discountrate) / 100 +
        (total * taxRate) / 100 +
        Number(Shipping) -
        AmountPaid,
      Notes: Notes,
      Terms: Terms,
    });
  };

  const addItem = () => {
    const newItem = {
      description,
      quantity,
      unitPrice,
    };
    const currPrice = quantity * unitPrice + total;
    settotal(currPrice);
    setItems([...items, newItem]);
    setDescription("");
    setQuantity(0);
    setUnitPrice(0);
    // alert("Item will  be Added ");
  };
  
  const editItem = (index) => {
    setedit(true);
    settaskId(index);
    const editalbe = items[index].quantity * items[index].unitPrice;
    settotal(total - editalbe);
    const updatedItems = [...items];
    setDescription(updatedItems[index].description);
    setQuantity(updatedItems[index].quantity);
    setUnitPrice(updatedItems[index].unitPrice);
  };
  const updateitem = () => {
    const newItem = {
      description,
      quantity,
      unitPrice,
    };

    // Create a copy of the array
    const newArray = [...items];

    // Update the object at the specified index
    newArray[taskId] = newItem;
    settotal(total + quantity * unitPrice);
  
    // Update the state with the new array
    setItems(newArray);
    // alert("Item will  Updated successfully");
    setDescription("");
    setQuantity(0);
    setUnitPrice(0);

    setedit(false);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    let newtotal = 0;
    for (let i = 0; i < newItems.length; i++) {
      newtotal += newItems[i].quantity * newItems[i].unitPrice;
    }
    settotal(newtotal);
    // alert(" Removing Item ");
  };
  const handlecurrency = (data) => {
    setcurrency(data); // callback from the side component to get data from the child component
  };

  const handleFileChange = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setSelectedImage(imageUrl);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <input
                type='file'
                id='fileInput'
                accept='.jpg,.jpeg,.png'
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {
                <label htmlFor='fileInput'>
                  <IconButton
                    color='primary'
                    aria-label='upload file'
                    component='span'
                  >
                    <CloudUploadIcon fontSize='large' />
                    add your logo
                  </IconButton>
                </label>
              }
              {selectedImage && (
                <img
                  style={{ height: "120px", width: "120px" }}
                  src={selectedImage}
                  alt='Uploaded'
                />
              )}
              <br />
              <TextField
                label='InvoiceFrom'
                required
                type='text'
                placeholder='Who is this invoice From'
                value={invoicefrom}
                onChange={(e) => setinvoicefrom(e.target.value)}
                margin='none'
              />
              <div style={{ display: "flex" }}>
                <TextField
                  label='BillTo'
                  required
                  type='text'
                  value={invoiceto}
                  onChange={(e) => setinvoiceto(e.target.value)}
                  placeholder='Who is this invoice To'
                  margin='none'
                  style={{
                    marginRight: "10px",
                    marginLeft: "20px",
                  }}
                />
                <TextField
                  label='ShipTo'
                  type='text'
                  value={shipto}
                  onChange={(e) => setshipto(e.target.value)}
                  placeholder='Ship To'
                  margin='none'
                  style={{}}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Invoice'
                required
                type='number'
                placeholder='invoice id'
                value={invoiceNo}
                onChange={(e) => setinvoiceNo(e.target.value)}
                margin='none'
                style={{
                  margin: "25px 20px 20px 0px",
                }}
              />
              <br />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  label='Date'
                  focused
                  type='date'
                  value={cddate}
                  onChange={(e) => setdcdate(e.target.value)}
                  style={{
                    height: "70px",
                    width: "50%",
                    marginLeft: "100px",
                  }}
                />
                <TextField
                  label='Payment Terms'
                  type='text'
                  value={paymentTerms}
                  onChange={(e) => setpaymentTerms(e.target.value)}
                  placeholder='Payment Terms'
                  style={{
                    height: "70px",
                    width: "50%",
                    marginLeft: "100px",
                  }}
                />
                <TextField
                  label='Due Date'
                  type='date'
                  focused
                  value={dueDate}
                  onChange={(e) => setdueDate(e.target.value)}
                  style={{
                    height: "70px",
                    width: "50%",
                    marginLeft: "100px",
                  }}
                />
                <TextField
                  label='PO Number'
                  type='text'
                  value={POnumber}
                  onChange={(e) => setPOnumber(e.target.value)}
                  placeholder='PO number'
                  style={{
                    height: "70px",
                    width: "50%",
                    marginLeft: "100px",
                  }}
                />
              </div>
            </Grid>
          </Grid>

          <div>
            <TextField
              label='item description'
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <TextField
              label='Quantity'
              type='number'
              placeholder='Quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <TextField
              label='Unit Price'
              type='number'
              placeholder='Unit Price'
              id='outlined-start-adornment'
              // sx={{ m: 1, width: "25ch"    height:"10px", width:"50%"}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>{currency}</InputAdornment>
                ),
              }}
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            {!edit && (
              <Button onClick={addItem} variant='contained'>
                Add Item
              </Button>
            )}
            {edit && (
              <Button onClick={updateitem} variant='contained'>
                update item
              </Button>
            )}

            <table
              // className={styles.customtable}
              style={{
                width: "100%",
                border: "1px solid lightgray",
                marginTop: "10px",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#1563a3",
                }}
              >
                <tr>
                  <th
                    style={{
                      width: "40%",
                    }}
                  >
                    Description
                  </th>
                  <th>Quantity</th>
                  <th>Price </th>
                  <th>Amount </th>
                  <th>Edit </th>
                  <th>Remove </th>
                </tr>
              </thead>

              {items.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <span>
                        {item.unitPrice} {getSymbolFromCurrency(currency)}
                      </span>
                    </td>
                    <td>
                      <span>
                        {item.quantity * item.unitPrice}
                        {getSymbolFromCurrency(currency)}
                      </span>
                    </td>
                    <td>
                      <span>
                        <Button
                          onClick={() => editItem(index)}
                          variant='contained'
                          color='success'
                        >
                          edit
                        </Button>
                      </span>
                    </td>
                    <td>
                      <span>
                        <Button
                          onClick={() => removeItem(index)}
                          variant='contained'
                          color='error'
                        >
                          Remove
                        </Button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <Grid container spacing={2} style={{ marginTop: "15px" }}>
            <Grid xs={6}>
              <TextField
                label='Notes'
                type='text'
                placeholder='Notes - any relevant information not already covered'
                value={Notes}
                multiline
                onChange={(e) => setNotes(e.target.value)}
                style={{ margin: "0px 30px", width: "80%" }}
              />
              <br />
              <br />
              <TextField
                label='Terms'
                type='text'
                placeholder='Terms and conditions - late fees, payment methods, delivery schedule'
                value={Terms}
                fullWidth
                multiline
                style={{ margin: "0px 30px", width: "80%" }}
                onChange={(e) => setTerms(e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <table
                // className={styles.customtable}
                style={{ width: "100%", border: "1px solid lightgray " }}
              >
                <tbody>
                  <tr>
                    <td>Sub Total</td>
                    <td>
                      {" " + getSymbolFromCurrency(currency) + " "}
                      {total}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography> Discount</Typography>
                    </td>
                    <td>
                      <TextField
                        label='Discount %'
                        type='number'
                        placeholder='discount rate'
                        focused
                        value={discountrate}
                        onChange={(e) => setdiscountrate(e.target.value)}
                        style={{ marginRight: "10px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography> Tax Rate</Typography>
                    </td>
                    <td>
                      <TextField
                        focused
                        label='Tax'
                        type='number'
                        placeholder='tax rate'
                        value={taxRate}
                        onChange={(e) => settaxRate(e.target.value)}
                        style={{ marginRight: "10px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography> Shiping</Typography>
                    </td>
                    <td>
                      <TextField
                        focused
                        label='Shipping'
                        type='number'
                        placeholder='Shipping'
                        value={Shipping}
                        onChange={(e) => setShipping(e.target.value)}
                        style={{ marginRight: "10px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography> after all Calculations </Typography>
                    </td>
                    <td>
                      {total -
                        (total * discountrate) / 100 +
                        (total * taxRate) / 100 +
                        Number(Shipping)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography> amountPaid </Typography>
                    </td>
                    <td>
                      <TextField
                        focused
                        label='Amount paid'
                        type='number'
                        placeholder='Amout PAid'
                        value={AmountPaid}
                        onChange={(e) => setAmountPaid(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography> Due Amount </Typography>
                    </td>
                    <td>
                      {getSymbolFromCurrency(currency)}
                      {total -
                        (total * discountrate) / 100 +
                        (total * taxRate) / 100 +
                        Number(Shipping) -
                        AmountPaid}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
          <Button type='submit' variant='contained' color='primary'>
            Submit Details

          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <SideComponent formData={formData} handlecurrency={handlecurrency} />
      </Grid>
    </Grid>
  );
};

export default MyForm;
