import React from "react";
import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';

const { TextArea } = Input;

export class Chatinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          input: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handlePressEnter = this.handlePressEnter.bind(this);
    
      }
      
      handleChange(event) {
        this.setState({input: event.target.value});
      }

      handlePressEnter() {
        this.props.addMessage('Anonymous', this.state.input);
        this.setState({input: ""});
        
        fetch('https://www.httpbin.org/uuid')
  .then(response => response.json())
  .then(json => this.props.addMessage('c-3po', json.uuid))
        
      }

    render() {
      return (
        <div>
        <Row>

            <Col span={24}><TextArea autosize="true" value={this.state.input} onChange={(e) => this.handleChange(e)} onPressEnter={this.handlePressEnter}/></Col>

        </Row >
        <Row>
            <Col span={18}><Button type="primary" onClick={() => this.handlePressEnter()}>submit</Button></Col>
            <Col span={3}>
            </Col>
        </Row>


    </div>
      );
    }
  } 