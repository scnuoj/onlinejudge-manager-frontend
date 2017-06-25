import * as React from 'react'
import { autobind } from 'core-decorators'
import { Form, Input, Button } from 'antd'
import { observer, inject } from 'mobx-react'
import { ProblemStore } from '../../stores'
import { RouteComponentProps } from 'react-router'
import { IProblemCreateForm } from '../../stores/problem/interface'

interface IProblemsInterface {
  form: IProblemCreateForm
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
interface IProblemsProps extends RouteComponentProps<Problems> {
  problemStore: ProblemStore
}

@inject('problemStore')
@observer
@autobind
export default class Problems extends React.Component<IProblemsProps, IProblemsInterface> {

  componentDidMount () {
    this.props.problemStore.fetchProblemList()
  }

  render () {
    const { form, createProblem } = this.props.problemStore
    return (
      <Form onSubmit={createProblem}>
        <Form.Item label="标题">
          <Input placeholder="标题" value={form.title} />
        </Form.Item>
        <Form.Item label="描述">
          <Input type="textarea" value={form.description} placeholder="描述" autosize={{ minRows: 15, maxRows: 15 }} />
        </Form.Item>
        <Form.Item label="输入描述">
          <Input type="textarea" value={form.sampleInput} placeholder="输入描述" autosize={{ minRows: 5, maxRows: 5 }} />
        </Form.Item>
        <Form.Item label="输出描述">
          <Input type="textarea" value={form.sampleOutput} placeholder="输出描述" autosize={{ minRows: 5, maxRows: 5 }} />
        </Form.Item>
        <Form.Item label="示例">
          <Input type="textarea" value={form.sample} placeholder="示例" autosize={{ minRows: 5, maxRows: 5 }} />
        </Form.Item>
        <Form.Item label="判题输入">
          <Input type="textarea" value={form.inputData} placeholder="判题输入" autosize={{ minRows: 5, maxRows: 5 }} />
        </Form.Item>
        <Form.Item label="判题输出">
          <Input type="textarea" value={form.outputData} placeholder="判题输出" autosize={{ minRows: 5, maxRows: 5 }} />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" size="large" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
}
