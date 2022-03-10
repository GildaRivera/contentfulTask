import './App.css';

import EntryComponent from './EntryComponent/EntryComponent';
import EntryFormComponent from './EntryFormComponent/EntryFormComponent';
import client from './contentful/connect';
import { useEffect, useState } from 'react'
const array = []

function App() {
  const [entries, setEntries] = useState(array)

  const addNewEntry = (entry) => {
    setEntries((prev)=>{
      const newEntries = [...prev, entry]    
      return newEntries
    })
  }
  //Use efect to fetch the entries
  useEffect(()=>{
    client.getEntries().then( (entries)=> {
      entries.items.forEach((entry) =>{
      entry.fields["id"]=entry.sys.id
       addNewEntry(entry.fields)
      });
    });
  }, [])


  return (
    <div>
      <EntryFormComponent postNewEntry={addNewEntry} />
      {
        entries.map(element => (
          <EntryComponent title={element.title} content={element.content} author={element.author} key={element.id}/>
        ))
      }
    </div>
  )
}

export default App;
