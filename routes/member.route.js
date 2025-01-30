import express from "express";

import memberController from "../controllers/member.controller.js";

const memberRouter = express.Router();

memberRouter.get('/member/:id', memberController.getMemberById)

export default memberRouter;