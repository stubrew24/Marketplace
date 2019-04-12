import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Header } from 'semantic-ui-react'
import NewListing from '../components/NewListing'

export default class Navbar extends Component {
  state = {
    modalOpen: false
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name },
      () => this.props.categoriesClick(name))
  }

  listingClick = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>

        <NewListing modal={this.state.modalOpen}  listingClick={this.listingClick}/>

        <Menu vertical>
          <Menu.Item style={{ backgroundColor: "#f99" }}>
            <Header>The Marketplace</Header>
          </Menu.Item>

          <Menu.Item>Categories</Menu.Item>
          
          <Menu.Menu>
            <Menu.Item name='' active={activeItem === ''} onClick={this.handleItemClick}>
                <Icon name='grid layout' />
                All Listings
            </Menu.Item>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='car' active={activeItem === 'car'} onClick={this.handleItemClick}>
              <Icon name='car' />
              Car
            </Menu.Item>
            <Menu.Item name='watch' active={activeItem === 'watch'} onClick={this.handleItemClick}>
              <Icon name='clock' />
              Watch
            </Menu.Item>
          </Menu.Menu>
          <Menu.Item color={'blue'} onClick={this.listingClick} >
            New Listing
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}
