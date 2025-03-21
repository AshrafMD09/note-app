/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const NotesList = ({ notes, deleteNote, toggleNote, editedNote, setEditedNote, updateNote}) => {

  const handelOnSubmitEdit = (e) => {
    e.preventDefault(); // Prevents page reload
    updateNote(editedNote); // Update note in state
    setEditedNote(null); // Clear edit state
    document.getElementById(`closeModalBtn-${editedNote.id}`).click(); // Close modal
  }

  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id}
            className={`card px-3 mb-1 ${
            note.completed ? "note-completed" : ""
            }`}
          >
            <div className="py-3 d-flex align-items-center justify-content-between">
              <div className="note-type">
                <p className={"m-0 " + "type-" + note.type}>{note.type}</p>
              </div>

              <div className="w-25 d-flex align-items-center justify-content-between ">
                <input
                  type="checkbox"
                  checked={note.completed}
                  onChange={(e) => toggleNote(note.id, e.target.checked)}
                />

                <button
                  className="edit-icon"
                  data-bs-toggle="modal"
                  data-bs-target={`#editNoteModal-${note.id}`}
                  onClick={() => setEditedNote(note)}
                >
                  <MdModeEdit color="6E6E6E" />
                </button>

                <button
                  className="delete-icon" 
                  onClick={() => deleteNote(note.id)}
                >
                  <BsFillTrashFill color="6E6E6E" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <h5 className="card-title fw-bold">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="note-date text-end fw-light">{`${note.date}`}</p>
            </div>
                          {/* 📝 Edit Modal */}
                <div className="modal fade edit-modal" id={`editNoteModal-${note.id}`} tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title fw-bold">Edit Note</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    {/* 📋 Form Inside Edit Modal */}
                    <div className="modal-body">
                      <form onSubmit={handelOnSubmitEdit}>
                        <div className="mb-3">
                          <label className="form-label">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            value={editedNote?.title}
                            onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control"
                            value={editedNote?.description}
                            onChange={(e) => setEditedNote({ ...editedNote, description: e.target.value })}
                            required
                          ></textarea>
                        </div>

                        <select 
                        className=" form-select"
                        value={editedNote?.type}
                        onChange={(e) => setEditedNote({ ...editedNote, type: e.target.value })}
                        >
                          <option value="Personal">Personal</option>
                          <option value="Home">Home</option>
                          <option value="Business">Business</option>
                        </select>

                        <div className="modal-footer">
                          <button
                            type="button"
                            id={`closeModalBtn-${note.id}`}
                            className="btn btn-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-warning">
                            Update Note
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          
        );
      })}
    </>
  );
};

export default NotesList;
