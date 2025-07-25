import { format } from 'date-fns'

function EntryList({ entries }) {
  return (
    <ul>
      {entries.map(e => (
        <li key={e.id} style={{ marginBottom: 20 }}>
          <strong>{e.title}</strong> <em>{format(new Date(e.isoTime), 'yyyy-MM-dd HH:mm')}</em><br />
          {e.body}<br />
          {e.lat && e.lon && <small>Location: {e.lat}, {e.lon}</small>}
        </li>
      ))}
    </ul>
  )
}

export default EntryList
