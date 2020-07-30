import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Proyects from './components/Proyects';
import axios from 'axios';

class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      name:'',
      bio:'',
      profilePic:'',
      repos: []
    }
   }

   async componentDidMount() {
     
     const github = await axios('https://api.github.com/users/maguiceri')
     console.log(github)
     
     const repos = await axios('https://api.github.com/users/maguiceri/repos')
    console.log(repos)

    const {name, bio, avatar_url} = github.data

     this.setState ({
      name:name,
      bio:bio,
      profilePic: avatar_url,
      repos: repos.data
     })
     
   }

  render() {
   const {name, profilePic, bio, repos} = this.state

    return(
      <div>
        <Navbar name = {name}/>
        <Info profilePic={profilePic} bio={bio} />
        <Proyects repos={repos} />
      </div>
    )
  }
}
export default App;
