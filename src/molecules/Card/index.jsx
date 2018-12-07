import React, { Component } from 'react';
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
      return (
        <section className={styles.card}>
          <div className={styles.head}>
            <h4>{this.props.title}</h4>
            <Button onclick={this.handleClick} type="button">
              {this.state.isShown === false ? 'open' : 'close' }
            </Button>
          </div>
          {this.state.isShown && <p>{this.props.text}</p>}
        </section>
      );
    }
}

export default Card;
