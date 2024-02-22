import logo from './logo.svg';
import './App.css';
import Form from './komponent/Form';
import { useState, useEffect, useRef } from 'react';
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

  // const [notes, setNotes] = useState([
  //   { done: false, description: 'Ecrire une note' },
  //   { done: true, description: 'Stocker la note \n et l\'afficher' },
  //   { done: true, description: 'supprimer la note' },
  // ]);

  const [notes, setNotes] = useState([]);

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

  const [install, setInstall] = useState(false);

  const deferredPrompt = useRef(null);
  
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
      console.log("Change prompt", deferredPrompt)
      setInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);
  const handleInstall = () => {
    deferredPrompt.current.prompt();
    deferredPrompt.current.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        alert("Merci d'avoir installé l'application !")
      } else {
        console.log('L\'utilisateur a refusé l\'installation');
      }
      deferredPrompt.current = null;
    });
    setInstall(false);
  }

  return (
    <>
      {install && (
        <div className="bg-gray-300 shadow-gray-700 p-4 flex items-center">
          <div className='flex-grow text-center'>Voulez-vous installer
            l'application sur votre appareil ?</div>
          <button className="px-4 py-2 rounded text-white bg-teal-600" onClick=
            {handleInstall}>Installer</button>
        </div>
      )}
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
