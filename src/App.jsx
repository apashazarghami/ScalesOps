import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
