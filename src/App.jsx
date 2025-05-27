import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import NotesList from "./assets/components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "26/05/2025",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "26/05/2025",
    },
  ]);

  function handleAddNote(text) {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const updatedNote = [...notes, newNote];
    setNotes(updatedNote);
  }

  function deleteNote(id) {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }

  return (
    <>
      <div className="container">
        <NotesList
          notes={notes}
          handleAddNote={handleAddNote}
          handleDelete={deleteNote}
        />
      </div>
    </>
  );
}

export default App;
