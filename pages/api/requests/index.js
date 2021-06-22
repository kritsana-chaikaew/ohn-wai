import firebase from '../../../utils/firebase'

export function createRequest () {
  const requestRef = firebase.database().ref('Requests')
  const request = {
    amount: 100,
    filled: false
  }
  requestRef.push(request, (err) => {
    if (err) console.log(err)
  })
  return request
}

export default function handler ({ method, body }, res) {
  switch (method) {
    case 'POST':
      res.status(200).json(createRequest())
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
