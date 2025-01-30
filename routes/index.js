import express from "express";
import authenticateToken from "../middlewares/auth.middleware.js";

import authRouter from "./auth.route.js";
import memberRouter from "./member.route.js";

const mainRouter = express.Router();

mainRouter.use(authRouter);
mainRouter.use(authenticateToken, memberRouter);

export default mainRouter;