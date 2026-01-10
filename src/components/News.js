import React, { Component } from "react";
import NewItem from "./NewItem";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
  }

  async updateNews() {
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed884557ba4742bf812b6c7c12db0fee&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //fetch API used which takes url and return a promise.
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState(
        (prevState) => ({ page: prevState.page - 1 }),
        this.updateNews
      );
    }
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        this.updateNews
      );
    }

  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <LoadingSpinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
