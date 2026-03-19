import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div className="ambient-glow"></div>
      <Header />
      <Hero />
      <ContentCard />
      <Footer />
    </div>
  );
}

export default App;
