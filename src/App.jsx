import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
