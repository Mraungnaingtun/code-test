import './App.css';
// import ApiList from './components/integrated_list_from_api'
import FirstHeader from './components/Header/Header';
import Home from './components/Home/Home';
function App() {
  return (
    <div className='App'>
      <FirstHeader/>
      <Home/>
      {/* <ApiList/> */}
    </div>
  );
}

export default App;
