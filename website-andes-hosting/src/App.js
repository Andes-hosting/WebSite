import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* PAGES */
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs'
import FAQ from './pages/faq/FAQ'
import Games from './pages/games/Games'
import Guides from './pages/guides/Guides'
import MinecraftHosting from './pages/minecrafthosting/MinecraftHosting'
import Plans from './pages/plans/Plans'
import Support from './pages/support/Support';

function App() {
    return (
    
    <BrowserRouter>
        <header>
            <Routes>
                <Route path='*' element={<Header/>} />
                
            </Routes>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </main>
        <footer>
            <Routes>
                <Route path='*' element={<Footer/>} />
            </Routes>
        </footer>
    </BrowserRouter>
    
    );
}

export default App;
