import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import CommunityList from './components/communities/CommunityList'; // ✅ Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/communities" element={<CommunityList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
