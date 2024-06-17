const express = require('express');
const cors = require('cors');
const port = 8080;

const app = express();

app.use(cors({
    origin: '*'
}));

app.set('view engine', 'ejs');

routes = require('./routeur/routeur');
app.use(routes);

app.use('/assets', express.static('assets'));

app.listen(port, () => console.log(`localhost:${port}/accueil`));