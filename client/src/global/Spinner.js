
import React, { Component } from "react";




class Spinner extends Component {
    
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        return(
            
            <div className="loader">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
            
            
        )
    }
}


export default Spinner;

