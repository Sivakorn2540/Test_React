import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';


export default class Top extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" > <h1>Chuck Norris</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}