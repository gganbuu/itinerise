import React from 'react'
import { useLoaderData, Link } from 'react-router'

const TripPage = () => {
  const trip = useLoaderData();
  return (
    <div>
      <Link to="/">Back to My Trips</Link>
      <h1>{trip.name}</h1>
      <p>{trip.destination}</p>
      <p>{trip.startDate} - {trip.endDate}</p>
    </div>
  )
}

export default TripPage