import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-red-900 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="font-bold text-lg">AntiqueHub</Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/track-order">Order</Link>
        </div>
      </nav>
    </header>
  );
}