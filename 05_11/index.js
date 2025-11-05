const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const hostname = '127.0.0.1';
const port = 3000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baza_05_11'
})

connection.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/o-nas', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/o-nas.html'));
});

app.get('/oferta', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/oferta.html'));
});

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/kontakt.html'));
});

app.post('/sent', (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    console.log("Imię: " + firstName);
    console.log("Nazwisko: " + lastName);
    console.log("Email: " + email);
    console.log("Wiadomość: " + message);

    let values = [firstName, lastName, email, message];
    connection.query('INSERT INTO `messages`(`id`, `first_name`, `last_name`, `email`, `message`) VALUES (NULL,?)', [values],  (err) => {
        if (err) throw err;
    })
    connection.end();
    res.redirect(`/`);
})

app.get('/api/contact-messages', (req, res) => {

    connection.query('SELECT * FROM `messages`', (err, result) => {
        if (err) throw err;

        res.json(result);
    })

})

app.get('/api/contact-messages/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM `messages` WHERE `id`= ?', [id], (err, result) => {
        if (err) throw err;

        result.length==0 ?
        res.status(404).json("No row of such id.")
        : res.json(result);
    })
})

app.get('/{*any}', async (req, res) => {
    res.status(404).send("No such page");
})

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});