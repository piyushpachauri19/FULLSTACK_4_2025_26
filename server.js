const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
    users.push(req.body);
    res.send("Registered Successfully");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    let user = users.find(u => u.email === email && u.password === password);

    if(user){
        res.send("Login Success");
    }else{
        res.status(401).send("Invalid Credentials");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});