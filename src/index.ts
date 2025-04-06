const express = require("express");
import router from './router';

const app = express();
app.use(express.json());
app.use('/', router())

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});