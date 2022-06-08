import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Jumbo from './Jumbo';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Jumbo />
      {renderPage()}
    </>
  );
}