import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddToken from './components/AddToken';
import ConfirmNewWallet from './components/ConfirmNewWallet';
import ConfirmTransaction from './components/ConfirmTransaction';
import CustomToken from './components/CustomToken';
import GetSeedPhase from './components/GetSeedPhase';
import Import from './components/Import';
import Login from './components/Login';
import NewWallet from './components/NewWallet';
import Profile from './components/Profile';
import Transaction from './components/Transaction';
// import Particles from 'react-particles-js';
// import particlesConfig from './config/particlesConfig';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
        <div style={{ position: 'absolute'}}>
          {/* <Particles height="100vh" width="100vw" params={particlesConfig} /> */}
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/addtoken" exact component={AddToken} />
          <Route path="/confirmnewwallet" exact component={ConfirmNewWallet} />
          <Route path="/confirmtransaction" exact component={ConfirmTransaction} />
          <Route path="/customtoken" exact component={CustomToken} />
          <Route path="/getseedphase" exact component={GetSeedPhase} />
          <Route path="/import" exact component={Import} />
          <Route path="/login" exact component={Login} />
          <Route path="/newwallet" exact component={NewWallet} />
          <Route path="/transaction" exact component={Transaction} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
      <div>
          <Login />
      </div>
  );
}

export default App;
