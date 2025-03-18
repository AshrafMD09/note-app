import { useEffect, useState } from "react";
import AddNoteModal from "./AddNoteModal";
import NotesList from "./NotesList";


function App() {

  const [showCompleted , setShowCompleted] = useState(false);
  const filterList = ["All Notes","Personal","Home","Business"];
  const [filterType, setFilterType] = useState("All Notes");

  const [notes, setNotes] = useState([
    {
      id: 11,
      title: "Going out",
      description: "having fun with the friends",
      type: "Home",
      completed: false,
      date:'10/10/2020'
    },
    {
      id: 121,
      title: "Going out",
      description: "having fun with the friends",
      type: "Personal",
      completed: false,
      date:'10/10/2020'
    }
  ]);

  useEffect(() => {
    console.log(notes);
  }),[notes];

  const handleCheckboxChange = () => {
    setShowCompleted(prev => !prev);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

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

    // 🔍 Filtering Logic
    let filteredNotes = notes;

    if (showCompleted) {
      filteredNotes = filteredNotes.filter((note) => note.completed);
    }
  
    if (filterType !== "All Notes") {
      filteredNotes = filteredNotes.filter((note) => note.type === filterType);
    }

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
            {filterList.map((item) => (
              <li 
              key={item} 
              className={`list-group-item filter-items ${filterType === item ? "fw-bold" : ""}`}
              onClick={() => handleFilterChange(item)}>
                {item}
              </li>
            ))}
          </ul>

          
          <label>
            <input 
            type="checkbox" 
            className="me-2" 
            checked={showCompleted}
            onChange={handleCheckboxChange}
            />
            Show only completed notes
          </label>
          
          </div>

        </div>

        <div className="row justify-content-between">
          {filteredNotes.length === 0 ? (
            <p className="fw-bold text-danger">No Notes found</p>
          ) : (
            <NotesList
              notes={filteredNotes}
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
