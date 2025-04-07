const express = require("express");
import router from './router';
import cors from 'cors';
import http from 'http';

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:8080",
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.use('/', router())