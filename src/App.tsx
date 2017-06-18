import * as React from 'react'
import './App.css'
import { autobind } from 'core-decorators'
import { Menu, Icon, Layout } from 'antd'
import { observer } from 'mobx-react'

const logo = require('./logo.svg')

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

interface ITestInterface {
  current: string
  collapsed: boolean
  mode: string
}

@autobind
@observer
export default class App extends React.Component<{ children: JSX.Element[] }, ITestInterface> {

  public state: ITestInterface = {
    current: 'home',
    collapsed: false,
    mode: 'inline'
  }

  public handleClick (e: any) {
    console.log('click', e)
    this.setState({
      current: e.key
    })
  }

  public onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    })
  }

  render () {
    return (
      <Layout className="App">
        <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} className="App-logo" />
          </div>
          <Menu theme="dark" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="vertical" defaultSelectedKeys={['home']}>
            <Menu.Item key="home">
              <a href="#"><Icon type="home"/>首页</a>
            </Menu.Item>
            <Menu.Item key="database">
              <a href="#/problems"><Icon type="database"/>题库</a>
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
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer"><Icon type="compass"/>题库</a>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{ margin: '0 16px' }}>
            {this.props.children}
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            OnlineJudge @ SCNUOJ
          </Layout.Footer>
        </Layout>
      </Layout>
    )
  }
}
