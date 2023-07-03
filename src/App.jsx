
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { Homepage } from './components/Homepage'
import { Template1 } from './components/Template1'
import { Layout } from './components/Layout'
import { Create } from './components/Create'
import { Template2 } from './components/Template2'
import { Template3 } from './components/Template3'
import { Templates } from './components/Templates'
import { CVS } from './components/CVS'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/homepage' element={<Layout />} >
          <Route path='/homepage' element={<Homepage />} />
          <Route path='homepage/create' element={<Create />} />
          <Route path='homepage/CVS' element={<CVS />} />
          <Route path='homepage/Templates' element={<Templates />} />
          <Route path='homepage/Template1' element={<Template1 />} />
          <Route path='homepage/Template2' element={<Template2/>} />
          <Route path='homepage/Template3' element={<Template3/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
