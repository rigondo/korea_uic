import express from "express";
import * as global from "controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", global.home);
globalRouter.get("/intro", global.intro);
globalRouter.get("/members", global.members);
globalRouter.get("/activity", global.activity);
globalRouter.get("/hww", global.hww);
globalRouter.get("/sponsor", global.sponsor);

export default globalRouter;
