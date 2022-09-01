import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewsItem from './NewsItem';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37e1c17a1df6403d821cc13d3fddb00c&page=${this.state.page}`;
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults
        })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37e1c17a1df6403d821cc13d3fddb00c&page=${this.state.page - 1}`;
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: data.articles,
            page: this.state.page - 1
        })
    }

    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37e1c17a1df6403d821cc13d3fddb00c&page=${this.state.page + 1}`;
            let response = await fetch(url);
            let data = await response.json();
            this.setState({
                articles: data.articles,
                page: this.state.page + 1
            }
            )
        }

    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top-Headline News</h1>
                <div className='row'>
                    {
                        this.state.articles.map((element) => {

                            return <div key={element.url} className='col-md-4' ><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                        })
                    }
                </div>
                <div className='d-flex justify-content-between my-3' >

                    <Button disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Prev</Button>
                    <Button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextClick}>next &rarr;</Button>
                </div>
            </div>
        );
    }
}

export default News;