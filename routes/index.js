import express, {Router} from "express";

import config from "../config/index.js";

const router = Router();

router.get("/", (req, res) => {
   res.status(200).sendFile(`${config()}/index.html`); 
})

router.get("/portfolio", (req, res) => {
    res.status(200).sendFile(`${config()}/portfolio.html`); 
});

export default router;



