import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {
    const menuStyle = { color: 'white', backgroundColor: 'black', fontWeight: 'bold' };
    return (
        <Menu className="ui borderless transparent topmenu menu" style={menuStyle}>
          <Container style={menuStyle}>
            <Menu.Item fitted><Icon size="large" inverted name='spotify'>Spotify</Icon></Menu.Item>
            <Menu.Item position="right" style={menuStyle} name='Premium'/>
            <Menu.Item style={menuStyle} name='Help'/>
            <Menu.Item style={menuStyle} name='Download'/>
            <Menu.Item style={menuStyle} text='|'>|</Menu.Item>
            <Menu.Item style={menuStyle} name='Sign Up'/>
            <Menu.Item style={menuStyle} name='Login'/>
          </Container>
        </Menu>

    );
  }
}
