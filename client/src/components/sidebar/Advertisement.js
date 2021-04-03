
import React, { Component } from "react";


import ImageAd from './parts/ImageAd';



class Advertisement extends Component {
    
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        var {advertisement} = this.props;
        return(
            <div className="sidebar-adveritsement hidden"> 
                

                {advertisement.err?(
                    <React.Fragment>
                        {advertisement.map((item, index)=>(
                            <ImageAd ad={item} key={index} />
                        ))}
                    </React.Fragment>
                ):(
                    <div className="text-center">
                        <h3> {advertisement.msg} </h3>
                    </div>
                )}
            </div>
        )
    }
}


export default Advertisement;