import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./assets/components/Search.jsx";

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

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  function searchHandler(term) {
    setSearchText(term);
  }

  return (
    <>
      <Search searchHandler={searchHandler} />
      <div className="container">
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={handleAddNote}
          handleDelete={deleteNote}
        />
      </div>
    </>
  );
}

export default App;
