import { Request, Response } from 'express';

import fetch, { RequestInfo, RequestInit } from 'node-fetch';

const fetchWrapper = (...args: [RequestInfo, RequestInit?]) => fetch(...args);

export const getQuotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await fetchWrapper(`https://api.hgbrasil.com/finance?key=${process.env.API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching external API:", err);
    res.status(500).json({ message: "Failed to fetch external data" });
  }
};
