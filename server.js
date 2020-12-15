const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(8080, () =>{
    console.log('listening to 8080')
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/page.html');
});