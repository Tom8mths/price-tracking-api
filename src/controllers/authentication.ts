import { Request, Response } from 'express';

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = "supersecret";

interface User {
  id: number;
  password: string;
  username: string;
  email: string;
}

const users: User[] = [];

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
  return;
}

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  const existing = users.find(user => user.email === email);
  if (existing) res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username: username, id: users.length + 1, email, password: hashedPassword };
  users.push(user);

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
}