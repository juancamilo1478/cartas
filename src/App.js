
import { Routes,Route, useLocation  } from 'react-router-dom'
import  Portada from "./components/portadas/Portada"
import Cartas from "./components/cards/Cards"
import SearchBar from './components/searchBar/SearchBar'

function App() {
  const lugar=useLocation()

  if(lugar.pathname==='/' ){
    return(<Routes>
      <Route path='/' element={<Portada/>} />
      <Route path='/cartas' element={<Cartas/>}/>
    </Routes>)
  }else{return(<div>
    <SearchBar/>
    <Routes>
     
      <Route path='/cartas' element={<Cartas/>}/>
    </Routes>
  </div>)}

}

export default App;
