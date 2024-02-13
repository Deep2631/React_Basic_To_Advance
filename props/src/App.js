
import './App.css';
import TestProps from './comp/TestProps';
import TestUseState from './comp/TestUseState.jsx';

function App() {
  return (
    <div className="App">
     <TestProps namee="deep"/>
     <TestUseState />
    </div>
  );
}

export default App;
