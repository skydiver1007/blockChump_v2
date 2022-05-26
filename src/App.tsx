import React from 'react';
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
// css standards import
import './styles/normalize.css';
import './styles/fonts.css';
import './styles/utils.css';
import './styles/app.css';

import LandingPage from './pages/LandingPage';
import OGChumpPage from './pages/SubPages/OGChumpPage';
import PFPChumpPage from './pages/SubPages/PFPChumpPage';
import ChumpNftEnginePage from './pages/SubPages/ChumpNftEnginePage';
import StakingPage from './pages/SubPages/StakingPage';
import DocsPage from './pages/SubPages/DocsPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/ogchumps"  element={<OGChumpPage />} />
            <Route path="/pfpchumps"  element={<PFPChumpPage />} />
            <Route path="/chumpnftengine" element={<ChumpNftEnginePage />} />
            <Route path="/staking" element={<StakingPage />} />
            <Route path="/docs" element={<DocsPage />}/>
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<LandingPage />} />
            
          </Routes>  
        </BrowserRouter>
        
    </div>
  );
}

export default App;
