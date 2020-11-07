import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUseStateDemo from './AppUseStateDemo';
import AppUseMemo from './AppUseMemo'
import AppUseEffectDemo from './AppUseEffectDemo'
import AppUseRef from './AppUseRef'
import AppUseRefCase2 from './AppUseRefCase2'
import AppUseRefCase3 from './AppUseRefCase3'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppUseStateDemo />
    <AppUseEffectDemo/>
    <AppUseMemo/>
    <AppUseRef/>
    <AppUseRefCase2/>
    <AppUseRefCase3/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
