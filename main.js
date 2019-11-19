const port = "3000";
const express = require("express");
const app = express();

app.listen(port, () => {
    console.log(`the server is listening on ${port}`)
});