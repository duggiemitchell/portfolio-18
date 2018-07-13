import React, { Component } from 'react'
import styles from './App.css';
import Home from './views/home/Home';
import About from './views/about/About'
import Contact from './views/contact/Contact'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={styles.app}>
                <Home/>
                <About/>
                <Contact/>
            </div> 
        );
    }
}
 
export default App;
