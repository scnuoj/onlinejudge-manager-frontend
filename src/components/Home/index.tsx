import * as React from 'react'
import { autobind } from 'core-decorators'
import { Table, Icon, Layout } from 'antd'
import { observer, inject } from 'mobx-react'
import { ProblemStore } from '../../stores'
import { RouteComponentProps } from 'react-router'

interface ITableColumn {
  title: string
  dataIndex?: string
  key: string
  render?: (...args: any[]) => JSX.Element
}
interface IHomeStateData {
  key: string
  name: string
  age: number
  address: string
}
interface IHomeInterface {
  columns: ITableColumn[]
  data: IHomeStateData[]
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
interface IHomeProps extends RouteComponentProps<Home> {
  problemStore: ProblemStore
}

@inject('problemStore')
@observer
@autobind
export default class Home extends React.Component<IHomeProps, IHomeInterface> {

  public state: IHomeInterface = {
    columns: [{
      title: '题目 ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '通过次数',
      dataIndex: 'passCount',
      key: 'passCount',
    }, {
      title: '提交次数',
      dataIndex: 'submitCount',
      key: 'submitCount',
    },  {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#"><Icon type="edit" /> 编辑</a>
          <span className="ant-divider" />
          <a href="#"><Icon type="delete" /> 删除</a>
          <span className="ant-divider" />
        </span>
      ),
    }],
    data: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }]
  }

  componentDidMount () {
    this.props.problemStore.fetchProblemList()
  }

  render () {
    return (
      <Layout>
        <Layout.Content>
          <Table columns={this.state.columns} dataSource={this.props.problemStore.problems} />
        </Layout.Content>
      </Layout>
    )
  }
}
