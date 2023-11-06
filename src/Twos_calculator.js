import React from 'react';
class Twoscalculator extends React.Component {
    constructor(){
        super();
        this.state={
            qty:0,
        }
    }
    addTwo= () =>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+2
            }
        },()=>{
            console.log("this.state",this.state)
        });
    }
    mulTwo=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty*2
            }
        },()=>{
            console.log("this.state",this.state)
        });
    }
    divTwo=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty/2
            }
        },()=>{
            console.log("this.state",this.state)
        });
    }

    subTwo=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-2
            }
        },()=>{
            console.log("this.state",this.state)
        });
    }
    squareTwo=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty*prevState.qty
            }
        },()=>{
            console.log("this.state",this.state)
        });
    }
    render(){
        const{qty}=this.state;
        return(
            <div>
                <div style={{ color: 'white'}}>{qty}</div>
                <div style={{padding:10}}>
                    <button style={{margin:10, padding:15, borderRadius:15}} onClick={this.addTwo}> Add Two</button>
                    <button style={{margin:10, padding:15, borderRadius:15}} onClick={this.mulTwo}> Mul Two</button>
                    <button style={{margin:10, padding:15, borderRadius:15}} onClick={this.divTwo}> Divide Two</button>
                    <button style={{margin:10, padding:15, borderRadius:15}} onClick={this.subTwo}> Sub Two</button>
                    <button style={{margin:10, padding:15, borderRadius:15}} onClick={this.squareTwo}> square Two</button>
                </div>

             </div>
        );
    }

}
export default Twoscalculator;