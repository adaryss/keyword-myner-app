import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

import {test} from './google-api/client';

console.log('test', test);

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Typography vyriant="h1" color="secondary">
                    Keyword Myner ⛏️
                </Typography>
            </header>
        </div>
    );
};

export default App;
