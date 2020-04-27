const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.listen(PORT, () => { console.log(`listening on Port ${PORT}`) });
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    axios.get('http://covid19api.xapix.io/v2/locations')
        .then((response) => {
            res.render('pages/home', { data: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
});
