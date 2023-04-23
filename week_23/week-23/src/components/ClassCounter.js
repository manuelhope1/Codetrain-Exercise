import React, { Component } from 'react';


export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
    }
    
     handleIncrement =()=>{
        this.setState(prevState =>({count:prevState.count + 1}))
        const holder = document.querySelector(".Holder2");
        holder.style.border = "1px solid green"; 
        setTimeout(() => {
            holder.style.border = "1px solid #9fdbfa"; 
        }, 500);
    }

    handleDecrement =()=>{
        this.setState(prevState =>({count:prevState.count - 1}))
        const holder = document.querySelector(".Holder2");
        holder.style.border = "1px solid red"; 
        setTimeout(() => {
            holder.style.border = "1px solid #9fdbfa"; 
        }, 500);
    }

    reset =()=>{
        this.setState(prevState =>({count:prevState.count - prevState.count}))
    }

    render(){
        return(
            <div className="Holder2" style={{border: `1px solid #9fdbfa`}}>
                <h1>COUNTER</h1>
                <p className="count">{this.state.count}</p>
                <div className="con">
                    <button onClick={this.handleIncrement}>+</button>
                    <button onClick={this.handleDecrement}>-</button>
                    <div>
                    <button onClick={this.reset} style={{backgroundColor:"white",color:"black",fontSize:"15px",border:"1px dashed #9fdbfa"}}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}
