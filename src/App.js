import './App.scss';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SlidesPages from './pages/SlidesPages';

const user = process.env.REACT_APP_USER;
const pw = process.env.REACT_APP_PW;

function App() {
  return (
    <div className='App'>
      <h1>Hola amigos!</h1>

      <HashRouter>
        <div className='links'>
          <Link to='/'>HomePage</Link>
          <br />
          <Link to='/slides'>Slides</Link>
          <br />
          <p>El usuario es:{user}</p>
          <p>La contraseña es:{pw}</p>
        </div>

        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/slides' element={<SlidesPages></SlidesPages>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
