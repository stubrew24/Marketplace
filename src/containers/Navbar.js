import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Header } from 'semantic-ui-react'
import NewListing from '../components/NewListing'

export default class Navbar extends Component {
  state = {
    modalOpen: false
  }

  handleItemClick = (id) => {
    this.setState({ activeItem: id },
      () => this.props.categoriesClick(id))
  }

  listingClick = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  renderCategoryItems = () => {
    return this.props.categories.map(category => {
      const {name, id} = category

      return <Menu.Item name={name} active={this.state.activeItem === id} onClick={() => this.handleItemClick(id)}>
        <Icon name={name.toLowerCase()} />
        {name}
      </Menu.Item>
  })}

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>

        {this.state.modalOpen && <NewListing modal={this.state.modalOpen}  listingClick={this.listingClick}/>}

        <Menu vertical>
          <Menu.Item style={{ backgroundColor: "#f99" }}>
            <Header>The Marketplace</Header>
          </Menu.Item>

          <Menu.Item>Categories</Menu.Item>
          
          <Menu.Menu>
            <Menu.Item name='' active={activeItem === ''} onClick={() => this.handleItemClick(null)}>
                <Icon name='grid layout' />
                All Listings
            </Menu.Item>

            {this.renderCategoryItems()}
           
          </Menu.Menu>
          <Menu.Item color={'blue'} onClick={this.listingClick} >
            New Listing
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}

