import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import placesController from './controllers/places';

dotenv.config();

const app = express();

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/places', placesController);

app.get('/', (req: Request, res: Response) => {
  res.render('home');
});

const port: string | number = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('connected to : ', process.env.MONGO_URI) });

app.get('*', (req: Request, res: Response) => {
  res.render('error404');
});

app.listen(port);
