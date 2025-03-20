/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const NotesList = ({ notes, deleteNote, toggleNote }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          // "card col-sm-3 px-3"
          <div
            key={note.id}
            className={`card px-3 mb-1 ${
              note.completed === true ? "note-completed" : ""
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

                <a
                  className="edit-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#editNoteModal"
                >
                  <MdModeEdit color="6E6E6E" />
                </a>

                <a className="delete-icon" onClick={() => deleteNote(note.id)}>
                  <BsFillTrashFill color="6E6E6E" />
                </a>
              </div>
            </div>

            <div className="card-body p-0">
              <h5 className="card-title fw-bold">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="text-end fw-light">{note.date}</p>
            </div>

            <div>
              {/* 📝 Edit Modal */}
              <div className="modal fade" id="editNoteModal" tabIndex="-1">
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
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control"
                            required
                          ></textarea>
                        </div>

                        <select className=" form-select">
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
                            Update Note
                          </button>
                        </div>
                      </form>
                    </div>
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
