
import SignUp from './components/SignUp'
import Courses from './Course/Courses'
import Home from './Home/Home'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (<>
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<SignUp/>}/><Route path='/signup' element={<Home/>}/>



     
    </Routes>
    </div>
    </>
  )
}

export default App
