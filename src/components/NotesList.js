import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

export default function NotesList({ notes, handleRemove }) {
  console.log(handleRemove);
  return (
    <div className="note-container">
      {notes.length
        ? notes.map((note) => (
            <Note key={note.id} note={note} handleRemove={handleRemove} />
          ))
        : null}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array,
  handleRemove: PropTypes.func,
};

NotesList.defaultProps = {
  notes: [],
  handleRemove: () => {},
};
