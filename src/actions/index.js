const addTransaction=(addtrans)=>{
    return {
        type :"ADD_TRANSACTION",
        payload:addtrans

    }
}

const deleteTransaction=(y)=>{
    return {
        type:"DELETE_TRANSACTION",
        payload:y
    }
}

export  {addTransaction,deleteTransaction};