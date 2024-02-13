
import './App.css';
import TestProps from './comp/TestProps';
import TestUseEffetc from './comp/TestUseEffetc.jsx';
import TestUseState from './comp/TestUseState.jsx';

function App() {
  return (
    <div className="App">
     <TestProps namee="deep"/>
     <TestUseState />
     <TestUseEffetc />
    </div>
  );
}

export default App;
