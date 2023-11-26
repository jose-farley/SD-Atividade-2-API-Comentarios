

export class ResponseImplementation {

    data:any
    has_error:boolean
    constructor(data:any, status:boolean){
        this.data = data;
        this.has_error = status
    }
}