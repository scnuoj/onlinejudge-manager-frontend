import * as React from 'react'
import { autobind } from 'core-decorators'
import { Table, Icon } from 'antd'
import { observer, inject } from 'mobx-react'
import { ProblemStore } from '../../stores'
import { RouteComponentProps } from 'react-router'

interface ITableColumn {
  title: string
  dataIndex?: string
  key: string
  render?: (...args: any[]) => JSX.Element
}
interface IProblemsStateData {
  key: string
  name: string
  age: number
  address: string
}
interface IProblemsInterface {
  columns: ITableColumn[]
  data: IProblemsStateData[]
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
interface IProblemsProps extends RouteComponentProps<Problems> {
  problemStore: ProblemStore
}

@inject('problemStore')
@observer
@autobind
export default class Problems extends React.Component<IProblemsProps, IProblemsInterface> {

  public state: IProblemsInterface = {
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
          <a href="#">Action 一 {record.name}</a>
          <span className="ant-divider" />
          <a href="#">Delete</a>
          <span className="ant-divider" />
          <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
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
      <Table columns={this.state.columns} dataSource={this.props.problemStore.problems} />
    )
  }
}
