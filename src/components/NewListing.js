import React from 'react'
import { Input, Modal, TextArea, Button, Form, Label } from 'semantic-ui-react'


const NewListing = (props) => (
    <Modal open={true} >
        <Modal.Header>
            New Listing
        </Modal.Header>

        <Modal.Content>
            <Form>
                <Input placeholder={"Title"} fluid></Input><br />
                <TextArea placeholder={"Description"} fluid /><br /><br />
                <Input labelPosition='right' type='text' placeholder='Amount'>
                    <Label basic>£</Label>
                    <input type="number"/>
                    <Label>.00</Label>
                </Input>
            </Form>
        </Modal.Content>

        <Modal.Actions>
            <Button onClick={props.listingClick}>Cancel</Button>
        </Modal.Actions>
    </Modal>
)

export default NewListing

// "title" text
// "description" textarea
// "price": number
// "location": autocomplete
// "img_urls": image upload
// "user_id": hidden
// "category_id": dropdown