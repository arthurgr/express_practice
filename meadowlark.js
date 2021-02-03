const express = require('express');
const expressHandlebars = require('express-handlebars');
const fortune = require('./lib/fortune');

const app = express();

// const fortunes = [
// 	"fortune 1",
// 	"fortune 2",
// 	"fortune 3",
// 	"fortune 4",
// 	"fortune 5",
// ];

app.use(express.static(__dirname + '/public'));

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
	//const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
	res.render('about', { fortune: fortune.getFortune() })
});

//custom 404 page
app.use((req, res) => {
	//res.type('text/plain');
	res.status(404);
	res.render('404');
});

//custom 500 page
app.use((err, req, res, next) => {
	//res.type('text/plain');
	res.status(500);  
	res.render('500');
});

app.listen(port, () => console.log(`Express started on http://localhost:${port};` + `press Ctrl-C to terminate`));
