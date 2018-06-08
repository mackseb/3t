import React from "react";
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class Navigation extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

        <Menu.Item key="chatbot">
          <Icon type="message" />chatbot
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />add ons
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />settings</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="documentation">
          <Icon type="book" />documentation
        </Menu.Item>
        <Menu.Item key="api">
          <Icon type="api" />api
        </Menu.Item>
      </Menu>
    );
  }
}

