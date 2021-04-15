import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SubscribeState from '../context/subscribe/SubscribeState';
import AlertState from '../context/alert/AlertState';
import Home from './Home'
import News from './News'

const App = () => {

   
    return (
        <SubscribeState>
            <AlertState>
                <Fragment>
                    { <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/news" exact component={News}/>
                        </Switch>
                    </BrowserRouter> }
                </Fragment>
            </AlertState>
        </SubscribeState>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App></App>, document.getElementById('app'));
}
