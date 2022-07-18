import { Models } from "@rematch/core";
import { shopModel } from "./shopModel";


export interface RootModel extends Models<RootModel>{
    shopModel: typeof shopModel
}

export const models: RootModel ={
    shopModel
}