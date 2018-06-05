const express = require('express')
const app = express();
const path = require('path');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
