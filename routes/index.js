import express from "express";

const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.send('main router')
})

export default mainRouter;