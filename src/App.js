import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { RecoilRoot } from "recoil";

import Home from "./components/Home";
import MyPage from "./components/MyPage";

function App() {
  return (
    <RecoilRoot>
       <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/mypage" component={MyPage} />
      </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
