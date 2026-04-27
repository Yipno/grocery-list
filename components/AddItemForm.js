import { useState } from 'react';

// TODO Redux : importer le necessaire pour faire fonctionner le reducer

function AddItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;

    // TODO Redux : dispatch l'action addItem avec un objet { id, name, quantity }
    // pour l'id, tu peux utiliser Date.now()
    console.log('Ajouter :', { name, quantity }); // ← à remplacer

    // Reset du formulaire
    setName('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Ajouter un article</h2>

      <input
        type='text'
        placeholder='Ex : Pain'
        // TODO completer l'input
      />

      <input
        type='number'
        min='1'
        // TODO completer l'input
      />

      <button type='submit'>Ajouter</button>
    </form>
  );
}

export default AddItemForm;
