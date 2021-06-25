import {Card,Input,Button} from "antd"
import { Row, Col } from 'antd';
import Style from "../../styles/Login.module.scss";

export const  LoginScreen = ()=> {
    return (
        <div className={Style.main} >

            <div className={Style.container}>
                <div className={Style.row}>
                    <Col md={16} lg={12} xl={10} xxl={6} >
                        <div className={Style.card}>
                            <Card className={Style.antCard} size={"default"}>
                                <div className={"card-group"}>
                                    <div className={"card-body"}>
                                        <h1>Đăng nhập</h1>
                                        <Input className={Style.antInput} placeholder={"Email"}/>

                                        <Input className={Style.antInput} placeholder={"Mật khẩu   "}/>
                                        <Button className={Style.antBtnPrimary} type="primary" block >
                                            Đăng nhập
                                        </Button>
                                    </div>
                                </div>

                            </Card>

                        </div>
                    </Col>
                </div>

            </div>



        </div>
    )
}