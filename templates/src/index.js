import React from "react";
import { render } from "react-dom";
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import ErrorView from './views/ErrorView';
import App from "./views/pages/App";

const Rooted = root(tree, App);

render(<ErrorView><Rooted /></ErrorView>, document.getElementById("app"));
