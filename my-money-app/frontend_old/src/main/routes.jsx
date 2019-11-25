import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import AuthOrApp from './authOrApp';
import Dashboard from '../dashboard/dashboard';
import BillingCylce from '../billingCycle/billingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycles" component={BillingCylce} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);