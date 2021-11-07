import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Shipment from './Components/Shipment';
import { createContext, useState } from 'react';
export const CategoryContext = createContext();
function App() {
  const [category , setCategory] = useState('Laptop');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Home></Home>
      <Header></Header>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
