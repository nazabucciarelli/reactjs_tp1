import { Component } from "react";
import "./Dialog.css"
class Dialog extends Component{

    render(){
        return(
            <div id="dialogContainer">
                <b onClick={this.closeDialog}>X</b>
                <div class="dialog">
                    <h3>{this.props.header}</h3>
                    <p> {this.props.message}</p>
                    <button id="btn" onClick={this.closeDialog}>Ok</button>
                </div>
            </div>
        )
    }

    closeDialog(){
        console.log("close dialog pressed")
        document.getElementById("dialogContainer").classList.add("invisible");
    }

}

export default Dialog