import React from 'react';
import Proyect from '../Proyect';

class Proyects extends React.Component {
    render() {
      
        return(

           <React.Fragment>
               <p>Projects</p>
               <ul>
               {this.props.repos.map((repo, key) => {
                   return (
                       <Proyect key={key} id={key} repo={repo} />
                   )

               })}
               </ul> 
           </React.Fragment>
        )
    }
}

export default Proyects;