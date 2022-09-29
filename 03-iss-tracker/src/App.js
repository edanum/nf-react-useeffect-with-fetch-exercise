import React, { useEffect, useState } from 'react'
import Controls from './components/Controls'
import Map from './components/Map'
import './styles.css'

const URL = 'https://api.wheretheiss.at/v1/satellites/25544'

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  })

  console.log(coords);

  async function getISSCoords() {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => setCoords(data.results));
  }

  return (
    <main>
      <Map {...coords} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  )
}
