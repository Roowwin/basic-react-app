
import React, { Component } from "react";
// Bootstrap Component
import {  Row , Col } from 'react-bootstrap';

import ArticleItem from './parts/ArticleItem';


class Listing extends Component {
 
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        const {articles} = this.props;
        return (
            <div className="listing">
                <Row>
                    {articles.err?(
                        <React.Fragment>
                            {articles.list.map((item , index) =>(
                                <Col lg='6' sm='12' key={index} className="article-column" >
                                    <ArticleItem article={item}/>
                                </Col>
                            ))}
                        </React.Fragment>
                    ):(
                        <Col lg='12' className="text-center">
                             <h3> {articles.msg} </h3>
                        </Col>
                    )}
                    
                </Row>
            </div>
        )
    }
}


export default Listing;

