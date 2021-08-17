import React from 'react';
import { HeaderWrapper } from './styles';

const Header = ({location}) => {
  return (
    <HeaderWrapper><h1>Informações do clima em {location}</h1></HeaderWrapper>
  )
}

export default Header;