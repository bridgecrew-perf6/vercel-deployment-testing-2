const express = require("express")
const app = express()
const product = require("./api/product")

app.use("/api/product",product);
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log("server is running on port "+PORT))