import { BadRequestError } from "../errors/BadRequestError"

interface ProductInputDTO {
    id: string,
    name: string,
    price: number
}

export class ProductDTO{
    public createProductInput(id: unknown, name: unknown, price: unknown){
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof price !== "number") {
            throw new BadRequestError("'price' deve ser number")
        }

        const dto:ProductInputDTO = {
            id,
            name, 
            price
        }

        return dto
    }
}