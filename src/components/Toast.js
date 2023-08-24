import { Component } from 'react';

//Exercise 3
class Toast extends Component{

    render(){
      return (
        <div class="container">
            <div id="toast">
                <h3>{this.props.header}</h3>
                <p>{this.props.message}</p>
            </div>
        </div> 
        
      )
    }

    componentDidMount(){
        setTimeout(this.dissapear,this.props.time)
    }

    dissapear(){
        document.querySelector("#toast").classList.add('invisible');
    }
    
}

export default Toast