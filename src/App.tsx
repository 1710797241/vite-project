import { useState, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import AppStyle from './App.module.css';
import { Routes, Outlet, Route, BrowserRouter, HashRouter } from 'react-router-dom';
const Index = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));

import Loadable from './components/loadable';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="index" element={Loadable(Index)}></Route>
                    <Route path="about/:id" element={Loadable(About)}></Route>
                    <Route path="*" element={<Index />}></Route>
                </Routes>
            </HashRouter>

            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
