const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const categories = require('./data/chefCategories.json');

app.get('/', (req,res) => {
    res.send('Chef is running');
})

app.get('/categories', (req,res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`);
})