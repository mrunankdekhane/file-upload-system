const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const expressLayouts = require("express-ejs-layouts");

const app = express();
connectDB();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(expressLayouts);
app.set("layout", "layout");

app.use("/", require("./routes/fileRoutes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});