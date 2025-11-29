import 'dotenv/config';
import app from './app.js';
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});