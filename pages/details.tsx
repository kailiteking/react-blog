import { PageHeader, Space, Typography } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";

const { Title } = Typography
const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];

const cssBlogData = [
    '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'
    ]

class Details extends React.Component {
    
    render(): React.ReactNode {
        return (
            <Space direction="vertical">
                <PageHeader
                    className="site-page-header"
                    title={<Title style={{fontSize: '3rem', fontWeight: 'bold' }}>
                        Title here
                    </Title>}
                    breadcrumb={{ routes }}
                />
                <Typography>
                    <ReactMarkdown children={cssBlogData[0]}/>
                </Typography>
            </Space>
            
        )
    }
}

export default Details