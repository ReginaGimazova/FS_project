import React, {Component} from 'react';
import CardList from './CardList';
import styles from './MenuContent.module.css';
import articles from '../data/articles';
import links from '../data/label'
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu'

class MenuContent extends Component{
    render(){
        return(
            <div className={styles.content}>
                <LeftMenu links = {links}/>
                <CardList articles = {articles}/>
                <RightMenu />
            </div>
        )
    }
}

export default MenuContent;