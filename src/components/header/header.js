import React from 'react';
import logo from '../../assets/images/header/logo.svg';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 720px;
  padding: 20px 0;
  width: calc(100vw - 40px);
`;

const Logo = styled.img`
  cursor: pointer;
  height: 20px;
  vertical-align: bottom;
  width: auto;
`;

const NavigationContainer = styled.div`
  margin-left: auto;
`;

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo alt="yieldthoughts.com logo" src={logo} />
      </Link>
      <NavigationContainer>
        <Link to="/thoughts">Thoughts</Link>
      </NavigationContainer>
    </Container>
  );
}
