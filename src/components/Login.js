import React from 'react'
import { Button, Message, Modal, Form, Label, Input } from 'semantic-ui-react'

class Login extends React.Component {

    state = {
        username: "",
        password: "", 
        error: ""
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setError = (error) => {
        this.setState({
            error: error
        })
    }

    handleSubmit = (_) => {
        if (this.state.username && this.state.password) {
            this.props.loginClick()
            this.props.handleLogin(this.state)
            
        } else {
            this.setError("Make sure to fill in all fields")
        }
    }

    render() {
        return (

            <Modal open={this.props.modal} 
                    closeOnEscape={this.props.loginClick}
                    closeOnDimmerClick={this.props.loginClick}
                    onClose={this.props.loginClick} closeIcon>
                    
                <Modal.Header>
                    Login
                </Modal.Header>

                <Modal.Content>
                    {this.state.error && <Message error>{this.state.error}</Message>}

                    <Form onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Label>Username</Label>
                            <Input name="username" value={this.state.username}></Input>
                        </Form.Field>
                        <Form.Field>
                            <Label>Password</Label>
                            <Input name="password" type="password" value={this.state.password}></Input>
                        </Form.Field>
                        <Button type="submit">Login</Button>
                    </Form>
                </Modal.Content>
            </Modal>
            
        )
    }
}

export default Login