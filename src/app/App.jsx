import React from "react";

// Style
import { Row, Col } from 'antd';
import './App.css';

// Containers
import { Navigation } from "./containers/Navigation";
import Chat from "./containers/Chat";

export default  class App extends React.Component {
    render() {
        
        return (

            <div>
                <Row >
                    <Col span={4}></Col>
                    <Col span={14}><Navigation /></Col>
                    <Col span={6}></Col>
                </Row>
    
                <Row>
                    <Col span={4}></Col>
                    <Col span={14}>
                        <Chat/>
                    </Col>
                    <Col span={6}></Col>
                </Row>

                <Row>
                    <Col span={4}></Col>
                    <Col span={14}></Col>
                    <Col span={6}></Col>
                </Row>
            </div>


        );
    }
}

// <img src={require('./images/Robot.png')} alt="" align="left" />