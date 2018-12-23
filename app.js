const express = require('express')
const app = express();
const PORT=process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/about-us', (req, res) => res.render('about-us'));
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/team', (req, res) => res.render('team'));
app.get('/contact-us', (req, res) => res.render('contact-us'));

app.listen(PORT, () => console.log('ShreeFabCon app listening on port 3000!'));
