import { Component } from "react";
import "./Dialog.css"
class Dialog extends Component{

    constructor(props){
        super(props)
        this.state = {
            visible:true
        }
    }

    render(){
        const close = () => {
            this.setState({visible:false});
        }
        if(this.state.visible){
            return(
                <div id="dialogContainer">
                    <b onClick={close}>X</b>
                    <div className="dialog">
                        <h3>{this.props.header}</h3>
                        <p> {this.props.message}</p>
                        <button onClick={close}>Ok</button>
                    </div>
                </div>
            )
        }
    }
}

Dialog.defaultProps = {
    header:'You have not inserted a title',
    message:'You have not inserted a message'
}

export default Dialog