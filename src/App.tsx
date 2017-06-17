import * as React from 'react'
import './App.css'
import { autobind } from 'core-decorators'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

interface ITestInterface {
  current: string
}

@autobind
class App extends React.Component<{}, ITestInterface> {

  public state: ITestInterface

  constructor (props: {}) {
    super(props)
    this.state = {
      current: 'mail'
    }
  }

  handleClick (e: any) {
    console.log('click', e)
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled="true">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navagation Four - Link</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default App
