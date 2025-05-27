import Note from "./Note";
import AddNote from "./AddNote";
export default function NotesList({ notes, handleAddNote, handleDelete }) {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDelete={handleDelete} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </>
  );
}
