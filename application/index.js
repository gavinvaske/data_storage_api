const express = require('express');
require('dotenv').config();

const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;

const app = express();
app.use('/', require('./controllers/index'));

app.listen(PORT, () => {
    console.log(`Server started listening on PORT ${PORT}. Visit http://localhost:${PORT} in your browser`);
});

