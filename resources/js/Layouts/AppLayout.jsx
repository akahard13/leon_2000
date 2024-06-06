import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;