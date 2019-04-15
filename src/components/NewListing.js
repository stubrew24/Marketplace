import React from 'react'
import { Input, Modal, TextArea, Button, Form, Label, Dropdown, Grid, Message, Confirm} from 'semantic-ui-react'


export default class NewListing extends React.Component {

    state = {
        title: "",
        description: "",
        location: "",
        price: 0,
        category_id: "",
        user_id: 1,
        img_urls: ['https://www.winbirri.com/wp-content/uploads/2017/11/product-image-placeholder.jpg'],
        error: "",
        open: false
    }

    componentDidMount(){
        if (this.props.listing){
            this.updateForm(this.props.listing)
        }
    }

    updateForm = (listing) => {
        this.setState({
            title: listing.title,
            description: listing.description,
            location: listing.location,
            price: listing.price,
            category_id: listing.category_id,
            open: true
        })
    }

    categories = () => {
        return this.props.categories.map(category => {
            return { key: category.id, value: category.id, text: category.name }
        })
    }

    locationDatalist = () => {
        return this.props.locations.map(location => {
            return <option value={location} />
        })
    }

    handleFormInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect = (e, {value}) => {
        this.setState({
            category_id: value
        })
    }

    handleSubmit = () => {
        const {title, description, location, price, category_id} = this.state
        if (title && description && location && price && category_id){
            this.props.listingClick()
            this.props.saveListing(this.state) 
        } else {
            this.setState({
                error: "Make sure all fields are complete."
            })
        }
    }

    render() {
        return (
            <Modal open={this.props.modal} 
                    closeOnEscape={this.props.listingClick}
                    closeOnDimmerClick={this.props.listingClick}
                    onClose={this.props.listingClick} >
                    
                <Modal.Header>
                    New Listing
                </Modal.Header>

                <Modal.Content>
                    {this.state.error ? <Message error>{this.state.error}</Message> : null}
                    
                    <Form onChange={this.handleFormInput} onSubmit={this.handleSubmit} >
                        <Input placeholder={"Title"} fluid style={{ fontSize: "1.5em" }} name={"title"} value={this.state.title} /><br />
                        <TextArea placeholder={"Description"} fluid name={"description"} value={this.state.description} /><br /><br />

                        <Input list='locations' placeholder='Location' fluid name={"location"} value={this.state.location} />
                        <datalist id='locations'>
                            {this.locationDatalist()}
                        </datalist><br />
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Input labelPosition='right' type='text' placeholder='Amount' fluid name={"price"} value={this.state.price}>
                                        <Label basic>£</Label>
                                        <input type="number" />
                                        <Label>.00</Label>
                                    </Input><br /><br />
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <Dropdown
                                        name={"category_id"}  
                                        onChange={this.handleSelect}
                                        value={this.state.category_id}
                                        placeholder='Select Category'
                                        fluid
                                        search
                                        selection
                                        options={this.categories()}
                                    />
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Form>
                </Modal.Content>

                <Modal.Actions>
                    <Button onClick={this.props.listingClick}>Close</Button>
                    <Button onClick={this.handleSubmit} positive>Save Listing</Button>
                </Modal.Actions>
            </Modal>)
    }
}