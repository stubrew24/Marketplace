import React, { Component } from 'react';
import Content from './containers/Content'
import SearchBar from './components/SearchBar'
import Navbar from './containers/Navbar'
import { Grid, Container } from 'semantic-ui-react'
import './App.css';
import {URL, PRODUCTS_URL, CATEGORIES_URL, LOGIN_URL, SIGNUP_URL} from './constants.js'

class App extends Component {

  state = {
    listings: [],
    searchTerm: "",
    locations: [],
    categoryId: null, 
    categories: []
  }

  componentDidMount() {
    this.getListings()
    this.getCategories()
  }

  getListings = () => {
    fetch(PRODUCTS_URL)
      .then(resp => resp.json())
      .then(products => {
        this.setState({
          listings: products
        })
      })
  }

  getCategories = () => {
    fetch(CATEGORIES_URL)
      .then(resp => resp.json())
      .then(categories => {
        this.setState({
          categories
        })
      })
  }

  getLocations() {
    let locations = []
    this.state.listings.forEach(listing => {
      locations.includes(listing.location) || locations.push(listing.location)
    })
    return locations
  }

  onSearch = e => this.setState({ searchTerm: e.target.value.toLowerCase() })

  setLocation = (e, {value}) => this.setState({ location: value, categoryId: null })

  setCategory = id => this.setState({ categoryId: id, location: null })

  removeListing = id => {
    fetch(PRODUCTS_URL + `/${id}`, {
      method: 'DELETE'
    }).then(this.getListings)
  }

  listings = () => {
    if (this.state.searchTerm) {
      return this.state.listings.filter(listing => {
        return listing.title.toLowerCase().includes(this.state.searchTerm) ||
          listing.description.toLowerCase().includes(this.state.searchTerm)
      })
    } else if (this.state.categoryId) {
      return this.state.listings.filter(listing => listing.category.id === this.state.categoryId)
    } else if (this.state.location) {
      return this.state.listings.filter(listing => listing.location === this.state.location)
    } else {
      return this.state.listings
    }
  }

  saveListing = (listing) => {
    fetch(PRODUCTS_URL, {
      method: 'POST',
      headers: {'Content-type':'application/json'},   
      body: JSON.stringify(listing)
    }).then(resp => resp.json()).then(this.getListings)
  }

  handleLogin = (user) => {
    console.log("TODO: handle login")
  }

  handleSignUp = (user) => {
    debugger
    console.log("TODO: handle signup")
  }

  render() {
    return (
      <Container className="container-box">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
            <Navbar handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} categories={this.state.categories} locations={this.getLocations()} categoriesClick={this.setCategory} saveListing={this.saveListing} setLocation={this.setLocation}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <SearchBar onSearch={this.onSearch} searchTerm={this.state.searchTerm} />
              <Content listings={this.listings()} removeListing={this.removeListing}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
