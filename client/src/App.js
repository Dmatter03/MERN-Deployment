import { Routes, Route, Link } from 'react-router-dom'
import './App.css';



import Dashboard from './Views/DashBoard';
import DetailsPage from './Views/DetailsPage';
import CreatePage from './Views/CreatePage';
import UpdatePage from './Views/UpdatePage';

function App() {
  return (
    <div className="App-nav">
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/details/:id' element={<DetailsPage />} />
      <Route path='/update/:id' element={<UpdatePage />} />
    </Routes>

    </div>
  );
}

export default App;
