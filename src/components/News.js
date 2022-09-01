import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }

    newsUpdate() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=37e1c17a1df6403d821cc13d3fddb00c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        fetch(url).then((response) => {
            response.json()
                .then((data) => {
                    this.setState({
                        articles: data.articles,
                        totalResults: data.totalResults,
                        loading: false
                    })
                })
        });
    }

    componentDidMount() {
        this.newsUpdate();
    }

    handlePrevClick = () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.newsUpdate();
    }

    handleNextClick = () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.newsUpdate();
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {
                        !this.state.loading && this.state.articles.map((element) => {
                            return <div key={element.url} className='col-md-4' ><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>
                        })
                    }
                </div>
                <div className='d-flex justify-content-between my-3' >

                    <Button variant='dark' disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Prev</Button>
                    <Button variant='dark' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>next &rarr;</Button>
                </div>
            </div>
        );
    }
}

export default News;