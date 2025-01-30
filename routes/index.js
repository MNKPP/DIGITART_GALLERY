import express from "express";

import authRouter from "./auth.route.js";
import memberRouter from "./member.route.js";

const mainRouter = express.Router();

mainRouter.use(authRouter);
mainRouter.use(memberRouter);

export default mainRouter;