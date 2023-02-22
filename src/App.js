import { Routes,Route  } from 'react-router-dom'
import  Portada from "./components/portadas/Portada"
function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<Portada/>} />
    </Routes>

  </div>
  )
}

export default App;
