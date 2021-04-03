
import React, { Component } from "react";





class ImageAd extends Component {
  
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        var {ad} = this.props;
        return(
            <React.Fragment>
                <a href={ad.link} target={ad.target}>
                    <img alt="Advertisement" src={ad.img} className="img-fluid"/>
                </a>
            </React.Fragment>
        )
    }
}


export default ImageAd;