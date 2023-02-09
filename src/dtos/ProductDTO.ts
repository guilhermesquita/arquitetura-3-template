import { BadRequestError } from "../errors/BadRequestError"
import { Product } from "../models/Product"

export interface CreateProductInputDto {
    id: string,
    name: string,
    price: number
}

export interface CreateProductOutputDto {
    message: string
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export class ProductDTO {
    public createProductInput(id: unknown, name: unknown, price: unknown):CreateProductInputDto{
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof price !== "number") {
            throw new BadRequestError("'price' deve ser number")
        }

        const dto:CreateProductInputDto = {
            id,
            name, 
            price
        }

        return dto
    }

    public createProductOutput(product: Product):CreateProductOutputDto{
       
        const dto:CreateProductOutputDto = {
            message: "Produto criado com sucesso",
            product: {
                id: product.getId(),
                name: product.getName(),
                price: product.getPrice(),
                createdAt: product.getCreatedAt()
            }
        }

        return dto
    }
}