
import React, { Component } from "react";


import ImageAd from './parts/ImageAd';



class Advertisement extends Component {
    
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        var {list , err , msg} = this.props;
        // console.log("this props is" , advertisement);
        return(
            <div className="sidebar-adveritsement hidden"> 
                

                {!err?(
                    <React.Fragment>
                        {list && list.map((item, index)=>(
                            <ImageAd ad={item} key={index} />
                        ))}
                    </React.Fragment>
                ):(
                    <div className="text-center">
                        <h3> {msg} </h3>
                    </div>
                )}
            </div>
        )
    }
}


export default Advertisement;