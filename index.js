const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.use('/user', )



app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('*', (req, res) => {
    res.send("API is NOT Found")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})