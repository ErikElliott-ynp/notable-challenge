import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PleaseSelect from './please_select';
import PhysicianIndex from './physician_index';
import PhysicianShow from "./physician_show";


const App = () => {
    return (
        <div id="app" className="app">
            <PhysicianIndex />
            <Switch>
                <Route exact path='/' component={PleaseSelect} />
                <Route exact path='/physician/:physicianId' component={PhysicianShow} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}
export default App;