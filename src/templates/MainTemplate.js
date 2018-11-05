import React, {Component} from 'react';
import styles from './MainTemplate.module.css';
import Header from '../molecues/Header'
import Footer from '../molecues/Footer'
import MenuContent from "../organisms/MenuContent";

class MainTemplate extends Component{
    render(){
        return(
            <div className={styles.template}>
                <Header/>
                <MenuContent/>
                <Footer/>
            </div>
        )
    }
}
export default MainTemplate;