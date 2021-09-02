const addtrans=(state=[],action)=>{
    console.log(state,action)
if(action.type==="ADD_TRANSACTION"){
    return [action.payload,...state]

}
else if(action.type==="DELETE_TRANSACTION"){
        return state.filter(x=>x.id!==action.payload)  
    }
return state;
}

export default addtrans