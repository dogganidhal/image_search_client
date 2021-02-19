import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Search from "./Search";
import SearchResult from "./SearchResult";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Search />
        </Route>
        <Route path="/search">
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  );
}
