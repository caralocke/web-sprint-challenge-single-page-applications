import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom' //imported BrowserRouter as Router
import { ThemeProvider } from 'styled-components' //Imported ThemeProvider
import themeObj from './theme'

//Wrapped Router around App and ThemeProvider
ReactDOM.render(<ThemeProvider theme={themeObj}><Router><App /></Router></ThemeProvider>, document.getElementById("root"));
