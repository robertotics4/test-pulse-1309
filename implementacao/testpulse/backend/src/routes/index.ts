import { Router, Request, Response } from "express";
import addressRouter from "./addressRouter";
import clientRouter from "./clientRouter";

const routes = Router();

routes.use("/clients", clientRouter);
routes.use("/addresses", addressRouter);

routes.get("/", (request: Request, response: Response) => {
    return response.status(200).json({
        message: "Test Pulse API",
        version: "0.0.1",
    });
});

export default routes;
