// TODO Redux : importer le necessaire pour utiliser Redux
// TODO Redux : importer les actions depuis '../reducers/groceries'

function GroceryList() {
  // TODO Redux : récupérer la fonction dispatch avec useDispatch()

  // TODO Redux : récupérer la liste des articles avec useSelector
  const items = []; // ← à remplacer

  // Cas liste vide
  if (items.length === 0) {
    return (
      <div className='list'>
        <h2>Ma liste</h2>
        <p className='empty'>La liste est vide. Ajoute ton premier article !</p>
      </div>
    );
  }

  return (
    <div className='list'>
      <h2>Ma liste ({items.length})</h2>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>
              {item.name} — <strong>x{item.quantity}</strong>
            </span>

            {/* TODO Redux : dispatch l'action removeItem avec l'id de l'article */}
            <button onClick={() => console.log('Retirer :', item.id)} className='remove'>
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* TODO Redux : dispatch l'action clearList au clic */}
      <button onClick={() => console.log('Vider la liste')} className='clear'>
        🗑️ Vider la liste
      </button>
    </div>
  );
}

export default GroceryList;
