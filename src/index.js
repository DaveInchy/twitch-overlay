import react from 'react';
import react_dom from 'react-dom';
import { Routes, Router, Route} from 'react-router-dom';

import App from './Application/App';
import Overlay from './Application/App';
import './index.css';

import('fs').then(fs => {
  import('path').then(path => {
    const cwd = process.cwd();
    const { readFileSync, readFile } = fs;
    const logoPath = './src/Resources/logo.svg';
    const logoResolved = readFileSync(path.resolve(cwd, logoPath));
  });
});

// Content container
const RootContainer = document.getElementById('root');

// Content structure
const RootStructure = (
  <react.StrictMode>
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/olay?pass=281297" component={Overlay} />
      </Routes>
    </Router>
  </react.StrictMode>
);

// Application rendering
react_dom.render( RootStructure, RootContainer );

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