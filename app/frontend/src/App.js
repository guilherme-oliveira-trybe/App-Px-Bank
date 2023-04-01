import styles from './App.module.css';
import ListEmployees from './pages/ListEmployees';

function App() {
  return (
    <main className={ styles.container }>
      <ListEmployees />
    </main>
  );
}

export default App;
