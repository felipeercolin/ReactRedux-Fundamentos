import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import Home from '../pages/Home/Index';
import User from '../pages/User/Index';

export default props =>
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={User} />
    <Redirect from="*" to="/" />
</Switch>