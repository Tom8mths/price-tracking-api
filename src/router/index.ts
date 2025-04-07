import express from "express";
import authentication from "./authentication";
import finance from "./finance";

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    finance(router)
    return router;
}