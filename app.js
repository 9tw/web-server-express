const express = require('express')
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.json({
    //     nama: 'Gerry',
    //     email: 'gerry08@gmail.com',
    //     noHP: '08123456789'
    // });
    // res.sendFile('./index.html', { root: __dirname });

    const mahasiswa = [
        {
            nama: 'Gerry',
            email: 'gerry08@gmail.com',
        },
        {
            nama: 'Uzy',
            email: 'uzyzyzy000@gmail.com',
        },
        {
            nama: 'Sam',
            email: 'sam-ael888@gmail.com',
        },
    ];

    res.render('index', {
        layout: 'layouts/main',
        title: 'Home',
        name: 'Gerry',
        mahasiswa,
    });
})

app.get('/about', (req, res) => {
    // res.send('This is About page.');
    // res.sendFile('./about.html', { root: __dirname });

    res.render('about', { 
        layout: 'layouts/main',
        title: 'About Page',
    });
})

app.get('/contact', (req, res) => {
    // res.send('This is Contact page.');
    // res.sendFile('./contact.html', { root: __dirname });

    res.render('contact', { 
        layout: 'layouts/main',
        title: 'Contact Page',
    });
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