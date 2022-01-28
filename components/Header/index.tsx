import React, { ReactElement } from 'react';
import { Col, Layout, Menu, Row } from 'antd';
const { Header: Aheader } = Layout 
import Styles from './Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header (): ReactElement {
    const router = useRouter()

    const changeRouterHandler = (e: any) => {
        console.log(e.key);

        switch(e.key) {
            case 'home' :
                router.push('/')
                break
            case 'list' :
                router.push('list')    
                break
            default :
                router.push('/')    
        }
        
    }

    return (
        <Aheader className={Styles.fixedHeader}>
            <Row justify='space-between'>
                <Col>
                    <Link href='/' ><h3 className={Styles.logo}>Kailite</h3></Link> 
                </Col>
                <Col>
                    <Menu onClick={changeRouterHandler} mode="horizontal" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">首页</Menu.Item>
                        <Menu.Item key="list">博客</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Aheader>
    )
}

export default Header