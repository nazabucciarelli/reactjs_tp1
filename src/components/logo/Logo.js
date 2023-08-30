import { Component } from "react";

class Logo extends Component{

    render(){
        return (
            <img style={{margin:'auto auto', display:'block'}} src={require('./ball.png')} alt="Ball"></img>
        )
    }

}

export default Logo;