import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                </Switch>
                
            </div>
        </BrowserRouter>
    )
}

export default App;