const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const fib = require('./build/Release/fib');

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/page.html');
});

app.post('/', (req,res) =>{
    const num = req.body.fib;
    
    const toReturn = fib.fibbonaci(Number(num));
    res.send(toReturn.toString());

});

app.listen(8080, () => {
    console.log('listening to 8080')
});
