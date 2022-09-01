import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NewsItem from './NewsItem';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page:1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=37e1c17a1df6403d821cc13d3fddb00c";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: data.articles,
        })
    }

    handlePrevClick(){
        console.log("previuos");
    }

    handleNextClick(){
console.log("next");
    }

    render() {
        return (
            <div className='container my-3'>
                <div className='row'>
                    {
                        this.state.articles.map((element) => {
                           
                            return <div key={element.url} className='col-md-4' ><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                        })
                    }
                </div>
            
            </div>
        );
    }
}

export default News;