import { Request, Response } from "express";
import { CommentsRepository } from "../../repositories/CommentsRepository";


export class AddCommentController {

    async handle(req:Request, res:Response){
        let result = await new CommentsRepository().add(req.body)
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result)
        }
    }
}