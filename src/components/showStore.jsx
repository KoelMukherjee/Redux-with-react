import React, {Component} from "react";
import Counter from './counter';
import counterStore from '../store1';

class ShowStore extends Component {
    constructor() {
        super();
        this.state = {
            storeData : counterStore.getState(),
    
        }
        console.log(counterStore.getState());
       
    }
    
    render() {
        return (
            <React.Fragment>
                <div>Counter Values</div>
                {this.state.storeData.map((data,i) => (
                    <Counter key={i} id={data.id} value={data.value} increment={() => this.incrementCounter(data.id)} decrement={() => {this.decrementCount(data.id)}}
                    delete = {() => {this.deleteCounter(data.id)}}></Counter>
                    ))}
            </React.Fragment>
           
        )
    }
    incrementCounter(id) {
        this.state.storeData.map(data => {
            if(data.id === id){
                data.value+=1;
            }
        });
        console.log(counterStore.getState());
        this.setState(this.state.storeData);
    }
    decrementCount(id){
        console.log(id);
        this.state.storeData.map(data => {
            if(data.id === id){
                data.value-=1;
            }
        });
        console.log(counterStore.getState());
        this.setState(this.state.storeData);
    }
    deleteCounter(id) {
       var newDataStore =  this.state.storeData.filter(data => data.id !== id
        );
        this.setState({storeData: newDataStore});
    }
}

export default ShowStore;