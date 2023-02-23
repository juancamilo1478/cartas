
import { Routes,Route, useLocation  } from 'react-router-dom'
import  Portada from "./components/portadas/Portada"
import Cartas from "./components/cards/Cards"
import SearchBar from './components/searchBar/SearchBar'
import Favorites from './components/favorites/favorites'
import Detail from './components/cards/Detail'
function App() {
  const lugar=useLocation()

  if(lugar.pathname==='/' ){
    return(<Routes>
      <Route path='/' element={<Portada/>} />
      <Route path='/cartas' element={<Cartas/>}/>
       <Route path='/detail/:detailId'  element={<Detail/>}/>
    </Routes>)
  }else{return(<div>
    <SearchBar/>
    <Routes>
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/cartas' element={<Cartas/>}/>
       <Route path='/detail/:detailId'  element={<Detail/>}/>
    </Routes>
  </div>)}

}

export default App;
