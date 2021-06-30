import {Col, Button, Radio, Form, Input, Card, List, Avatar, Pagination, Skeleton} from "antd";
import {UserOutlined, LockOutlined, SearchOutlined, BarsOutlined, TableOutlined,} from '@ant-design/icons';
import "../styles/Timelapse.css";
import React, {Suspense, useState} from 'react';
import LazyLoad from 'react-lazyload';
import TimelapseItemPlaceHolder from "../placeholder/TimelapseItemPlaceHolder";
import TimelapseItem from "../components/TimelapseItem";



const dataTest: Array<any> = Array.apply([], Array(200)).map((a, index) => {
    return {
        index: index,
        title: 'Title ' + index,
        image: 'https://cdn-sc.autotimelapse.com/files/image/cache/data/space/3D-phoenix%20h%E1%BA%A1%20long-354x236-rc_top.png',
    };
});


const Timelapse = () => {
    const [form] = Form.useForm();
    const [minItemSize, setMimItemSize] = useState(0);
    const [maxItemSize, setMaxItemSize] = useState(15);

    const onChangePage = (page: number) => {
        if (page <= 1) {
            setMimItemSize(0);
            setMaxItemSize(15);
        } else {
            setMimItemSize((page - 1) * 15);
            setMaxItemSize(page * 15);
        }
    }


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
                    grid={{
                        gutter: 16, xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 4,
                        xxl: 4
                    }}
                    dataSource={dataTest.slice(minItemSize, maxItemSize)}
                    renderItem={item => (
                        <List.Item>
                            <LazyLoad key={item.index} height={200} offset={[-200, 0]}
                                      placeholder={<TimelapseItemPlaceHolder />} debounce={500}>
                                <TimelapseItem title={item.title} image={item.image}/>
                            </LazyLoad>

                            {/*<Card title={item.title}>Card content</Card>*/}
                        </List.Item>
                    )}
                />
            </div>
            <div className={"pagination-timelapse"}>
                <Pagination showQuickJumper total={dataTest.length} defaultCurrent={1}
                            defaultPageSize={15}
                            onChange={onChangePage}/>
            </div>
        </div>
    );
}





export default Timelapse;