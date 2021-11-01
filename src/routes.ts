import { Router } from "express";


const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send("get its ok");
})

routes.post("/", (req, res) => {
    return res.status(200).send("post its ok");
})

export default routes;