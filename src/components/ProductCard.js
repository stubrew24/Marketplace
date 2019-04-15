import React from 'react'
import { Card, Image, Modal, Header, Button, Popup, Confirm } from 'semantic-ui-react'

export default class ProductCard extends React.Component {

    state = {
        open: false
    }

    details() {
        return (
            <Card href="#">
                <Image src={this.props.images[0].url} className="product-card" />
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.props.location}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>£{this.props.price}</Card.Content>
            </Card>
        )
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleDelete = () => {
        this.handleClick()
        this.props.removeListing(this.props.id)
    }


    render() {
        return (
            <Modal trigger={this.details()}>
                <Modal.Header>{this.props.title}</Modal.Header>
                
                <Modal.Content image>
                    <Image wrapped size='medium' src={this.props.images[0].url} />
                    <Modal.Description>
                        <Header>Description</Header>
                            {this.props.description}
                        <Header>Price</Header>
                            £{this.props.price}
                        <Header>Seller Information</Header>
                            {this.props.seller.name}
                        <Image floated="left" avatar src={this.props.seller.profile_img_url} />
                    </Modal.Description>
                </Modal.Content>
                
                <Modal.Actions>
                    <Button>Update</Button>
                    <Modal
                        trigger={<Button>Delete</Button>}
                        header='Careful now'
                        content='Are you sure you want to delete this listing?'
                        actions={['Cancel', { key: 'delete', content: 'Delete', negative: true, onClick: this.handleDelete}]}
                    />
                </Modal.Actions>

                <Modal.Actions>
                    <Popup trigger={<Button positive>Request Details</Button>} content='This will automagically send a message to the seller.' />
                </Modal.Actions>
            </Modal>
        )
    }
}