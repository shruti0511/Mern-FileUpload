import './App.css';
import Books from './Component/Book/Books'
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import NavigationBar from './Component/Layout/Navigation';
import { Container } from 'react-bootstrap';
import Layout from './Component/Layout/Layout';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Books />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
