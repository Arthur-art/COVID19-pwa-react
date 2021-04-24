import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(

    <Fragment>
        <App />
        <div className="portfolio">
            <a href="https://arthur-art-portfolio.vercel.app/">Developed by Arthur Teixeira</a>
        </div>
    </Fragment>,
    document.getElementById("root")
);