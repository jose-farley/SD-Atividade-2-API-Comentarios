import { Request, Response } from "express";
import { CommentsRepository } from "../../repositories/CommentsRepository";


export class FetchByBook {

    async handle(req:Request, res:Response){
        let result = await new CommentsRepository().fetchByBook(req.params.id)
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result)
        }
    }
}