/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const NotesList = ({notes, deleteNote, toggleNote}) => {
  return (
    <>
        {notes.map((note) => {
        return (
            // "card col-sm-3 px-3"
          <div key={note.id} className={`card col-sm-3 px-3 ${note.completed === true ? "note-completed" : ""}`} >
            <div className="py-3 d-flex align-items-center justify-content-between">
              <div className="note-type">
                <p className="m-0">{note.type}</p>
              </div>
              
              <div className="w-25 d-flex align-items-center justify-content-between ">
                <input type="checkbox"
                checked={note.completed}
                onChange={(e) => toggleNote(note.id, e.target.checked)}/>

                <a className=""><MdModeEdit color="6E6E6E" /> </a>
                <a className="delete-icon" onClick={() => deleteNote(note.id)}><BsFillTrashFill color="6E6E6E" /></a>
              </div>
            </div>

            <div className="card-body p-0">
              <h5 className="card-title fw-bold">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="text-end fw-light">04-02-2025</p>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default NotesList