import React from 'react'
import ProductCard from '../components/ProductCard'
import { Card } from 'semantic-ui-react';

export default class Content extends React.Component{

    render(){
        return <Card.Group itemsPerRow={4}>
            {
                this.props.listings.length > 0 
                    ? 
                this.props.listings.map(listing => <ProductCard key={listing.id} {...listing} removeListing={this.props.removeListing}/>) 
                    : 
                <div><br /><h2>No results :(</h2></div>
            }
        </Card.Group>
    }
}