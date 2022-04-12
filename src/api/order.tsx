import { OrderType, ProductType, UserType } from "../types/products";
import instance from "./instance";



export const listOrder = () => {
    const url = "/orders";
    return instance.get(url)
}

export const orderDetail = (id:number) => {
    const url = `/orders/${id}`;
    return instance.get(url)
}
export const addOrder = (order:OrderType  ) => {
    const url = `/orders`;
    return instance.post(url,order)

}