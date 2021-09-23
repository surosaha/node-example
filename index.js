const express = require('express')
var path = require('path')
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function(req,res){
   res.render('pages/home');
})

app.listen(port, ()=> console.log(`MasterEJS app started on port ${port}!`));








