
import React, { Component } from 'react';
import FNewsItem from './FNewsItem';
import FSpinner from './FSpinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


class FNews extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello I'm a Constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  async updateNews() {
    this.props.setProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b860afbd9114134a3243d827a995a7a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await fetch(url);
    this.props.setProgress(33);
    let parsedData = await data.json();
    this.props.setProgress(66);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b860afbd9114134a3243d827a995a7a&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b860afbd9114134a3243d827a995a7a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;       
    // this.setState({
    //   loading: true,
    // })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews()
  }
  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b860afbd9114134a3243d827a995a7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading: true,
    //   })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b860afbd9114134a3243d827a995a7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <FSpinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<FSpinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <FNewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
export default FNews;
