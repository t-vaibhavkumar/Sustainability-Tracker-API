const express = require('express');
const dotenv = require('dotenv').config();
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");


const app = express();
const port = process.env.PORT || 3000;
const dataPath = process.env.DATA_PATH || "./data.json";

app.use(cors());
app.use(express.json());
app.use("/api/actions", require("./routes/actionRoutes"));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})