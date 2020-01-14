import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from 'react-router-dom'
import HomePage from "./pages/HomepageLayout";
import Subject1Page from "./pages/Subject1";
import Subject3Page from "./pages/Subject3";
import MyHeader from "./pages/MyHeader";

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


const BaseLayout = () => (
    <div className="base">
        <header>
            <MyHeader />
        </header>
        <div className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/subject1" component={Subject1Page} />
            <Route path="/subject3" component={Subject3Page} />
            <Route path="/subject4" component={Subject4Page} />
            <Route path="/subject5" component={Subject5Page} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/me" component={ProfilePage} />
        </div>
        <footer>
            Designed by Huayi Jin @ Shanghai JiaoTong University 2020
      </footer>
    </div>
)

const LoginPage = () => <div>This is a Login Page</div>
const RegisterPage = () => <div>This is a Register Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
//const Subject3Page = () => <div>This is a Contact Page</div>
const Subject4Page = () => <div>This is a Contact Page</div>
const Subject5Page = () => <div>This is a Contact Page</div>

const App = () => (
    <BrowserRouter>
        <BaseLayout />
    </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))