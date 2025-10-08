let http = require('http');
const url = require('url');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const { readFile } = require('fs/promises');
http.createServer(async function (req, res) {

    let parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    switch (parsedUrl.pathname) {
        case '/main':
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write('Strona główna');
            break;
        case '/json':
            res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
            const obj = {name: "John", age: 30, city: "New York"};
            const myJSON = JSON.stringify(obj);
            res.write(myJSON);
            break;
        case '/htmlNode':
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("<!DOCTYPE html>" +
                "<html>" +
                "<body>" +
                "<header>" +
                "<h1>PLIK HTML</h1>" +
                "</header>" +
                "<main>" +
                "<p>Zawartość</p>" +
                "</main>" +
                "</body>" +
                "</html>");
            break;
        case '/htmlFile':
            const file = await readFile('cos.html', 'utf8');
            res.end(file);
            break;
        case '/get_params':
            const queryParamsToWrite = JSON.stringify(queryParams, null, 2);
            console.log(queryParamsToWrite);
            fs.writeFile(`params_${Date.now()}.json`, queryParamsToWrite, (err) =>
            {
                if(err)
                {
                    console.error('Error', err);
                    return;
                }
                console.log('Success');
            });
            const tab = { ok: 'ok' };
            res.end(JSON.stringify(tab));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Wrong path');
    }
    res.end();
}).listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});

