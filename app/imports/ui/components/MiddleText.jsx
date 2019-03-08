import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Button } from 'semantic-ui-react';

export default class MiddleText extends React.Component {

  render() {
    const fontStyle = { color: 'white' };
    const textStyle = { color: 'white', fontSize: '75px', fontWeight: 800, paddingTop: '200px' };
    const tinyStyle = { color: 'white', fontSize: '16px', margin: '10px' };
    return (
        <Container textAlign="center" style={fontStyle}>

          <Header style={textStyle}> Music for everyone.</Header>
          <Header style={tinyStyle}> Millions of songs. No credit card needed.</Header>
          <Button color='green'>GET SPOTIFY FREE</Button>
        </Container>

    );
  }
}
