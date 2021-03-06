import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, List, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {
    const menuStyle = { color: 'white', backgroundColor: 'black' };
    const footerStyle = {
      color: 'white',
      paddingBottom: '100px',
      backgroundColor: 'black',
      marginTop: '75px',
      paddingLeft: '300px',
      fontWeight: 'bold'
    };
    const columnStyle = { width: '100px' };
    return (
        <Grid divided="vertically" style={footerStyle}>
          <Grid.Row>
            <Grid.Column style={columnStyle}>
              <Menu.Item><Icon inverted name='spotify'>Spotify</Icon></Menu.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              Company
              <hr/>
              <List items={['About', 'Jobs', 'For the Record']}/>
            </Grid.Column>
            <Grid.Column width={3}>
              Communities
              <hr/>
              <List items={['For Artists', 'Developers', 'Brands', 'Investors', 'Vendors']}/>
            </Grid.Column>
            <Grid.Column width={3}>
              Useful Links
              <hr/>
              <List items={['Help', 'Web Player']}/>
            </Grid.Column>
            <Grid.Column width={3}>
              <Menu style={menuStyle}>
                <Icon size='big' name='instagram' circular inverted color='gray'/>
                <Icon size='big' name='facebook' circular inverted color='gray'/>
                <Icon size='big' name='twitter' circular inverted color='gray'/></Menu>
            </Grid.Column>
          </Grid.Row>


        </Grid>

    );
  }
}
