import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}
