import Link from 'next/link';
import React from 'react';
import "../styles/Navbar.css"
function Navbar() {
  return <div>
      <div className='Navbar' >
          <div><img src="/muntazim-logo.png" alt='logo'/></div>
          <div>
             <Link href="#">Home</Link>
             <Link href="#">Features</Link>
             <Link href="#">How It Works</Link>
             <Link href="#">About Us</Link>
             <button>Download</button>
          </div>
      </div>
  </div>;
}

export default Navbar;
