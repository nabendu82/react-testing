import './App.css';
import MuiMode from './components/mui/MuiMode';
import { ModeProviders } from './providers/ModeProviders';

function App() {
  return (
    <ModeProviders>
      <div className="App">
        <MuiMode />
      </div>
    </ModeProviders>
  );
}

export default App;
