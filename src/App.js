

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/menu.css'
import Banner from './components/Banner';
import Header from './components/Header'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './containers/About';
import Footer from './components/Footer';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Portfolio from './containers/Portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/home' element={<Banner />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
