import { Component } from 'react';

class Toast extends Component{

    constructor(props){
        super(props)
        this.state = {
            visible: true
        }
    }

    render(){
        if(!this.state.visible){
            return null;
        }
      return (
        <div className="container">
            <div id="toast">
                <h3>{this.props.header}</h3>
                <p>{this.props.message}</p>
            </div>
        </div> 
      )
    }

    componentDidMount(){
        setTimeout(() => { this.setState({visible:false})},this.props.time)
    }
}

Toast.defaultProps = {
    header:'You have not inserted a title',
    message:'Yo have not inserted a message',
    time:5000
}

export default Toast