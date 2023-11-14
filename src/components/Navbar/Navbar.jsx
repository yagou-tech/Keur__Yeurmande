import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Infos from './Infos';
import Barre from './Menu';
import Hero from '../Hero';

const { Header, Content, Footer } = Layout;

function Navbar() {
  return (
    <div>
      <Infos />
      <Barre />
      <Hero />
    </div>
  )
}

export default Navbar