import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout/layout';

// import './index.css';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route
                path="/"
                exact
                component={() =>
                    <Layout>
                        <Route path="/about" component={() => "About"}/>
                        <Route path="/product" component={() => "Product"}/>
                    </Layout>
                }
            />
        </Switch>

    </HashRouter>,
    document.getElementById('root')
);

