import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* PAGES */
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Layout from './pages/layout/Layout';


function App() {
    return (
        <div className='appContainer'>
            <BrowserRouter>
                <header>
                    <Routes>
                        <Route path='*' element={<Header/>} />
                    </Routes>
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={<Layout/>} />
                    </Routes>
                </main>
                <footer>
                    <Routes>
                        <Route path='*' element={<Footer/>} />
                    </Routes>
                </footer>
            </BrowserRouter>
        </div>

    );
}

export default App;
