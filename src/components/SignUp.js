import React from 'react'
import { Button, Message, Modal, Form, Label, Input } from 'semantic-ui-react'

class SignUp extends React.Component {

    state = {
        name: "",
        email: "",
        password: "", 
        confirmPassword: "",
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
        if (this.state.name && this.state.password && this.state.email && this.state.confirmPassword) {
            if (this.state.password === this.state.confirmPassword) {
                if (this.state.password.length > 6) {
                    this.props.signUpClick()
                    this.props.handleSignUp({name: this.state.name, email: this.state.email, password: this.state.password})
                } else {
                    this.setError("Password must be 6 characters or longer")
                }
            } else {
                this.setError("Please confirm your password")
            }
        } else {
            this.setError("Make sure to fill in all fields")
        }
    }

    render() {
        return (

            <Modal open={this.props.modal} 
                    closeOnEscape={this.props.signUpClick}
                    closeOnDimmerClick={this.props.signUpClick}
                    onClose={this.props.signUpClick} closeIcon>
                    
                <Modal.Header>
                    Sign Up
                </Modal.Header>

                <Modal.Content>
                    {this.state.error && <Message error>{this.state.error}</Message>}

                    <Form onChange={this.handleFormChange} onSubmit={this.handleSubmit}>

                        <Form.Field>
                            <Label>Name</Label>
                            <Input name="name" value={this.state.name}></Input>
                        </Form.Field>

                        <Form.Field>
                            <Label>Email</Label>
                            <Input name="email" value={this.state.email}></Input>
                        </Form.Field>

                        <Form.Field>
                            <Label>Password</Label>
                            <Input name="password" type="password" value={this.state.password}></Input>
                        </Form.Field>

                        <Form.Field>
                            <Label>Confirm Password</Label>
                            <Input name="confirmPassword" type="password" value={this.state.confirmPassword}></Input>
                        </Form.Field>

                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Modal.Content>
            </Modal>
            
        )
    }
}

export default SignUp