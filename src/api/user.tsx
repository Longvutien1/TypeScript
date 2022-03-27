import { UserTypes } from "../types/UserType";
import instance from "./instance";


export const signUp = (user:UserTypes) => {
    const url = "/signup";
    return instance.post(url, user)
}

export const signIn = (user:UserTypes) => {
    const url = "/signin";
    return instance.post(url, user)
}