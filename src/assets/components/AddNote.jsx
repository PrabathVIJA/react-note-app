import { useState } from "react";
function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 100;

  function handleChange(e) {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
      return;
    }
    console.log(e.target.value.length);
  }

  function handleSave() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("Please enter at least one character");
    }
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
          <small>{characterLimit - noteText.length} characters remaining</small>
        </p>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default AddNote;
