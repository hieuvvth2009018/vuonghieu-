const express = require('express')
const app = express();
const port = 5000;

app.set('views', 'views');

app.set('view engine', 'ejs');

app.use(express.static("images"));
app.use(express.static("css"));
app.use(express.static("js"));


app.get('/home', (req, res) => {
    res.render('hello')
});



app.listen(port, function(){
    console.log('Example app listening on port ' + port);
});

