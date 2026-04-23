import React, { useState } from 'react';
import { ShoppingBag, Search, User, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      <div className="container flex items-center justify-between" style={{ padding: '1.5rem 2rem' }}>
        <div className="nav-links flex gap-4">
          <Link to="/shop" style={{ fontWeight: '500' }}>Shop</Link>
          <a href="/#categories">Categories</a>
          <a href="/#about">About</a>
        </div>
        
        <Link to="/" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '600', letterSpacing: '4px' }}>
          CRYSTAL COVE BEAUTY
        </Link>
        
        <div className="nav-icons flex items-center gap-4">
          {showSearch ? (
            <form onSubmit={handleSearch} className="flex items-center" style={{ borderBottom: '1px solid var(--color-text)', paddingBottom: '2px' }}>
              <input 
                type="text" 
                placeholder="Search..." 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text)', width: '160px', fontFamily: 'var(--font-body)' }} 
              />
              <button type="button" onClick={() => setShowSearch(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}>
                <X size={18} color="var(--color-text)" />
              </button>
            </form>
          ) : (
            <button onClick={() => setShowSearch(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}>
              <Search size={22} color="var(--color-text)" />
            </button>
          )}
          <Link to="/login" style={{ display: 'flex' }}><User size={22} color="var(--color-text)" /></Link>
          <Link to="/cart" style={{ display: 'flex' }}><ShoppingBag size={22} color="var(--color-text)" /></Link>
        </div>
      </div>
    </header>
  );
}
