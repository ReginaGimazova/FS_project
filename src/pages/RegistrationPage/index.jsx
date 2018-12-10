import React, { Component } from 'react';
import FormTemplate from '../../templates/FormTemplate';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import FormControl from '../../atoms/FormControl';
import styles from './Registration.module.css';
import MenuLink from '../../atoms/CommonLink';

class RegistrationPage extends Component {
    initialState= {
      email: '',
      password: '',
      passwordRepeat: '',
    };


    state = this.initialState;

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    handlerPasswordChange = (event) => {
      const value = event.target.value.replace(/[^0-9]/, '');
      this.setState({
        [event.target.name]: value,
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState(this.initialState);
      console.log('Отправка формы');
    };

    validateEmail = () => {
      const email = this.state.email;
      if (email.length === 0) {
        return false;
      }
      return !/^.*@.*\..+$/.test(email);
    };

    render() {
      return (
        <FormTemplate>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <Title>Registration</Title>
            <FormControl>
              <Label htmlFor="email">email</Label>
              <Input
                type="email"
                value={this.state.email}
                id="email"
                name="email"
                error={this.validateEmail}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="password">password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handlerPasswordChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="repeatPassword">repeat password</Label>
              <Input
                type="password"
                id="repeatPassword"
                name="passwordRepeat"
                value={this.state.passwordRepeat}
                onChange={this.handlerPasswordChange}
              />
            </FormControl>
            <Button type="submit">Send</Button>
            <MenuLink href="/login" className="leftMenuLink"> Are you registered? log in</MenuLink>
          </form>
        </FormTemplate>
      );
    }
}

export default RegistrationPage;
