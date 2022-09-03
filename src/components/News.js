import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            totalResults: 0
        }
        document.title = this.capitalizeFirstLetter(this.props.category);
        
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async newsUpdate() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=37e1c17a1df6403d821cc13d3fddb00c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let response = await fetch(url);
        this.props.setProgress(50);
        let data = await response.json();
        this.props.setProgress(70);
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.newsUpdate();
    }

    fetchMoreData = async () => {

        this.setState({
            page: this.state.page + 1
        }, async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=37e1c17a1df6403d821cc13d3fddb00c&page=${this.state.page}&pageSize=${this.props.pageSize}`;

            let response = await fetch(url);
            let data = await response.json();

            this.setState({
                articles: this.state.articles.concat(data.articles),
                totalResults: data.totalResults
            })
        });



    }

    render() {
        return (
            <>
                <h2 className='text-center my-3'>News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>

                        <div className='row'>
                            {
                                this.state.articles.map((element) => {
                                    return <div key={element.url} className='col-md-4' >
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;