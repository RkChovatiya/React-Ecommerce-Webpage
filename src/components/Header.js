import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from"./Nav";

const Header = () => {
  return (  
  <MainHeader>
    <NavLink to="/">
        <img className="mainlogo" src="./images/logo1.png" alt="my logo img"/>
    </NavLink>
    <Nav/>
  </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 7rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-item: center;
position: relative;

.mainlogo {
  height : 6rem;
  padding-top : 8px
}

.logo {
    height: 5rem;
}
`;

export default Header