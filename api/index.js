const express = require('express');
const router = require('./routes');

const app = express();
port = process.env.PORT || 8080;

app.use(router);

app.listen(port, () => {
    console.log(`Server started listening on port: ${port}`);
});
