const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.json("Hello");
});

app.listen(3000,() => {
    console.log(`App is running on port 3000`);
});

