import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Auction from './pages/Auction';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UserProfile from './pages/UserProfile';
import OrderTracking from './pages/OrderTracking';
import New from './components/New';
import Category from './pages/Category';
import AuthPage from './pages/AuthPage';

// Layout wrapper
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products" element={<Layout><ProductListing /></Layout>} />
        <Route path="/products/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/profile" element={<Layout><UserProfile /></Layout>} />
        <Route path="/track-order/:id" element={<Layout><OrderTracking /></Layout>} />
        <Route path="/offers" element={<Layout><New /></Layout>} />
        <Route path="/auctions" element={<Layout><Auction /></Layout>} />
        <Route path="/auction/:id" element={<Layout><Auction /></Layout>} />
        <Route path="/categories/:name" element={<Layout><Category /></Layout>} />
        <Route path="/login" element={<AuthPage />} /> {/* No layout for login */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
