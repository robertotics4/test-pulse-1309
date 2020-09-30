import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import Address from "../models/Address";

const addressRouter = Router();


addressRouter.post("/", async (request: Request, response: Response) => {
    try {
        const repository = getRepository(Address);
        const address = await repository.save(request.body);
        return response.status(201).json(address);
    } catch (err) {
        return response.status(500).json({
            error: err.message,
        });
    }
});

addressRouter.get("/", async (request: Request, response: Response) => {
    try {
        const repository = getRepository(Address);
        const addresses = await repository.find();
        return response.status(200).json(addresses);
    } catch (err) {
        return response.status(500).json({
            error: err.message,
        });
    }
});

export default addressRouter;
