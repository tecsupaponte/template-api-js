import { Router } from "express";
import * as Controller from "./controller";

const studentRouter = Router();

studentRouter.route("/").get(Controller.findAll);
studentRouter.route("/").post(Controller.create);
studentRouter.route("/").put(Controller.update);
studentRouter.route("/").delete(Controller.deleteOne);

export default studentRouter;