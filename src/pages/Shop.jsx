import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  
  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Filter by Search Query
    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerSearch) || 
        p.description.toLowerCase().includes(lowerSearch) ||
        p.category.toLowerCase().includes(lowerSearch)
      );
    }
    
    return result;
  }, [activeCategory, search]);

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <h1 className="section-title">The Collection</h1>
      {search && (
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Showing results for: <span style={{ fontWeight: '600', color: 'var(--color-accent)' }}>"{search}"</span>
        </p>
      )}
      
      <div className="flex gap-4">
        {/* Sidebar Filters */}
        <aside style={{ width: '250px' }}>
          <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-text)', paddingBottom: '0.5rem' }}>Filters</h3>
          <div style={{ marginBottom: '2rem' }}>
            <h4>Category</h4>
            <ul className="flex flex-col gap-2" style={{ color: 'rgba(0,0,0,0.8)', fontSize: '0.95rem', marginTop: '1rem' }}>
              {['All', 'Makeup', 'Skincare', 'Fragrance'].map(cat => (
                <li key={cat}>
                  <label className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      name="category" 
                      checked={activeCategory === cat} 
                      onChange={() => setActiveCategory(cat)} 
                      style={{ accentColor: 'var(--color-text)' }}
                    /> 
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main style={{ flex: 1 }}>
          {filteredProducts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', backgroundColor: 'var(--color-bg)' }}>
              <h3 style={{ marginBottom: '1rem' }}>No products found</h3>
              <p style={{ color: 'rgba(0,0,0,0.6)' }}>Try adjusting your search or category filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
