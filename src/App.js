import './App.css';
import Guess from './components/Guess';

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 text-light">
        <h1 className='text-warning'>Guess the Number</h1>
        <p className="text-center">A number will be generated randomly you have to guess the number.</p>
        <Guess/>
    </div>
  );
}

export default App;
