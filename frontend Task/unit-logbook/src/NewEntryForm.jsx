import { useState } from 'react'

function NewEntryForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      title,
      body,
      lat: lat ? parseFloat(lat) : null,
      lon: lon ? parseFloat(lon) : null
    })
    setTitle('')
    setBody('')
    setLat('')
    setLon('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required /><br />
      <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} required /><br />
      <input placeholder="Latitude (optional)" value={lat} onChange={e => setLat(e.target.value)} /><br />
      <input placeholder="Longitude (optional)" value={lon} onChange={e => setLon(e.target.value)} /><br />
      <button type="submit">Add Entry</button>
    </form>
  )
}

export default NewEntryForm
