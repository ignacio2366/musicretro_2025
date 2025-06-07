import express from 'express';
import musixmatchRouter from './route/musixmatch/musixmatch';
const app = express();
const cors = require('cors')
require('dotenv').config();

const PORT = 8080;

app.use(cors());
app.use('/api/musixmatch', musixmatchRouter);
app.listen(PORT, () => {
    console.log("Running", PORT);
})