const express = require('express');
const app = express();
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

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
    res.redirect(`/`);
})

app.get('/{*any}', async (req, res) => {
    res.status(404).send("No such page");
})

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});