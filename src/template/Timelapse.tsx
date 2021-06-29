import {Col, Button, Radio, Form, Input, Card, List,Avatar} from "antd";
import {UserOutlined, LockOutlined, SearchOutlined, BarsOutlined, TableOutlined} from '@ant-design/icons';
import "../styles/Timelapse.css";
import React, { Suspense } from 'react';

const { Meta } = Card;

const data = [
    {
        title: 'Title 1',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 2',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 3',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 4',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 5',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },
    {
        title: 'Title 6',
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    },

];


const Timelapse = () => {
    const [form] = Form.useForm();


    return (
        <div className={"container-timelapse tl"}>
            <div className={"card-filter cf-3"}>
                <div className={"card-filter card-filter-form"}>
                    <Col span={10} sm={8}>
                        <Form form={form} name={"horizontal-filter"} layout={"inline"}>
                            <Form.Item
                                name="filter"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input prefix={<SearchOutlined className="site-form-item-icon"/>}/>
                            </Form.Item>
                            <Form.Item shouldUpdate>
                                {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            !!form.getFieldsError().filter(({errors}) => errors.length).length
                                        }
                                    >
                                        Tìm kiếm
                                    </Button>
                                )}
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={5} sm={8}>
                        <div className={"btn-group"}>
                            <Radio.Group value={"large"} onChange={() => {
                            }}>
                                <Radio.Button value="large"><BarsOutlined/></Radio.Button>
                                <Radio.Button value="default"><TableOutlined/></Radio.Button>
                            </Radio.Group>
                        </div>
                    </Col>
                </div>
            </div>
            <div className={"list-timelapse"}>
                <List
                    grid={{gutter: 16, column: 4}}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <TimelapseItem  title={item.title} image={item.image}/>
                            {/*<Card title={item.title}>Card content</Card>*/}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

const TimelapseItem = (props:any) => (
    <Card
        cover={
            <img

                src={props.image}
            />
        }
    >

        <Meta
            avatar={<Avatar src={props.image} />}
            title="Card title"
            description="This is the description"
        />

    </Card>
);

export default Timelapse;