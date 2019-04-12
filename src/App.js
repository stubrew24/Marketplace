import React, { Component } from 'react';
import Content from './containers/Content'
import SearchBar from './components/SearchBar'
import Navbar from './containers/Navbar'
import { Grid, Container, Sidebar } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {
    listings: [],
    searchTerm: "",
    category: null
  }

  componentDidMount() {
    fetch('http://localhost:3001/listings')
      .then(resp => resp.json())
      .then(listings => {
        this.setState({
          listings
        })
      })
  }

  onSearch = (e) => {
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    })
  }

  categoriesClick = category => this.setState({ category })

  listings = () => {
    if (this.state.searchTerm) {
      return this.state.listings.filter(listing => {
        return listing.title.toLowerCase().includes(this.state.searchTerm) ||
          listing.description.toLowerCase().includes(this.state.searchTerm)
      })
    } else if (this.state.category) {
      return this.state.listings.filter(listing => listing.category.name.toLowerCase() === this.state.category)
    } else {
      return this.state.listings
    }
  }

  render() {
    return (
      <Container className="container-box">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Navbar categoriesClick={this.categoriesClick} />
            </Grid.Column>
            <Grid.Column width={12}>
              <SearchBar onSearch={this.onSearch} searchTerm={this.state.searchTerm} />
              <Content listings={this.listings()} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
