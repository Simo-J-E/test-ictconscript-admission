import { format } from 'date-fns'
import MiniMap from './MiniMap'  

function EntryList({ entries }) {
  return (
    <ul>
      {entries.map(e => (
        <li key={e.id} style={{ marginBottom: 20 }}>
          <strong>{e.title}</strong> <em>{format(new Date(e.isoTime), 'yyyy-MM-dd HH:mm')}</em><br />
          {e.body}<br />
          {e.lat && e.lon && (
            <>
              <small>Location: {e.lat}, {e.lon}</small>
              <MiniMap lat={e.lat} lon={e.lon} />
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default EntryList
