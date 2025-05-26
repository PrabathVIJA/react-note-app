import { useState } from "react";
import { nanoid } from "nanoid";
import { MdDeleteForever } from "react-icons/md";
import "./App.css";

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
      <MdDeleteForever className="delete-icon" size="1.7em" />
    </>
  );
}

export default App;
