import { Request, Response } from "express";
import { get } from "lodash";
import { createPost } from "./services/post.service";

export async function createPostHandler(req: Request, res: Response) {
    const userId = get(req, "user._id");
    const body = req.body;

    const post = await createPostHandler({ ...body, user: userId });

    return res.send(post);
}

export async function updatePostHandler(req: Request, res: Response) {}

export async function getPostHandler(req: Request, res: Response) {}

export async function deletePostHandler(req: Request, res: Response) {}