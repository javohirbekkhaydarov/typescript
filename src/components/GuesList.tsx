import { useState } from "react";

const GuesList = () => {
  const [name, setName] = useState(``);
  const [guests , setGuests] = useState<string[]>([])

  const addGuests = () => {
    setName(``);
    setGuests([...guests , name])
  }
  return (
    <div>
      <h3>GuesList</h3>
      <input type="text "  value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={addGuests}> Add Guests</button>

      <ul>
        {guests.map(item => <li key={item} > {guests}</li>)}
      </ul>
    </div>
  )
};

export default GuesList;
