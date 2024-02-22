import logo from './logo.svg';
import './App.css';
import Form from './komponent/Form';
import { useState, useEffect } from 'react';
import List from './komponent/List';

function App() {

  const addNote = (text) => {
    const tmpNotes = [...notes];
    tmpNotes.push({ done: false, description: text });
    setNotes(tmpNotes);
  }

  const delNote = (index) => {
    const tmpNotes = [...notes];
    tmpNotes.splice(index, 1);
    setNotes(tmpNotes);
  }

  const [notes, setNotes] = useState([
    { done: false, description: 'Ecrire une note' },
    { done: true, description: 'Stocker la note \n et l\'afficher' },
    { done: true, description: 'supprimer la note' },
  ]);

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    console.log(loaded)
    if (loaded) localStorage.setItem('notes', JSON.stringify(notes));
  })

  useEffect(() => {
    console.log("Chargement")
    const data = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(data);
    setLoaded(true);
  }, [])

  return (
    <>
    <h1>KeepPeek</h1>
    <Form addNote={addNote} />
    <List notes={notes}
      addNote={addNote}
      delNote={delNote}
    />
    <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;
