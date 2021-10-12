
import CardList from '../components/CardList';
import React from 'react';
import 'tachyons'
import {poses} from '../poses'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      poses: poses,
      searchField: ''
    }
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then( response=> response.json())
  //   .then(users => {this.setState({poses:users})})
  // }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  render() {
    const {poses , searchField} = this.state;
    const filterPosees = poses.filter( pose => {
      return pose.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !poses.length ?
        <h1>Loading...</h1>
    :(
          <div className="tc">
            <h1>search yoga poses</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList poses={filterPosees} />
              </Scroll>
          </div>
    )
  }
}
 
export default App;