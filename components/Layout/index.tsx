import React from "react";
import { Avatar, Card, Col, Layout, List, Row, Space } from 'antd';
import Header from "../Header";
const { Content, Sider } = Layout;
const { Meta } = Card;

const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];

function BlogLayout({children}: any): React.ReactElement {
    return (
        <Layout>
            <Header />
            <Layout style={{marginTop: '80px'}}>
                <Row style={{ width: '100%'}} justify="center" gutter={32}>
                    <Col span={14}>
                        <Content>{children}</Content>
                    </Col>
                    <Col span={5}>
                        <Sider 
                            style={{backgroundColor:'transparent'}}
                            width={'100%'}>
                            <Space 
                                style={{ width: '100%' }}
                                direction="vertical"
                                size='large'>
                                <Card
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    }
                                >
                                    <Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title="Kailite"
                                    description="This is the description"
                                    />
                                </Card>

                                <List
                                    itemLayout="vertical"
                                    dataSource={data}
                                    renderItem={item => (
                                    <List.Item>
                                        <Card title={item.title}>Card content</Card>
                                    </List.Item>
                                    )}
                                />
                            </Space>
                        </Sider>
                    </Col>
                </Row>            
            </Layout> 

        </Layout>
    )
}

export default BlogLayout