
import React, {useState, useEffect} from 'react';
import 'tachyons'
import {data} from '../poses'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

function App(){

  const [poses, setPoses] = useState([])
  const [searchField, setSearchfield] = useState('')
  const [count, setCount] = useState(0);

  useEffect(()=> {
    setPoses(data);
    
  },[]) 

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  const filterPosees = poses.filter( pose => {
      return pose.name.toLowerCase().includes(searchField.toLowerCase())
  })
  
  return !poses.length ?
    <h1>Loading...</h1>:
    (
          <div className="tc">
            <h1>search yoga poses</h1>
            <button onClick={()=>setCount(count+1)}> Click Me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList poses={filterPosees} />
              </Scroll>   
          </div>
    )
}
export default App;