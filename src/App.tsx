import './App.css';
import ChartMap from './components/ChartMap';
import GoogleMap from './components/GoogleMap/GoogleMap';
import SimpleMap from './components/GoogleMap/SimpleMap';
import WorldMapAtlas from './components/GoogleMap/WorldMapAtlas';
import LeafletMap from './components/LeafletMap';

function App() {
  return (
    <div className="App">
      <LeafletMap/>
      <WorldMapAtlas/>
      {/* <SimpleMap/> */}
      <ChartMap/>
    </div>
  );
}

export default App;
