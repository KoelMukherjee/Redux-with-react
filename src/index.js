import React from "react";
import ReactDOM from "react-dom";
import store from './store';
import counterStore from './store1';
import ShowStore from './components/showStore';


store.dispatch ({
    type: "bugAdded",
    payload: [{
        id: 1,
        description: "new bug",
    },{
        id: 2,
        description: "new bug",
    },{
        id: 3,
        description: "new bug",
    }]
});

store.dispatch ({
    type: "bugRemoved",
    payload: [{
        id: 1
    }]
});
counterStore.dispatch({
    type: "InitialValue",
    payload: [{
        id: 1,
        value: 4
    },{
        id: 2,
        value: 5
    },{
        id: 3,
        value: 2
    },{
        id: 4,
        value: 7
    }] 
})
console.log(counterStore.getState());
console.log(store.getState().length);
console.log(store.getState());


ReactDOM.render(<ShowStore/> , document.getElementById("root"));