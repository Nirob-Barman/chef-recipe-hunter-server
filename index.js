const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const chefs = require('./data/chefCategories.json');
// const chefData = require('.data/chefData.json');

app.use(cors());

app.get('/', (req,res) => {
    res.send('Chef is running');
})

app.get('/chef', (req, res) => {
    // console.log(chefs);
    res.send(chefs);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs.filter(chef => chef.id === id);
    res.send(selectedChef);
})

// app.get('/chefdata', (req, res) => {
//     // console.log(chefData);
//     res.send(chefData);
// })

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`);
})