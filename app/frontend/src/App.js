import './App.css';
import Provider from './context/Provider';
import ListEmployees from './pages/ListEmployees';

function App() {
  return (
    <Provider>
      <main className="App">
        <ListEmployees />
      </main>
    </Provider>
  );
}

export default App;
