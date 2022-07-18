import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { ShoeItem } from "../types/shoe";

interface ShopModelState{
    items: ShoeItem[]
    loading: boolean
    error: boolean
    cart: ShoeItem[]
}

const initialState = {
    items: [],
    cart: [],
    loading: false,
    error: false,
}

export const shopModel = createModel<RootModel>()({
    state: initialState,
    reducers: {
        addToCart(payload,state){
            return {...state}
        },
        removeFromCart(payload,state){
            return {...state}
        },
        receiveItems(payload,state){
            return {...state}
        },
        receiveLoading(payload,state){
            return {...state}
        },
        receiveError(payload,state){
            return {...state}
        },
    },
    effects: {}
})
