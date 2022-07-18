import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {}

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
