import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Header, Button } from 'semantic-ui-react'
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
      const { name, id, icon } = category

      return <Menu.Item name={name} active={this.state.activeItem === id} onClick={() => this.handleItemClick(id)}>
        <Icon name={icon} />
        {name}
      </Menu.Item>
    })
  }

  locations = () => {
    return this.props.locations.map(location => {
      return { key: location, value: location, text: location }
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>

        {this.state.modalOpen && <NewListing modal={this.state.modalOpen} locations={this.props.locations} listingClick={this.listingClick} categories={this.props.categories} saveListing={this.props.saveListing} />}


        <Menu vertical>

          <Menu.Item>
            <Header className="headerText">The Marketplace</Header>
          </Menu.Item>


          <Menu.Item>
            <Dropdown
              name={"location"}
              onChange={this.props.setLocation}
              value={this.state.category_id}
              placeholder='Select Location'
              fluid
              search
              selection
              options={this.locations()}
            />
          </Menu.Item>
          
          <Menu.Item>Categories</Menu.Item>

          <Menu.Menu>
            <Menu.Item name='' active={activeItem === ''} onClick={() => this.handleItemClick(null)}>
              <Icon name='grid layout' />
              All Listings
            </Menu.Item>

            {this.renderCategoryItems()}

          </Menu.Menu>

          <Menu.Item>
            <Button positive fluid onClick={this.listingClick} >New Listing</Button>
          </Menu.Item>

        </Menu>
      </React.Fragment>
    )
  }
}

