const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors({
    origin: "*"
}));

const routes = require("./routeur/routeur");
app.use(routes);

app.listen(port, () => console.log('listening on port ${port}'));