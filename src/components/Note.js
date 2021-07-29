import React from "react";
import PropTypes from "prop-types";
import Delete from "../delete.png";

export default function Note({ note, handleRemove }) {
  return (
    <div className="note">
      <div className="note-content">{note.content}</div>
      <button className="btn-close" onClick={() => handleRemove(note.id)}>
        <img className="img" src={Delete} alt="d" />
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object,
  handleRemove: PropTypes.func,
};

Note.defaultProps = {
  note: {},
  handleRemove: () => {},
};
