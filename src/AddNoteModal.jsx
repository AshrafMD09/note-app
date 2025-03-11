/* eslint-disable react/prop-types */
import { useState } from "react";

const AddNoteModal = ({addNote}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    addNote({
        id: crypto.randomUUID(),
        title,
        description,
        type,
        completed: false
    });
    setTitle("");
    setDescription("");
    setType(""); 

    document.getElementById("closeModalBtn").click(); // Close modal after adding
  };

  return (
    <div>
      {/* 🔘 Add Task Button */}
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addNoteModal"
      >
        Add Note
      </button>

      {/* 📝 Modal */}
      <div className="modal fade" id="addNoteModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Add New Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* 📋 Form Inside Modal */}
            <div className="modal-body">
              <form onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                <select
                  className=" form-select"
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Select a type</option>
                  <option value="Personal">Personal</option>
                  <option value="Home">Home</option>
                  <option value="Business">Business</option>
                </select>

                <div className="modal-footer">
                  <button
                    type="button"
                    id="closeModalBtn"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-success">
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
