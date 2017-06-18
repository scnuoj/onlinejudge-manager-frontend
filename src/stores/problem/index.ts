import { observable, toJS, action, computed } from 'mobx'
import axios from 'axios'
import { IProblem } from './interface'

class ProblemStore {
  @observable problemList: IProblem[] = []
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

  async fetchProblemList () {
    const res = await axios.get('http://localhost:8080/v1/problems', {
      params: {
        limit: 10,
        offset: 0,
        order: 'asc',
        sortby: 'id'
      }
    })
    this.setProblemList(res.data.data.rows)
    this.setProblemCount(res.data.data.count)
  }
}

const problemStore = new ProblemStore()

export {
  ProblemStore,
  problemStore
}
