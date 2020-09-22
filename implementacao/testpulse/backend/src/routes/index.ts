import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
    return response.status(200).json({
        message: "Hello World!",
    });
});

export default routes;
