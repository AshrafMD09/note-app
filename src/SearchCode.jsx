// src/App.jsx
import { useState } from 'react'

function App() {
  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }

  return (
    <div>      
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
    </div>
  )
}

export default App