import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import firebase from 'firebase/app'
import 'firebase/database'

import { createOffer } from './api/offers'
import { createRequest } from './api/requests'

export default function Index () {
  const [offers, setOffers] = useState([])
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const offerRef = firebase.database().ref('Offers')
    offerRef.on('value', (snapshot) => {
      const offers = snapshot.val()
      const newOfferList = []
      for (const id in offers) {
        newOfferList.push({ id, ...offers[id] })
      }
      setOffers(newOfferList)
    })
  }, [])

  useEffect(() => {
    const requestRef = firebase.database().ref('Requests')
    requestRef.on('value', (snapshot) => {
      const requests = snapshot.val()
      const newRequestList = []
      for (const id in requests) {
        newRequestList.push({ id, ...requests[id] })
      }
      setRequests(newRequestList)
    })
  }, [])

  return (
    <div>
      <Head>
        <title>โอนไว</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button>
          <Link href="/profile">โปรไฟล์</Link>
        </button>
        <button onClick={createOffer}>ถอนเงินสด</button>
        <button onClick={createRequest}>ฝากเข้าบัญชี</button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>amount</th>
              <th>filled</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, id) => {
              return (
                <tr key={id}>
                  <td>{offer.id}</td>
                  <td>{offer.amount}</td>
                  <td>{JSON.stringify(offer.filled)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>amount</th>
              <th>filled</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, id) => {
              return (
                <tr key={id}>
                  <td>{request.id}</td>
                  <td>{request.amount}</td>
                  <td>{JSON.stringify(request.filled)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>

      <footer></footer>
    </div>
  )
}
