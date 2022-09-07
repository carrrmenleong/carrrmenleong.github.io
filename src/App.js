import bomb from './bomb.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bomb} className="App-logo" alt="bomb" />
        <a
          className="App-link"
          href="https://www.redhat.com/en/topics/devops/what-is-ci-cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who needs automation! Manual deploys for the win!
        </a>
      </header>
    </div>
  );
}

export default App;
