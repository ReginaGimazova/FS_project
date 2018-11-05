import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.css';

class Link extends Component{
    render(){
        const children = this.props.children;
        return (
            <a className={styles.link} href={this.props.href}>{children}</a>
        )
    }
}
Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default Link;