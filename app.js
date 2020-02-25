const express = require("express");
const config = require("config");

const port = process.env.PORT || config.get("PORT");
const app = express();

const user = require("./routes/user");
//DB Connection
require("./dbConnect");

app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//User Routes
app.use("/user", user);


app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
});