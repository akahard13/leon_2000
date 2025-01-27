import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;