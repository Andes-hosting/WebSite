import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* PAGES */
import Tyc from '../src/pages/tyc/Tyc'
import Landing from '../src/pages/landing/Landing'
import Blog from '../src/pages/blog/Blog'
import Blog1 from './pages/blog/blogs/Blog1';
import Blog2 from './pages/blog/blogs/Blog2';
import Blog3 from './pages/blog/blogs/Blog3';
import Blog4 from './pages/blog/blogs/Blog4';

function App() {
    return (
        <div className='appContainer'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>} />
                    <Route path='/tyc' element={<Tyc/>} />
                    <Route path='/blog' element={<Blog/>} />
                    <Route path='/blog/Lleva-tu-juego-al-siguiente-nivel-con-estos-mods-increíbles-para-Palworld' element={<Blog4/>} />
                    <Route path='/blog/Eden-Genesis' element={<Blog3/>} />
                    <Route path='/blog/Demon-Slayer-Kimetsu-no-Yaiba-llega-al-Tablero-Virtual' element={<Blog2/>} />
                    <Route path='/blog/Zenless-Zone-Zero-La-Nueva-Joya-de-HoYoverse' element={<Blog1/>} />
                    {/* <Route path='/planes' element={<Plans />} /> */}
                </Routes>
            </BrowserRouter>
            {/* <BrowserRouter>
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
                    <Routes><Route path='/tyc' Component={Tyc}></Route></Routes>
                </footer>
            </BrowserRouter> */}
            {/* <Bubble></Bubble> */}
        </div>

    );
}

export default App;
