import './styles/resetStyles.css'
import './styles/App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import SearchBox from './components/SearchBox'
import CharactersList from './components/CharactersList'

function App() {

  const [ location, setLocation ] = useState({})


  useEffect( () => {

    const random = Math.floor( Math.random() * 126 ) + 1
    axios.get( ` https://rickandmortyapi.com/api/location/${ random } ` )
    .then( res => setLocation( res.data ) )
    .catch( e => console.log( e ) )

  }, [] )

  return (
    <div className = " App " >
      <SearchBox setLocation = { setLocation } />
      <h1> { location.name } </h1>
      <CharactersList residents={location.residents}/>
    </div>
  )
}

export default App;
