export type ProductType = {
    _id?: Number,
    name: String,
    price: Number,
    img: string,
    category?: number,
    updatedAt?: Date,
    createdAt?: Date,
    __v?: number,
  

    itemTotal?: number,
    quantity?: number,

}

export type UserType = {
    _id?: Number,
    username?: String,
    email: String,
    password?: string | number,
    role?: number
}

export type CategoryType = {
    _id?: Number,
    name: String
}

export type OrderType = {
    _id?:number,
    createdAt?:Date,
    userInfomation: {
        name?: string,
        phone?: string,
        address?: string,
        specificaddress?:string,
        noinhan?:string
    },
    listproduct: [
        {
            key?:number,
            id?: string,
            img?: string,
            itemTotal?: number
            price?: number,
            name?: string,
            quantity?: number,
        }
    ],
    cartTotal: number,
    status: number

}