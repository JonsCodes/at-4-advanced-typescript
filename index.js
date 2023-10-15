"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const method_override_1 = __importDefault(require("method-override"));
const mongoose_1 = __importDefault(require("mongoose"));
const places_1 = __importDefault(require("./controllers/places"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, method_override_1.default)('_method'));
app.use('/places', places_1.default);
app.get('/', (req, res) => {
    res.render('home');
});
const port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('connected to : ', process.env.MONGO_URI); });
app.get('*', (req, res) => {
    res.render('error404');
});
app.listen(port);
