import React, {Component} from 'react';
import CardList from './CardList';
import CommonContent from './CommonContent';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu'
import styles from './PageContent.module.css';
import links from '../data/label'

class PageContent extends Component{
    render(){
        const components = {
            cardList: CardList,
            commonContent: CommonContent
        };
        const ChildComponent = components[this.props.typeOfContent];

        return (
            <div className={styles.content}>
                <LeftMenu leftMenuContent = {links}/>
                <ChildComponent>{this.props.content}</ChildComponent>
                <RightMenu />
            </div>
        )
    }
}

export default PageContent;
