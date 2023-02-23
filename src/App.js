
import { Routes,Route  } from 'react-router-dom'
import  Portada from "./components/portadas/Portada"
import Cartas from "./components/cards/Cards"
function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<Portada/>} />
      <Route path='/cartas' element={<Cartas/>}/>
    </Routes>

  </div>
  )
}

export default App;
