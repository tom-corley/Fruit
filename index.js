const app = require("./app")
require('dotenv').config()
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});