import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RemoteEngine from "./components/RemoteEngine";
import ThankYouPage from './components/ThankYouPage';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RemoteEngine />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
