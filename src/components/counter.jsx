import React, {Component} from "react";

class Counter extends Component {
    margin = {
        marginLeft: 20,
        marginBottom: 20,
    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div>
                    <button className="btn btn-primary" style={this.margin} onClick={this.props.increment}>Increment</button>
                    <button className="btn btn-secondary" style={this.margin} onClick={this.props.decrement}>Decrement</button>
                    <button className="btn btn-danger" style={this.margin} onClick={this.props.delete}>Delete</button>  
                    <span className="label label-warning"  style={this.margin}>Counter Value: {this.props.value}</span>
                </div>
               
            </React.Fragment>
            )
        }
}

export default Counter;