
import React, { Component } from "react";

// Bootstrap Component
import {  Card} from 'react-bootstrap';


class ArticleItem extends Component {
    
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        var {article} =this.props;
        return(
            
                <Card className="h-100 article">
                   <a href={article.url} rel="noreferrer" className="card-img-link" target="_blank"> <Card.Img variant="top" src={article.contentImageUrl} /> </a>
                    <Card.Body className="content">
                        <p className="text-right timestamp mb-0"><small className="text-white">{article.pageDateCreated}</small> </p>
                        

                        <a href={article.url} rel="noreferrer" target="_blank">  <Card.Title>{article.contentTitle}</Card.Title> </a>
                        <Card.Text>
                          {article.contentSummary}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Source : <cite title={article.source}>{article.source}</cite>
                        </small>
                    </Card.Footer>
                </Card>
            
            
        )
    }
}


export default ArticleItem;

