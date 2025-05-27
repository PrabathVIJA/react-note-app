import { useState } from "react";
function AddNote() {
  const [noteText, setNoteText] = useState("");

  function handleChange(e) {
    setNoteText(e.target.value);
  }
  return (
    <div className="note-new">
      <textarea
        rows="5"
        cols="30"
        placeholder="Please enter the text.."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <p>
          <small>100</small>
        </p>
        <button>Save</button>
      </div>
    </div>
  );
}

export default AddNote;
