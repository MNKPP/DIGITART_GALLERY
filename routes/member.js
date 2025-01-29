import express from "express";

import memberController from "../controllers/member.js";

const memberRouter = express.Router();

memberRouter.post('/member', memberController.createMember)

export default memberRouter;