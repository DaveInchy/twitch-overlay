/* eslint-disable no-unused-vars */
import react from 'react';
import react_dom from 'react-dom';
import { Routes, Router, Route} from 'react-router-dom';

import App from './Application/App';
import './index.css';

// Content container
const RootContainer = document.getElementById('root');

// Content structure
const RootStructure = (
  <react.StrictMode>
    <Router>
      <Routes location={"localhost:3000"}>
        <Route
          path="/"
          element={<App />}
        >
          <Route
            path="index"
            element={<App />}
          >
            <Route path="new-world" element={<App />} />
          </Route>
          <Route
            path="dashboard"
            element={<App />}
          >
            <Route path="sign-in" element={<App />} />
            <Route path="sign-up" element={<App />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </react.StrictMode>
);

// Application rendering
react_dom.render(RootStructure, RootContainer);

// Performance monitoring
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

reportWebVitals(console.log());