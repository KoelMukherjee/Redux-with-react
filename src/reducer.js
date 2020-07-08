var id = 0;

function reducer(state =[], action){
    if(action.type == 'bugAdded'){
        for(var i =0; i< action.payload.length; i++){
            console.log("payload",action.payload[i].id);
            state.push({id: action.payload[i].id, description: action.payload[i].description, resolved: "false"});
        }
    }
    else if(action.type == 'bugRemoved'){
        for(var i =0; i< action.payload.length; i++){
            console.log("payload",action.payload[i].id);
          return state.filter(bug => bug.id !== action.payload[i].id);
        }
    }
    console.log(state);
    return state;
}

export default reducer;