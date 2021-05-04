import './App.css';
import { DisplayProducts } from './Components/Products'
const products = [
  {Id: 0, Name: "iPhone 11", Price: 10000},
  {Id: 1, Name: "Huawei P40", Price: 9500},
  {Id: 2, Name: "Samsung Galaxy S20", Price: 8500}
] 

function App() {
  return (
    <div>
      <DisplayProducts />
    </div>
  );
}

export default App;
