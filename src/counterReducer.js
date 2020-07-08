function counterReducer(state = [], action){
   if(action.type === "InitialValue"){
       for(var i=0; i< action.payload.length; i++){
        state.push({id: action.payload[i].id, value: action.payload[i].value})
       }
   }
return state;
}

export default counterReducer;