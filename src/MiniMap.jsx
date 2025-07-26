import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function MiniMap({ lat, lon }) {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!lat || !lon) return


    if (!mapRef.current) {
      mapRef.current = L.map(`mini-map-${lat}-${lon}`, {
        center: [lat, lon],
        zoom: 13,
        scrollWheelZoom: false,
        dragging: false,
        zoomControl: false,
      })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current)
      L.marker([lat, lon]).addTo(mapRef.current)
    }
  }, [lat, lon])

  return (
    <div
      id={`mini-map-${lat}-${lon}`}
      style={{ width: '200px', height: '150px', marginTop: '10px' }}
    ></div>
  )
}
