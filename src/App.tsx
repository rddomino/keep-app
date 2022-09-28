import './App.css'

import Home from './components/home/Home'
import DataProvider from './components/context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App
