import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Image, Menu } from 'antd';
import { BiChevronDown } from 'react-icons/bi';
import Logo from "../../assets/Logo.png"
import styled from 'styled-components';


const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 10px;

  .ant-menu{
    
    padding-top: 25px;
  }
  .ant-menu-title-content{

    &:hover{
    color: #FF0390;
    border: none;
  }
  }

  .don{
    background-color:#FF0390;
    color: #fff;
    width: 118px;
    font-family: "Roboto";
    font-weight: 700;
    padding: 10px;
    border: none;

    &:hover{
    background-color: #fff;
    color: #FF0390;
    border: 1px black;
  }
  }
  
`

const items = [
  {
    label: 'Accueil',
    key: 'mail',
  },
  {
    label: 'Qui sommes nous ?',
    key: 'RemMenu',
    children: [
      {
        type: 'group',
        children: [
          {
            label: 'Notre Equipe',
            key: 'setting:1',
          },
          {
            label: 'Nos parrains',
            key: 'setting:2',
          },
          {
            label: 'Nos partenaires',
            key: 'setting:3',
          },
        ],
      },
      
    ],
  },
  {
    label: 'Programmes',
    key: 'app',
  },
  {
    label: 'Demandes',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        children: [
          {
            label: "Demande d'accueil d'enfant/Bébé",
            key: 'setting:4',
          },
          {
            label: "Donner un bébé à l'orphelinat",
            key: 'setting:5',
          },
          {
            label: "Devenir bénévole",
            key: 'setting:6',
          },
        ],
      },
      
    ],
  },
  {
    label: 'Galerie',
    key: 'img',
  },
  {
    label: 'Contactez-nous',
    key: 'about',
  },
  {
    label: (
      <Button className='don'>
        FAIRE UN DON
      </Button>
    ),
    key: 'alipay',
  },
];


const Barre = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return(
      <Navbar>
        <img src={Logo} alt="" />
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Navbar>
    )
}

export default Barre