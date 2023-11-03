const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.json({
    //     nama: 'Gerry',
    //     email: 'gerry08@gmail.com',
    //     noHP: '08123456789'
    // });
    res.sendFile('./index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    // res.send('This is About page.');
    res.sendFile('./about.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
    // res.send('This is Contact page.');
    res.sendFile('./contact.html', { root: __dirname });
})

app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.params.idCat}`);
});

app.get('/search', (req, res) => {
    res.send(`Searching ${req.query.q}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})