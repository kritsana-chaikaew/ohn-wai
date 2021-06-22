import firebase from '../../../utils/firebase'

export function createOffer () {
  const offerRef = firebase.database().ref('Offers')
  const offer = {
    amount: 100,
    filled: false
  }
  offerRef.push(offer, (err) => {
    if (err) console.log(err)
  })
  return offer
}

export default function handler ({ method, body }, res) {
  switch (method) {
    case 'POST':
      res.status(200).json(createOffer())
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
