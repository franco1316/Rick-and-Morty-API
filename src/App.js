import './styles/App.css'
import './styles/resetStyles.css'
import './styles/searchBoxStyles.css'
import './styles/residentList.css'
import './styles/locationInfo.css'

import axios from 'axios'
import {useState, useEffect} from 'react'
import SearchBox from './components/SearchBox'
import ResidentList from './components/ResidentList'

function App() {

  const [ location, setLocation ] = useState({})


  useEffect( () => {

    const random = Math.floor( Math.random() * 126 ) + 1
    axios.get( ` https://rickandmortyapi.com/api/location/${ random } ` )
    .then( res => setLocation( res.data ) )
    .catch( e => console.log( e ) )

  }, [] )

  return (
    <div className = " App flex-column" >
      <SearchBox setLocation = { setLocation } />
      <ResidentList location={location} residents={location.residents}/>
    </div>
  )
}

export default App;
