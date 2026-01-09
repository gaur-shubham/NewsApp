import React, { Component } from "react";
import NewItem from "./NewItem";
import LoadingSpinner from "./LoadingSpinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed884557ba4742bf812b6c7c12db0fee&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //fetch API used which takes url and return a promise.
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed884557ba4742bf812b6c7c12db0fee&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //fetch API used which takes url and return a promise.
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }
  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
      let url =
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed884557ba4742bf812b6c7c12db0fee&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url); //fetch API used which takes url and return a promise.
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }

  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsApp - Top Headlines</h1>
        {this.state.loading && <LoadingSpinner/>}
        <div className="row">
          {!this.state.loading  && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
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
