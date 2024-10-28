import { useState } from 'react';
import { mySwal } from './App';

export default function Form({ onAddItems }) {
  // State Declarations
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      mySwal.fire({
        title: 'Something went wrong',
        text: 'Please try again with a valid item',
        icon: 'error',
        width: 400,
      });
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
          <option
            value={num}
            key={i}
          >
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
