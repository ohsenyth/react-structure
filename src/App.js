import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProjectList from './components/Project/ProjectList/ProjectList';
import ProductList from './components/Product/ProductList/ProductList';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div id="container">
        <Header></Header>
        <div id="content" className="App-content">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/products" component={ProductList} />
          </Switch>
        </div>
      </div> 
    </div>
    </ThemeProvider>
  )
}
