import { AddCommentDTO } from "../controllers/AddComment/dto";
import { UpdateCommentDTO } from "../controllers/UpdateComment/dto";
import { prisma } from "../database";
import { ResponseImplementation } from "../util/ResponseImplementation";

export class CommentsRepository{


    async add(data:AddCommentDTO):Promise<ResponseImplementation>{
        try {
            await prisma.comment.create({
                data:{
                    ...data
                }
            })
            return await new ResponseImplementation("Mensagem salva!", false)
        } catch (error) {
            return await new ResponseImplementation("Houve um erro ao salvar a mensagem.", true)
        }
    }
    async delete(id:string){
        try {
            await prisma.comment.delete({
                where:{
                    id:id
                }
            })
            return await new ResponseImplementation("Mensagem removida!", false)
        } catch (error) {
            return await new ResponseImplementation("Houve um erro ao remover a mensagem.", true)
        }
    }
    async fetchByBook(id:string){
        try {
            let result = await prisma.comment.findMany({
                where:{
                    bookId:id
                }
            })
            return await new ResponseImplementation(await result, false)
        } catch (error) {
            return await new ResponseImplementation("Houve um erro ao remover a mensagem.", true)
        }
    }

    async update(data:UpdateCommentDTO){
        try {
            let result = await prisma.comment.update({
                where:{
                    id:data.id
                }, data:{
                    content:data.content
                }
            })
            return await new ResponseImplementation(await result, false)
        } catch (error) {
            return await new ResponseImplementation("Houve um erro ao remover a mensagem.", true)
        }
    }   
}