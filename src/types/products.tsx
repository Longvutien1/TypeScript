export type ProductType = {
    _id?: Number,
    name: String,
    price: Number,
    category?: number
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