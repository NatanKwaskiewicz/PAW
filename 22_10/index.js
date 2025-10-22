const express = require('express');
const app = express();
const url = require('url');
const fs = require('fs');
const { readFile } = require('fs/promises');
const mime = require('mime-types');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, '/assets')));

app.get('/', (req, res) => {
    res.send('Strona główna');
});

app.get('/json', (req, res) => {
    const obj = {name: "John", age: 30, city: "New York"};
    const myJSON = JSON.stringify(obj);
    res.set({
        'Content-Type': `application/json; charset=utf-8`
    });
    res.send(myJSON);
});

app.get('/htmlNode', (req, res) => {
    res.set({
        'Content-Type': `text/html; charset=utf-8`
    });
    res.send(
        "<!DOCTYPE html>" +
        "<html>" +
        "<head>" +
        "<meta charset='utf-8'>"+
        "</head>" +
        "<body>" +
        "<header>" +
        "<h1>PLIK HTML</h1>" +
        "</header>" +
        "<main>" +
        "<p>Zawartość</p>" +
        "</main>" +
        "</body>" +
        "</html>"
    );
});

app.get('/htmlFile', (req, res) => {
    res.sendFile(path.join(__dirname, '/cos.html'));
});

app.get('/get_params', (req, res) => {
    let queryParams = req.query;
    fs.writeFile(`params_${Date.now()}.json`, JSON.stringify(queryParams, null, 2), (err) =>
    {
        if(err)
        {
            console.error('Error', err);
            return;
        }
        console.log('Success');
    });
    const object = { ok: 'ok'};
    res.set({
        'Content-Type': `application/json; charset=utf-8`
    });
    res.send(JSON.stringify(object));
});

app.get('/{*any}', async (req, res) => {
    try {
        const parsedUrl = url.parse(req.url,true);
        const pathj = path.join(__dirname, 'assets', parsedUrl.pathname);
        let fileType = mime.lookup(pathj);
        const fileContent = await readFile(pathj);
        res.set({
            'Content-Type': `${fileType}, charset=utf-8`
        });
        res.send(fileContent);
    } catch {
        res.status(404).send('File does not exist');
    }
});

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});


