import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={<News key="general" pageSize={5} category="general" setProgress={setProgress} />}
          />
          <Route
            path="/business"
            element={<News key="business" pageSize={5} category="business" setProgress={setProgress} />}
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={5} category="sports" setProgress={setProgress} />}
          />
          <Route
            path="/technology"
            element={<News key="technology" pageSize={5} category="technology" setProgress={setProgress} />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" pageSize={5} category="entertainment" setProgress={setProgress} />}
          />
          <Route
            path="/health"
            element={<News key="health" pageSize={5} category="health" setProgress={setProgress} />}
          />
          <Route
            path="/science"
            element={<News key="science" pageSize={5} category="science" setProgress={setProgress} />}
          />
        </Routes>
      </div>
    );
  
};
export default App;
