import React, { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <h1 className="section-title">My Account</h1>
      <div className="flex gap-4">
        {/* Sidebar */}
        <aside style={{ width: '250px' }}>
          <ul className="flex flex-col gap-2">
            <li>
              <button 
                onClick={() => setActiveTab('orders')} 
                style={{ width: '100%', textAlign: 'left', display: 'block', padding: '1rem', backgroundColor: activeTab === 'orders' ? 'var(--color-text)' : 'transparent', color: activeTab === 'orders' ? '#fff' : 'var(--color-text)', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
              >
                Order History
              </button>
            </li>
            <li>
              <button 
                onClick={() => console.log('Wishlist clicked')}
                style={{ width: '100%', textAlign: 'left', display: 'block', padding: '1rem', color: 'var(--color-text)', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
              >
                Wishlist
              </button>
            </li>
            <li>
              <button 
                onClick={() => console.log('Addresses clicked')}
                style={{ width: '100%', textAlign: 'left', display: 'block', padding: '1rem', color: 'var(--color-text)', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
              >
                Addresses
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('details')} 
                style={{ width: '100%', textAlign: 'left', display: 'block', padding: '1rem', backgroundColor: activeTab === 'details' ? 'var(--color-text)' : 'transparent', color: activeTab === 'details' ? '#fff' : 'var(--color-text)', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
              >
                Account Details
              </button>
            </li>
            <li>
              <button 
                style={{ width: '100%', textAlign: 'left', display: 'block', padding: '1rem', color: 'var(--color-accent)', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </aside>

        {/* Dashboard Content */}
        <div style={{ flex: 1, paddingLeft: '2rem' }}>
          {activeTab === 'orders' && (
            <>
              <h2 style={{ marginBottom: '2rem' }}>Order History</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-text)', textAlign: 'left' }}>
                    <th style={{ padding: '1rem' }}>Order</th>
                    <th style={{ padding: '1rem' }}>Date</th>
                    <th style={{ padding: '1rem' }}>Status</th>
                    <th style={{ padding: '1rem' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '1rem', color: 'var(--color-accent)' }}>#VL-8923</td>
                    <td style={{ padding: '1rem' }}>April 18, 2026</td>
                    <td style={{ padding: '1rem' }}>Processing</td>
                    <td style={{ padding: '1rem' }}>₹11205.00</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '1rem', color: 'var(--color-accent)' }}>#VL-7741</td>
                    <td style={{ padding: '1rem' }}>March 02, 2026</td>
                    <td style={{ padding: '1rem' }}>Delivered</td>
                    <td style={{ padding: '1rem' }}>₹7470.00</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {activeTab === 'details' && (
            <>
              <h2 style={{ marginBottom: '2rem' }}>Account Details</h2>
              <form style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>First Name</label>
                    <input type="text" defaultValue="Elena" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', outline: 'none' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Last Name</label>
                    <input type="text" defaultValue="Gilbert" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email Address</label>
                  <input type="email" defaultValue="elena.gilbert@example.com" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Phone Number</label>
                  <input type="tel" defaultValue="+1 (555) 123-4567" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', outline: 'none' }} />
                </div>
                <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Save Changes</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
