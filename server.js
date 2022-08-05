const express = require('express');
const session = require('express-session');
const path = require('path');
const exphns = require('express-handlebars');
const sequelize = require('sequelize');
const app = express();

const PORT = process.env.PORT || 3001;

//app.use(session(sess));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})