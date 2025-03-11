import { useEffect, useState } from "react";
import AddNoteModal from "./AddNoteModal";
import NotesList from "./NotesList";

function App() {
  const filterList = ["All Notes","Personal","Home","Business"];
  const [notes, setNotes] = useState([
    {
      id: 11,
      title: "Going out",
      description: "having fun with the friends",
      type: "Home",
      completed: false,
    },
  ]);

  useEffect(() => {
    console.log(notes);
  });

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => id !== note.id));
  };

  const toggleNote = (id, completed) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, completed } : note))
    );
  };

  return (
    <>
      <div className="search-header py-2">
        <div className="w-75 d-flex justify-content-around mx-auto">
          <input
            className="form-control w-75"
            type="text"
            placeholder="Search"
          />
          <AddNoteModal addNote={addNote} />
        </div>
      </div>

      <div className="container-md ">
        <div className="mb-5 mt-4">
          <div className="text-left py-3">
            <h3 className="fw-bold m-0">Your notes</h3>
          </div>

          <div className="d-flex justify-content-between">
          <ul className="d-flex justify-content-between w-25 mb-0 p-0">
            {filterList.map((item, key) => (
              <li key={key} className="list-group-item filter-items">
                {item}
              </li>
            ))}
          </ul>

          
          <label>
            <input type="checkbox" className="me-2" />
            Show only completed notes
          </label>
          </div>

        </div>

        <div className="row justify-content-between">
          {notes.length === 0 ? (
            <p className="fw-bold">No Notes found</p>
          ) : (
            <NotesList
              notes={notes}
              deleteNote={deleteNote}
              toggleNote={toggleNote}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
