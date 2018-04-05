import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Dosa from './Dosa';
import Chinese from './Chinese';
import Continental from './Continental';
import Allday from './allday';

export default() =>
(<BrowserRouter>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/Dosa" exact component={Dosa} />
<Route path="/Chinese" exact component={Chinese} />
<Route path="/Continental" exact component={Continental} />
<Route path="/allday" exact component={Allday} />
</Switch>
</BrowserRouter>);

