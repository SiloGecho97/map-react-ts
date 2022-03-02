import './App.css';
import GoogleMap from './components/GoogleMap/GoogleMap';
import SimpleMap from './components/GoogleMap/SimpleMap';

function App() {
  return (
    <div className="App">
      <SimpleMap/>
      <GoogleMap></GoogleMap>
    </div>
  );
}

export default App;
