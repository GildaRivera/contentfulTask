import './App.css';

import EntryComponent from './EntryComponent/EntryComponent';
import EntryFormComponent from './EntryFormComponent/EntryFormComponent';

import { useState } from 'react'
const array = [
  { title: "Blog 1", content:"Contenido 1", author:"Javier Cabrera"},
  { title: "Blog 2", content:"Contenido 2", author:"Javier Cabrera"},
  { title: "Blog 3", content:"Contenido 3", author:"Javier Cabrera"},
  { title: "Blog 4", content:"Contenido 4", author:"Javier Cabrera"},
  { title: "Blog 5", content:"Contenido 5", author:"Javier Cabrera"},
  { title: "Blog 6", content:"Contenido 6", author:"Javier Cabrera"},
]

function App() {
  const [entries, setEntries] = useState(array)

  const addNewEntry = (entry) => {
    const newEntries = [...entries, entry]
    setEntries(newEntries)
  }

  return (
    <div>
      <EntryFormComponent postNewEntry={addNewEntry} />
      {
        entries.map(element => (
          <EntryComponent title={element.title} content={element.content} author={element.author} />
        ))
      }
    </div>
  )
}

export default App;
