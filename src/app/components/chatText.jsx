import React from "react";
import { Card, Icon, Avatar } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;

const c3po = require('../images/c3po.png')
const anonym = require('../images/anonymous.png')

export const Chattext = (props) => {

    if (props.message.user === 'c-3po') {
        return (
            <div align="right">
                <br />
                <Row >
                    
                    <Col span={22}><Card
                        style={{ width: 300, color: "blue" }}
                        hoverable="true">
                        <Meta title={props.message.user}
                        />{props.message.text}
                    </Card></Col>
                    <Col span={2}><Avatar size="large" src={c3po} /></Col>
                </Row>


                <br />
            </div>
        );
    } else {
        return (
            <div align="left">
                <br />
                <Row >
                    <Col span={2}><Avatar size="large" src={anonym} /></Col>
                    <Col span={22}><Card
                        style={{ width: 300, color: "#BD26FF" }}
                        hoverable="true">
                        <Meta title={props.message.user}
                        />{props.message.text}
                    </Card></Col>
                   
                </Row>


                <br />
            </div>
        );
    }



};