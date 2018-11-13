import React, {Component} from 'react';
import FormTemplate from '../../templates/FormTemplate';
import Input from '../../atoms/Input'
import Label from '../../atoms/Label'
class RegistrationPage extends Component{

    initialState= {
        email: '',
        password: '',
        passwordRepeat:''
    };

    state = this.initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(this.initialState);
    };

    render(){
        return(
            <FormTemplate>
                <form onSubmit={this.handleSubmit}>
                    <Label htmlFor="email">email</Label>
                    <Input
                        type="email"
                        value={this.state.email}
                        id="email"
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                    />

                    <Label htmlFor="password">password</Label>
                    <Input
                        type="password"
                        id ="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <Label htmlFor="repeatPassword">repeat password</Label>
                    <Input
                        type="password"
                        id="repeatPassword"
                        name="passwordRepeat"
                        placeholder="passwordRepeat"
                        value={this.state.passwordRepeat}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Send</button>
                </form>
            </FormTemplate>
        )
    }
}

export  default RegistrationPage;
