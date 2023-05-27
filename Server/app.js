const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const sequelize = require("./utils/database.js");
const orderRoutes = require('./routes/orderRoutes.js');

const app = express();
app.use(body_parser.json());
app.use(
    cors({
        origin: "*"
    })
);

app.use(`/orders`, orderRoutes);

sequelize.sync()
    .then((result) => {
        app.listen(8000);
        console.log("Listening at port no 8000")
    })
    .catch((err) => console.log(err));

