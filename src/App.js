import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route
  // Switch, removed in new version of react-router-dom
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {

  const pageSize = 18;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)


  return (
    <div>
      <Router>
        <NavBar />

        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />
        <Routes>
          {/* We use the `key` prop on each <News> element so React treats each route as a unique component.
                Without a unique `key`, React may reuse the previous <News> component when navigating,
                causing the URL to change but the new content not to render. Using `key` ensures that
                the component unmounts and remounts, forcing a fresh render for each category.*/}

          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
