import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const [addedToBag, setAddedToBag] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [selectedShade, setSelectedShade] = useState('#F3E5AB');
  const { addToCart } = useCart();

  const handleAddToBag = () => {
    addToCart(product, 1, product.category === 'Makeup' ? selectedShade : null);
    setAddedToBag(true);
    setTimeout(() => {
      setAddedToBag(false);
    }, 2000);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  const detailsContent = product.details || "Formulated with premium synthetic polymers and organic extracts. Our cruelty-free formula ensures a flawless finish that lasts all day while nourishing your skin.";
  const howToUseContent = product.howToUse || "Apply a small amount to clean, dry skin. Blend evenly using your fingertips, a brush, or a sponge. Avoid direct contact with eyes.";
  const shippingContent = "Free standard shipping on all orders over ₹4150. Returns accepted within 30 days of purchase for a full refund or exchange. Items must be unused and in original packaging.";

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
        {/* Product Images */}
        <div style={{ flex: 1 }}>
          <div style={{ height: '600px', backgroundColor: 'var(--color-section)', marginBottom: '1rem', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="flex gap-2">
            <div style={{ height: '100px', flex: 1, backgroundColor: 'var(--color-bg)', cursor: 'pointer', border: '1px solid var(--color-text)', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
            </div>
            <div style={{ height: '100px', flex: 1, backgroundColor: 'var(--color-bg)', cursor: 'pointer', overflow: 'hidden' }}>
               <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div style={{ flex: 1, padding: '0 2rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>{product.category}</p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '2rem' }}>₹{product.price.toFixed(2)}</p>
          
          <p style={{ marginBottom: '2rem', color: 'rgba(0,0,0,0.7)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            {product.description}
          </p>

          {(product.category === 'Makeup') && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', fontWeight: '500' }}>Select Shade</h4>
              <div className="flex gap-2">
                <button aria-label="Select shade #F3E5AB" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F3E5AB', border: selectedShade === '#F3E5AB' ? '2px solid var(--color-text)' : '2px solid transparent', cursor: 'pointer', transition: 'border 0.2s ease' }} onClick={() => setSelectedShade('#F3E5AB')}></button>
                <button aria-label="Select shade #D2B48C" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D2B48C', border: selectedShade === '#D2B48C' ? '2px solid var(--color-text)' : '2px solid transparent', cursor: 'pointer', transition: 'border 0.2s ease' }} onClick={() => setSelectedShade('#D2B48C')}></button>
                <button aria-label="Select shade #8B4513" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#8B4513', border: selectedShade === '#8B4513' ? '2px solid var(--color-text)' : '2px solid transparent', cursor: 'pointer', transition: 'border 0.2s ease' }} onClick={() => setSelectedShade('#8B4513')}></button>
              </div>
            </div>
          )}

          <div className="flex gap-2" style={{ marginBottom: '3rem' }}>
            <button className="btn btn-primary" style={{ flex: 2, backgroundColor: addedToBag ? '#4CAF50' : '', borderColor: addedToBag ? '#4CAF50' : '', transition: 'all 0.3s ease' }} onClick={handleAddToBag}>
              {addedToBag ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>
            <button className="btn btn-secondary" style={{ flex: 1 }}>Wishlist</button>
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="flex justify-between items-center" style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer' }} onClick={() => toggleSection('details')}>
              <h4 style={{ fontWeight: '500', margin: 0 }}>Details & Ingredients</h4>
              <span style={{ fontSize: '1.2rem', transform: openSection === 'details' ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>{openSection === 'details' ? '×' : '+'}</span>
            </div>
            {openSection === 'details' && (
              <div style={{ padding: '1rem 0', color: 'rgba(0,0,0,0.7)', lineHeight: '1.8' }}>
                {detailsContent}
              </div>
            )}
            
            <div className="flex justify-between items-center" style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer' }} onClick={() => toggleSection('howToUse')}>
              <h4 style={{ fontWeight: '500', margin: 0 }}>How to Use</h4>
              <span style={{ fontSize: '1.2rem', transform: openSection === 'howToUse' ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>{openSection === 'howToUse' ? '×' : '+'}</span>
            </div>
            {openSection === 'howToUse' && (
              <div style={{ padding: '1rem 0', color: 'rgba(0,0,0,0.7)', lineHeight: '1.8' }}>
                {howToUseContent}
              </div>
            )}

            <div className="flex justify-between items-center" style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer' }} onClick={() => toggleSection('shipping')}>
              <h4 style={{ fontWeight: '500', margin: 0 }}>Shipping & Returns</h4>
              <span style={{ fontSize: '1.2rem', transform: openSection === 'shipping' ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>{openSection === 'shipping' ? '×' : '+'}</span>
            </div>
            {openSection === 'shipping' && (
              <div style={{ padding: '1rem 0', color: 'rgba(0,0,0,0.7)', lineHeight: '1.8' }}>
                {shippingContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
