import React from 'react';
import styles from './styles.css'
class Navbar extends React.Component {

    render() {
        const {name} = this.props

        return(
            <nav>
            <h1>Startup Argentina</h1>
            <p>{name}</p>
            </nav>
        )
    }
} 

export default Navbar;