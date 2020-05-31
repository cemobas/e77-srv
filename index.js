import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/postRoutes';

const app = express();
const PORT = 8080;

// mongoose connection
mongoose.Promise = global.Promise; // we make a connection and we don't wait for it.

// define a db that doesn't exist and it will be created automatically with the first POST operation.
mongoose.connect(`${process.env.MONGODB_URI}`);

// bodyparser setup: setting up json to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    /** `text` instead of 'text', because `` is es6 syntax. This way we can inject a variable like PORT */
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

