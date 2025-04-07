import { Request, Response } from 'express';

const fetch = (...args: any) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const API_URL = 'https://api.hgbrasil.com/finance';
const API_KEY = process.env.API_KEY as string;

export const getQuotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching external API:", err);
    res.status(500).json({ message: "Failed to fetch external data" });
  }
};
