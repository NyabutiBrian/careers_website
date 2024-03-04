import React, { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Header from '../layouts/landing/Header';
import CategoriesPost from '../layouts/landing/CategoriesPost';


function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Navbar/>
        <main className="max-w-7xl mx-auto px-4">
            <Header />
            <CategoriesPost />
            <Contact />
            <Footer />
        </main>
    </>
  )
}

export default Landing