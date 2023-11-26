import { Router } from "express";
import { Request, Response } from "express";
import { AddCommentController } from "./controllers/AddComment";
import { DeleteCommentController } from "./controllers/DeleteComment";
import { FetchByBook } from "./controllers/FetchByBook";
import { UpdateCommentController } from "./controllers/UpdateComment";
const router = Router()

router.post("/api/v1/comments", (req:Request, res:Response)=>{
    new AddCommentController().handle(req, res)
})
router.delete("/api/v1/comments", (req:Request, res:Response)=>{
    new DeleteCommentController().handle(req, res)
})
router.get("/api/v1/comments/:id", (req:Request, res:Response)=>{
    new FetchByBook().handle(req, res)
})
router.put("/api/v1/comments/", (req:Request, res:Response)=>{
    new UpdateCommentController().handle(req, res)
})

export {router}