
import React, { Component } from "react";




class Spinner extends Component {
    
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        return(
            
            <div class="loader">
                <i class="fa fa-spinner fa-spin"></i>
            </div>
            
            
        )
    }
}


export default Spinner;

