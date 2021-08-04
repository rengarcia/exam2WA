import { Router } from 'express';
import * as Controller from '../controller/computer.controller';

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)

export default router;