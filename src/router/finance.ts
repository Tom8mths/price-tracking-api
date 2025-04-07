import { getQuotes } from "../controllers/finance";
import express from "express";

export default (router: express.Router) => {
    router.get('/external', getQuotes);
}