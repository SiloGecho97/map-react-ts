import './App.css';
import ChartMap from './components/ChartMap';
import GoogleMap from './components/GoogleMap/GoogleMap';
import SimpleMap from './components/GoogleMap/SimpleMap';
import WorldMapAtlas from './components/GoogleMap/WorldMapAtlas';

function App() {
  return (
    <div className="App">
      <WorldMapAtlas/>
      {/* <SimpleMap/> */}
      <ChartMap/>
    </div>
  );
}

export default App;
