import Note from "./Note";
import AddNote from "./AddNote";
export default function NotesList({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote />
    </>
  );
}
