import { Component } from "react";

class Clock extends Component{    
    constructor(props){
        let date = new Date()
        super(props)
        this.state = {
            hours : date.getHours(),
            minutes : date.getMinutes(),
            seconds : date.getSeconds()
        }
    }

    render(){
        let hour = this.state.hours;
        let minute = this.state.minutes;
        let second = this.state.seconds;
        if(hour <= 9){
            this.state.hours = '0' + hour
        } 
        if (minute <= 9){
            this.state.minutes = '0' + minute;
        }
        if (second <= 9){
            this.state.seconds = '0' + second;
        }
        return(
            <div style={{textAlign:"center",fontSize:'4em',marginTop:'2em'}}>
                <h1 style={{backgroundColor:'lightblue',
                display:'inline',padding:'15px',
                borderRadius:'0.7em'}}>{this.state.hours} : {this.state.minutes} : {this.state.seconds}</h1>
            </div>
        )
    }

    componentDidMount(){
        setInterval((date=new Date()) => { this.setState({
            hours : date.getHours(),
            minutes : date.getMinutes(),
            seconds : date.getSeconds()
        })},1000)
    }

}

export default Clock