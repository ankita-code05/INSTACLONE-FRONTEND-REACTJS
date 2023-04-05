
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostContext from './contexts/PostContext'
import Approuter from './Routers/Approuter';

function App() {
  return (
    <PostContext>
      <div className="App-container">
        <Approuter />
      </div>
    </PostContext>
  );
}

export default App;