const sampleData = [
  { ppn: '123123', firstName: 'John', lastName: 'Doe', dob: '1/2/1900', facility: 'CFCF' },
  { ppn: '321321', firstName: 'Jane', lastName: 'Doe', dob: '2/3/1901', facility: 'HOC' }
]

export default {
  async search ({ ppn, firstName, lastName, dob }) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => resolve(sampleData), 1000)
    })
  }
}
