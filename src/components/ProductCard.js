import React from 'react'
import { Card, Image, Modal, Header} from 'semantic-ui-react'


const Details = (props) => (

    <Card href="#">
        <Image src={props.images[0].url} className="product-card" />
        <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.location}</span>
            </Card.Meta>
            <Card.Description>{props.description}</Card.Description>
        </Card.Content>
    </Card>
)

const ProductCard = (props) => (
    <Modal trigger={Details(props)}>
        <Modal.Header>{props.title}</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='medium' src={props.images[0].url} />
            <Modal.Description>
                <Header>Description</Header>
                {props.description}
                <Header>Price</Header>
                £{props.price}
                <Header>Seller Information</Header>
                {props.seller.name}
                <Image floated="left" avatar src={props.seller.profile_img_url} />
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ProductCard

