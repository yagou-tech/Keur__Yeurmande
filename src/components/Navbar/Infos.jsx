import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoGooglePlus } from 'react-icons/bi';
import { IoLogoDribbble } from 'react-icons/io';
import { FaWifi } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';
import { HiMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { Col, Row } from 'antd';
import styled from 'styled-components';

const Tete = styled.div`
    background-color: #FF0390;
    color: #fff;
    
    .media{
        display: flex;
        flex-direction: row;
        font-family: 'Roboto';
        font-size: 14px;
        padding: 10px;
    }
    .contact{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;

        padding-right: 20px;
        font-family: 'Roboto';
        font-size: 14px;
    }
    .infos{
        display: flex;
        width: 90%;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }
`

const Social = styled.div`
    .icons{
        width: 18px;
        height: 18px;
        padding-left: 5px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .icon{
        padding-right: 7px;
        width: 18px;
        height: 18px;
    }

    .phone{
        padding-right: 7px;
    }

    span{
        padding-inline-end: 10px;
    }
`

function Infos() {
  return (
    <Tete>
        <Row justify="center" align="middle" className='infos'>
            <Col span={14} className='media'>
                <span>Suivez-nous sur :</span>
                <Social>
                    <BiLogoFacebook className='icons' />
                    <BiLogoTwitter className='icons' />
                    <BiLogoGooglePlus className='icons' />
                    <IoLogoDribbble className='icons' />
                    <FaWifi className='icons' />
                    <TiSocialLinkedin className='icons' />
                </Social>
            </Col>
            <Col span={10} className='contact'>
                <Info>
                    <HiMail className='icon' />
                    <span>E-mail : demo@example.com</span>
                </Info>
                <Info>
                    <FaPhoneAlt className='phone' />
                    <span>Téléphone : 0123456789</span>
                </Info>
                <Info>
                    <span>FR</span>
                    <BiChevronDown className='icon' />
                </Info>
            </Col>
        </Row>
    </Tete>
  )
}

export default Infos