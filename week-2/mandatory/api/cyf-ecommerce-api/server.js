const express = require('express');
const { Pool } = require('pg');
const app = express();




app.get('/', (req, res) => {
    res.send('Hello Express')
});


app.get("/customers", (req, res) => {
    res.send("customers")
}
)
app.get("/suppliers", (req, res) => {
    res.send("supliers")
}
)
app.get("/products", (req, res) => {
    res.send("products")
}
)
app.listen(3000, () => console.log("Server is up and running"))