import './App.css';
import Header from './components/Header';
import Destination from './components/Destination';
import Data from './data';
function App() {
  return (
    <div className="App">
        <Header />
        <Destination
            key={Data.id}
            data={Data}
        />
    </div>
  );
}

export default App;
