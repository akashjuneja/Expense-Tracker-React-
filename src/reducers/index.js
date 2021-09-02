import { combineReducers } from "redux";
import addtrans from "./addtrans";


const rootreducers=combineReducers({
    transaction:addtrans
})

console.log(rootreducers)

export default rootreducers;