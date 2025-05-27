import { MdDeleteForever } from "react-icons/md";
function Note({ note }) {
  return (
    <>
      <div className="note-container">
        <p>{note.text}</p>
        <div className="note-footer">
          <p>{note.date}</p>
          <MdDeleteForever className="delete-icon" size="1.7em" />
        </div>
      </div>
    </>
  );
}

export default Note;
