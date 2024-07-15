
import React, { Component } from 'react';
import PNewsItem from './PNewsItem';
import Spinner from './PSpinner';

export default class PNews extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() { // Changed "mount" to "componentDidMount"
        let url = `https://newsapi.org/v2/everything?&q=bitcoin&apiKey=1b860afbd9114134a3243d827a995a7a&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    prevous = async () => { // Corrected "prevous" to "previous"
        let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1b860afbd9114134a3243d827a995a7a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    };

    next = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1b860afbd9114134a3243d827a995a7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading: true,
                page: this.state.page + 1 // Increment the page here
            });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            });
        }
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">News-Monkey Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <PNewsItem title={element.title? element.title.slice(0, 45):"..."} 
                                description={element.description? element.description.slice(0,88): "..."} 
                                imageUrl={element.urlToImage} 
                                newsUrl={element.url}/>
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" class="btn btn-primary" onClick={this.prevous} disabled={this.state.page<=1}>&larr; Previous</button>
                    <button type="button" class="btn btn-primary" onClick={this.next} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}
