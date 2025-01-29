import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;
const ADDRESS = process.env.ADDRESS || '"no address provided"';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('{ message: "hello world"}');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} with the address ${ADDRESS}`);
});