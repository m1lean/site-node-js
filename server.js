const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));

app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
