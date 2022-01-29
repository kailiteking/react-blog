import React from 'react';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Head from 'next/head';

type listData = {
  href: string,
  title: string,
  description: string,
  content: string
}


const listData: listData[] = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: `/details`,
    title: `ant design part ${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function Home() {

    return (
      <>
        <Head>
          <title>React Blog</title>
        </Head>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          pagination={{
            pageSize: 5,
          }}
          renderItem={item => (
            <List.Item
              style={{ backgroundColor: '#fff' }}
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}/>
      </>)
}

export default Home