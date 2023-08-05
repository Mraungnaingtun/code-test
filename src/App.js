import './App.css';
import ApiList from './components/ApiList/ApiList';
import FirstHeader from './components/Header/Header';
import NewHome from './components/Home/NewHome';
import AboutTirppro from './components/About/AboutTirppro';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box className='App'>
      <FirstHeader/>
      <NewHome/>
      <AboutTirppro/>
      <ApiList />
    </Box>
  );
}

export default App;
