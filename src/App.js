import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './assets/style/index.scss';
import './assets/icons/style.scss'
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<ContactsPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
