import { useEffect, useState } from 'react'
import EntryList from './EntryList'
import NewEntryForm from './NewEntryForm'
import data from './sample-data/data.json' 
import './App.css'

function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const sorted = data.sort((a, b) => new Date(b.isoTime) - new Date(a.isoTime))
    setEntries(sorted)
  }, [])

  const addEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
      isoTime: new Date().toISOString()
    }
    setEntries([newEntry, ...entries])
  }

  return (
    <div>
      <h1>Unit Logbook</h1>
      <div className="container">
        <NewEntryForm onAdd={addEntry} />
        <EntryList entries={entries} />
      </div>
    </div>
  )
}

export default App
