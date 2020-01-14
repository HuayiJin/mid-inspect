import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { createBrowserHistory } from "history";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Input,
} from 'semantic-ui-react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from 'react-router-dom'

import TabExampleSecondaryPointing from "../tab";
import HomepageLayout from "./HomepageLayout";
import MySubject1 from "../pages/Subject1";
import MyHeader from "./MyHeader";


const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List>

    {children}
  </Container>
);


class PrimaryLayout extends Component {
  render() {
    return (
      <div className="primary-layout">
        <header>
        <BrowserRouter>
         <MyHeader />
        </BrowserRouter>
         
        </header>
        <main>
         1
        </main>
      </div>
    )
  }
}

const HomePage = () => (
  <HomepageLayout />
);

const UsersPage = () => (
  <App />
);


const Subject1 = () => (
  <Container style={{ margin: 20 }}>
    <MySubject1 />
  </Container>
);


const Subject3 = () => (
  <div>
    111111111111111111111111111111111111
  </div>

)
// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  //<TabExampleSecondaryPointing />
  // <HomepageLayout />

  <PrimaryLayout />
  ,
  document.getElementById("root")
);
