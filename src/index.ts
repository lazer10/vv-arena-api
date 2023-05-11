import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';
import dotenv from './config/dotenv';

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Parse JSON
app.use(express.json());

app.use('/', routes);
const port = dotenv.PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
