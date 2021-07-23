import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";

export default function(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    // Register User
    // POST /api/user

    // Login
    app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

    // Get the user's sessions
    // GET /api/sessions

    // Logout
    // DELETE /api/sessions
}