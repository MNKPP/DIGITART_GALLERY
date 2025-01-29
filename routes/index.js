import express from "express";

import memberRouter from "./member.route.js";

const mainRouter = express.Router();


mainRouter.use(memberRouter)

export default mainRouter;