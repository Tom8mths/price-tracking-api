import express from "express";
import router from './router';
import cors from 'cors';
import http from 'http';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: "https://price-tracking-front-293372619781.us-central1.run.app",
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/', router());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
