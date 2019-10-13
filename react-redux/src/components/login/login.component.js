import React from 'react';
import './login.component.css'
export class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            valid: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        if (this.state.userName !== '' && this.state.password !== '') {
            this.setState({ valid: 'Login Success' })
            this.props.history.push('/home')
        } else {
            this.setState({ valid: 'please enter valid credentials.' })

        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="main-Login">
                {/* Hello Home {this.props.name} */}
                <div className="login-text">
                    Login
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="user-name">
                        <label>UserName : <input type="text" autoComplete="off" name="userName" value={this.state.userName} onChange={this.handleChange} /></label>
                    </div>
                    <div className="pass-word">
                        <label>password : <input type="password" name="password" autoComplete="off" value={this.state.password} onChange={this.handleChange} /></label>
                    </div>
                    <div className="login-btn-div">
                        <button type="submit" className="login-btn">Submit</button>
                    </div>
                </form>
                <div className="err-msg">
                    {this.state.valid}
                </div>
            </div>
        )
    }
}