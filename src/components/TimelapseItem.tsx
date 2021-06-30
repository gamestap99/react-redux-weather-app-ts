import {Avatar, Card,Image,Skeleton} from "antd";
import React from "react";
import {ImageWidget} from "../widgets/ImageWidget";
const {Meta} = Card;

const TimelapseItem = (props: any) => (
    <Card
        // cover={
        //     <ImageWidget src={props.image} alt={props.title}/>
        // }
    >
        <Image
            width={200}
            src={props.image}
            placeholder={
                <Skeleton.Image/>
                // <Image
                //     preview={false}
                //     src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                //     width={200}
                // />
            }
        />
        <Meta
            avatar={<Avatar src={props.image}/>}
            title={props.title}
            description="This is the description"
        />

    </Card>
);

export default TimelapseItem;