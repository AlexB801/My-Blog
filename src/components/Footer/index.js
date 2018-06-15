import React from 'react';
import { Segment, Container, Icon } from 'semantic-ui-react';
import Link from 'gatsby-link';

const Footer = () => (
  <Segment basic textAlign='center'>
    <Container>
      <a href='https://www.facebook.com/' target="_blank"><Icon name='facebook' size='huge' color='black' /></a>
      <a href='https://www.twitter.com/' target="_blank"><Icon name='twitter' size='huge' color='black' /></a>
      <a href='https://www.linkedin.com/' target="_blank"><Icon name='linkedin' size='huge' color='black' /></a>
      <a href='https://github.com/AlexB801' target="_blank"><Icon name='github' size='huge' color='black' /></a>
    </Container>
  </Segment>
);

export default Footer;
