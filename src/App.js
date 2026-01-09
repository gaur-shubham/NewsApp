import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  // Switch, removed in new version of react-router-dom
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 18;
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            {/* We use the `key` prop on each <News> element so React treats each route as a unique component.
                Without a unique `key`, React may reuse the previous <News> component when navigating,
                causing the URL to change but the new content not to render. Using `key` ensures that
                the component unmounts and remounts, forcing a fresh render for each category.*/}

            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

