import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import NoteTemplate from "./NoteTemplate";
import Add from "../add.png";

export default function AddForm({ handleAdd, loadData }) {
  const [form, setForm] = useState({ content: "" });

  const handleChange = (evt) => {
    const { value } = evt.target;
    setForm({ content: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const note = new NoteTemplate(shortid.generate(), form.content);
    handleAdd(note);
    setForm({ content: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newNote">Stick a note</label>

          <div className="new-note">
            <textarea
              id="newNote"
              name="newNote"
              value={form.content}
              onChange={handleChange}
              style={{ minHeight: "120px" }}
            />
            <button type="submit" style={{ maxHeight: "40px", width: "40px" }}>
              <img src={Add} alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  handleAdd: PropTypes.func,
};

AddForm.defaultProps = {
  handleAdd: () => {},
};
