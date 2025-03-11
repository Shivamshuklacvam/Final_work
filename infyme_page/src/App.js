
import './App.css';
import AssetPipeline from './Components/AssetPipeline';
import Header from './Components/Header';
import Search from './Components/Search_Component';
import Table from './Components/Table';
import PortfolioAnalytics from './Components/porfolio';

function App() {
  return (
    <div className="App">
      <Header />  
      <PortfolioAnalytics/>
      <Search />
      <Table />
      <AssetPipeline/>
    </div>
  );
}

export default App;
