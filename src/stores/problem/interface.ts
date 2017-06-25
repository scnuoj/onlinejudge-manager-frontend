export interface IProblem {
  id: number
  title: string
  description: string
  lang: string
  input: string
  output: string
  percent: number
  sampleInput: string
  sampleOutput: string
  inputData: string
  outputData: string
  submitCount: number
  passCount: number
  maxCpuTime: number
  maxRealTime: number
  maxMemory: number
  maxProcessNumber: number
}

export interface IProblemCreateForm {
  title: string
  description: string
  sampleInput: string
  sampleOutput: string
  sample: string
  inputData: string
  outputData: string
}
