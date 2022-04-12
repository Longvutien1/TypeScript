import { OrderType } from "../types/products";
import instance from "./instance";


export const addOrder = (product: OrderType) => {
    const url = `/orders`;
    return instance.post(url, product)

}