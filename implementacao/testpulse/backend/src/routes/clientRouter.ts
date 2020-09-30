import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import Client from "../models/Client";

const clientRouter = Router();

clientRouter.post("/", async (request: Request, response: Response) => {
    try {
        const repository = getRepository(Client);
        const client = await repository.save(request.body);
        return response.status(201).json(client);
    } catch (err) {
        return response.status(500).json({
            error: err.message,
        });
    }
});

clientRouter.get("/", async (request: Request, response: Response) => {
    try {
        const repository = getRepository(Client);
        const clients = await repository.find();
        return response.status(201).json(clients);
    } catch (err) {
        return response.status(500).json({
            error: err.message,
        });
    }
});

export default clientRouter;
