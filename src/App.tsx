import * as React from 'react'
import './App.css'
import { autobind } from 'core-decorators'
import { Menu, Icon } from 'antd'
import { observer } from 'mobx-react'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

interface ITestInterface {
  current: string
}

@autobind
@observer
export default class App extends React.Component<any, ITestInterface> {

  public state: ITestInterface = {
    current: 'home'
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
        <Menu.Item key="home">
          <Icon type="home"/>首页
        </Menu.Item>
        <Menu.Item key="database">
          <Icon type="database"/>题库
        </Menu.Item>
        <SubMenu title={<span><Icon type="solution" />提交</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="appstore">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">进入网站</a>
        </Menu.Item>
      </Menu>
    )
  }
}
