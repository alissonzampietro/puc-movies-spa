import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  

  return (
    <div className="App">
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
