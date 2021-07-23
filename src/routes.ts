import { Express, Request, Response } from "express";

export default function(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    // Register User
    // POST /api/user

    // Login
    // POST /api/sessions

    // Get the user's sessions
    // GET /api/sessions

    // Logout
    // DELETE /api/sessions
}