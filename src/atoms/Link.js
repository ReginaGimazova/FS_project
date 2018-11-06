import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.css';

class Link extends Component{
    render(){
        const children = this.props.children;
        return (
            <a style={{color: this.props.color, margin: this.props.margin}} className={styles.link} href={this.props.href}>{children}</a>
        )
    }
}
Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element.isRequired,
    color: PropTypes.string,
    margin: PropTypes.string
};

export default Link;