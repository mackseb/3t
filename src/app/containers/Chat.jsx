import React from "react";
import { connect } from "react-redux";

import { Chatinput } from "../components/chatInput";
import { Chattext } from "../components/chatText";

// Actions
import { addMessage } from "../actions/conversationActions";
import { Modal, Button } from 'antd';

export class Chat extends React.Component {

  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
 

  render() {
    return (
      <div align="right">
        <br/>
        <br/>
        <Button type="primary" onClick={this.showModal}>Open Chatbot</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{ top: 20}}
        >
          <p>Some contents...</p>
          <p>{this.props.messages.map((_,index) =>
        <Chattext key={index} message={this.props.messages[index]}/>
      )}</p>
          <p> <Chatinput addMessage={this.props.addMessage}/></p>
        </Modal>
      </div>
    );
  }
  
} 

const mapStateToProps = (state) => {
  return {
      messages: state.conversationReducer.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addMessage: (user,text) => {
          dispatch(addMessage(user,text));
      }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Chat);
