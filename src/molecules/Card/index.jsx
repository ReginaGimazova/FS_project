import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Button from '../../atoms/Button';

class Card extends Component {
    state = {
      isShown: false,
    };

    handleClick = () => {
      this.setState(state => ({ isShown: !state.isShown }));
    };

    render() {
      const { title } = this.props;
      const { text } = this.props;
      const { isShown } = this.state;
      return (
        <section className={styles.card}>
          <div className={styles.head}>
            <h4>{title}</h4>
            <Button onclick={this.handleClick} type="button">
              {isShown === false ? 'open' : 'close' }
            </Button>
          </div>
          {isShown && <p>{text}</p>}
        </section>
      );
    }
}
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  text: '',
};
export default Card;
