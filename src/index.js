import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Header20331 from './views/header20331'
import WhatIsCryptocurrency20362 from './views/what-is-cryptocurrency20362'
import Tutorials20896 from './views/tutorials20896'
import TutorialsList21125 from './views/tutorials-list21125'
import DeveloperTutorials21156 from './views/developer-tutorials21156'
import BeginnerTutorials23222 from './views/beginner-tutorials23222'
import ChoosingAWallet233149 from './views/choosing-a-wallet233149'
import SecureYourWallet233182 from './views/secure-your-wallet233182'
import HowToTransactCrypto233215 from './views/how-to-transact-crypto233215'
import HowToEarnCryptoCurrency233248 from './views/how-to-earn-crypto-currency233248'
import ChoosingAExchange233281 from './views/choosing-a-exchange233281'
import DifferentTypesOfCrypto24658 from './views/different-types-of-crypto24658'
import ProofofWork246104 from './views/proofof-work246104'
import ProofofStake246146 from './views/proofof-stake246146'
import Tokens246166 from './views/tokens246166'
import Stablecoins246186 from './views/stablecoins246186'
import TamperProofLedger246225 from './views/tamper-proof-ledger246225'
import DecentralizedNetwork246247 from './views/decentralized-network246247'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Header20331} path="/header20331" />
        <Route
          exact
          component={WhatIsCryptocurrency20362}
          path="/what-is-cryptocurrency20362"
        />
        <Route exact component={Tutorials20896} path="/tutorials20896" />
        <Route
          exact
          component={TutorialsList21125}
          path="/tutorials-list21125"
        />
        <Route
          exact
          component={DeveloperTutorials21156}
          path="/developer-tutorials21156"
        />
        <Route
          exact
          component={BeginnerTutorials23222}
          path="/beginner-tutorials23222"
        />
        <Route
          exact
          component={ChoosingAWallet233149}
          path="/choosing-a-wallet233149"
        />
        <Route
          exact
          component={SecureYourWallet233182}
          path="/secure-your-wallet233182"
        />
        <Route
          exact
          component={HowToTransactCrypto233215}
          path="/how-to-transact-crypto233215"
        />
        <Route
          exact
          component={HowToEarnCryptoCurrency233248}
          path="/how-to-earn-crypto-currency233248"
        />
        <Route
          exact
          component={ChoosingAExchange233281}
          path="/choosing-a-exchange233281"
        />
        <Route
          exact
          component={DifferentTypesOfCrypto24658}
          path="/different-types-of-crypto24658"
        />
        <Route exact component={ProofofWork246104} path="/proofof-work246104" />
        <Route
          exact
          component={ProofofStake246146}
          path="/proofof-stake246146"
        />
        <Route exact component={Tokens246166} path="/tokens246166" />
        <Route exact component={Stablecoins246186} path="/stablecoins246186" />
        <Route
          exact
          component={TamperProofLedger246225}
          path="/tamper-proof-ledger246225"
        />
        <Route
          exact
          component={DecentralizedNetwork246247}
          path="/decentralized-network246247"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
