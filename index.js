const express = require("express");
const userRouter = require("./router/user.router");
const app = express();
const cors = require('cors');
const port = 5000 || process.env.PORT;


app.use(cors());
app.use(express.json())

app.use('/user', userRouter)



app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})