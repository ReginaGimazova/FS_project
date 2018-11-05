import React, {Component} from 'react';
import styles from './HomePage.module.css';
import MainTemplate from '../templates/MainTemplate'

class HomePage extends Component{
    render(){
        return(
            <div className={styles.page}>
                <MainTemplate/>
            </div>
        )
    }
}
export default HomePage;
