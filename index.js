import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

import connectToDB from './utils/db.js';
import mainRouter from "./routes/index.js";

const PORT = process.env.PORT || 3000;
const ADDRESS = process.env.ADDRESS || '"no address provided"';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

connectToDB()

app.use('/api', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} with the address ${ADDRESS}`);
});