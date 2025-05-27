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

  return (
    <>
      <div className="container">
        <NotesList notes={notes} />
      </div>
    </>
  );
}

export default App;
