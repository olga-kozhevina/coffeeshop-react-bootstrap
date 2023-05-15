import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import AboutUsPage from './components/AboutUsPage';
import LocationPage from './components/LocationPage/LocationPage';
import ReviewsPage from './components/ReviewsPage/ReviewsPage';
import EventsPage from './components/EventsPage/EventsPage';
import SubscriptionForm from './components/SubscriptionForm';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/subscribe" element={<SubscriptionForm />} />
        </Routes>
      </div>
  );
}

export default App;
