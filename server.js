const express = require("express");
const cors = require("cors");
const knex = require("knex");
const bcrypt = require("bcrypt-nodejs");


const register = require("./controllers/register");
const login = require("./controllers/login");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : '9987',
        database : 'alive'
    }
});


app.get("/",(req,res)=>{
    db.select("*")
        .from("users")
        .then(users => res.json(users))
        .catch(error => {
            res.status(400).json("Error occured fetching db");
            console.log(error);
        });
});

app.post("/register",(req,res)=>{register.register(req,res,db,bcrypt)});
app.post("/login",(req,res)=>{login.login(req,res,db,bcrypt)});

app.listen(3000,() => {
    console.log(`App is running on port 3000`);
});

