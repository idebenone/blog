
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import PageRender from './PageRender';
import Header from './components/Header';
// import Footer from './components/Footer';



function App() {
  return (
    <div className='body'>
      <div className='container col'>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route element={<Home />} path='/blog' />
              <Route element={<PageRender />} path='/blog/:page' />
              <Route element={<PageRender />} path='/blog/:page/:id' />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
