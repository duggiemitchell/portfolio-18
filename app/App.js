import React, { Component } from 'react'
import styles from './App.css';
import SignIn from './auth/SignIn';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={styles.app}>
                <SignIn/>
            </div> 
        );
    }
}
 
export default App;
