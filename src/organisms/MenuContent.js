import React, {Component} from 'react';
import CardList from './CardList';
import styles from './MenuContent.module.css';
import articles from '../data/articles';

class MenuContent extends Component{
    render(){
        return(
            <div className={styles.content}>
                <CardList articles = {articles}/>
            </div>
        )
    }
}

export default MenuContent;