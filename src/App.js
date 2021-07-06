import Map from './components/Map'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Loader from './components/Loader'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)

      const result = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

      const { events } = await result.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  return (
    <div>
      <Header/>
      {!loading ? <Map eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
