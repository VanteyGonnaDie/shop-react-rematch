import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {}

export const shopModel = createModel<RootModel>()({
    state: initialState,
    reducers: {},
    effects: {}
})
