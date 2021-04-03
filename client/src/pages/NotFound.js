
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";




class NotFound extends Component {
    
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        return (
            <div className='page-404 text-center d-flex flex-column align-items-center justify-content-center'>
                
                <h3>Sorry  the page you are looking is not available.  </h3>
                <a href="/" className="btn btn-primary"> Return to home</a>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    seo:state.seo,

  });
  export default connect(
    mapStateToProps,
    {
        
    }
  )(withRouter(NotFound));