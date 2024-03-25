import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* PAGES */
import Tyc from '../src/pages/tyc/Tyc'
import Landing from '../src/pages/landing/Landing'

function App() {
    return (
        <div className='appContainer'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>} />
                    <Route path='/tyc' element={<Tyc/>} />
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
