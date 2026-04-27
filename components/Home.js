import AddItemForm from './AddItemForm';
import GroceryList from './GroceryList';

function Home() {
  return (
    <div className='container'>
      <h1>🛒 Ma liste de courses</h1>

      <div className='layout'>
        <AddItemForm />
        <GroceryList />
      </div>
    </div>
  );
}

export default Home;
