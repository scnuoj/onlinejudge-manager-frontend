import { observable, toJS, action, computed } from 'mobx'
import axios from 'axios'
import { IProblem, IProblemCreateForm } from './interface'

class ProblemStore {
  @observable problemList: IProblem[] = []
  @observable form: IProblemCreateForm = {
    title: '123123',
    sample: '',
    sampleInput: '',
    sampleOutput: '',
    description: '',
    inputData: '',
    outputData: ''
  }
  @observable problemCount: number = 0

  @computed get problems () {
    let i = 0
    return this.problemList.map(problem => {
      return {
        ...problem,
        key: (i++).toString()
      }
    })
  }

  @action setProblemList (data: IProblem[]) {
    this.problemList = data
  }

  @action setProblemCount (count: number) {
    this.problemCount = count
  }

  toJS () {
    return this.problemList.map(problem => toJS(problem))
  }

  async createProblem () {
    console.log(this.form)
    await axios.post('http://localhost:8080/v1/problems', this.form)
  }

  async fetchProblemList () {
    const res = await axios.get('http://localhost:8080/v1/problems', {
      params: {
        limit: 10,
        offset: 0,
        order: 'asc',
        sortby: 'id'
      }
    })
    this.setProblemList(res.data.data[0])
    this.setProblemCount(res.data.data[1])
  }
}

const problemStore = new ProblemStore()

export {
  ProblemStore,
  problemStore
}
