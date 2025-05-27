import { MdDeleteForever } from "react-icons/md";
function Note({ note, handleDelete }) {
  function handleNoteDelete() {
    handleDelete(note.id);
  }
  return (
    <>
      <div className="note-container">
        <p>{note.text}</p>
        <div className="note-footer">
          <p>{note.date}</p>
          <MdDeleteForever
            className="delete-icon"
            size="1.7em"
            onClick={handleNoteDelete}
          />
        </div>
      </div>
    </>
  );
}

export default Note;
