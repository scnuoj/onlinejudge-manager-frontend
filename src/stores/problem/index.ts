import { observable, reaction, toJS } from 'mobx'
import axios from 'axios'
import { IProblem } from './interface'

class ProblemStore {
  @observable problems: IProblem[] = []

  toJS () {
    return this.problems.map(problem => toJS(problem))
  }

  fetchProblems () {
    reaction (
      () => this.toJS(),
      problems => axios.get('https://oj.ruiming.me/v1/problems')
    )
  }
}

const problemStore = new ProblemStore()

export {
  ProblemStore,
  problemStore
}
