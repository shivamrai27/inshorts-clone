import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
const app = express();

const PORT = 8000;
Connection();
app.listen(PORT, () => {
    console.log(`server is running at port number:${PORT}`);
});
DefaultData();