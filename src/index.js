
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Base from "./components/Base";

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-242345977-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Base />
  </React.StrictMode>
);

