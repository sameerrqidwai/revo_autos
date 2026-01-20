import React, { useState } from 'react';

// Assets (Using placeholders until local assets are moved)
import heroBg from './assets/hero_sportscar_8k.png'; // Updated to 8k image
import heroVideo from './assets/sportscar_video.mp4'; // Lightweight video
import logoIcon from './assets/revo_logo.jpg';

// Icons
import { FaPhoneAlt, FaStar, FaChevronDown, FaCheckCircle, FaCar, FaShieldAlt, FaTools, FaArrowRight } from 'react-icons/fa';

import HoverFooter from '@/components/ui/footer-demo';

/**
 * Main Application Component
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ServiceCategories />
      <CarListings />
      <HoverFooter />
    </div>
  );
}

/**
 * Navigation Bar
 */
const Navbar = () => {
  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '10px 0',
      background: 'transparent'
    }}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
          <img src={logoIcon} alt="REVO Autogroup" style={{ height: '140px', width: 'auto' }} />
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 mobile-hidden">
          <a href="#" className="nav-link active" style={{ color: 'var(--color-primary)', fontWeight: '700' }}>Home</a>
          <a href="#" className="nav-link flex items-center gap-2" style={{ color: '#fff' }}>Services <FaChevronDown size={10} /></a>
          <a href="#" className="nav-link" style={{ color: '#fff' }}>Car Listings</a>
          <a href="#" className="nav-link flex items-center gap-2" style={{ color: '#fff' }}>About Revo <FaChevronDown size={10} /></a>
          <a href="#" className="nav-link flex items-center gap-2" style={{ color: '#fff' }}>Support <FaChevronDown size={10} /></a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6 mobile-hidden">
          <div className="flex items-center gap-2 text-white">
            <div style={{ padding: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
              <FaPhoneAlt size={14} />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>(647) 382-5749</span>
          </div>
          <button className="btn btn-outline-white" style={{ padding: '10px 24px' }}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

/**
 * Hero Section
 */
const Hero = () => {
  return (
    <section style={{
      background: 'var(--color-dark-bg)',
      color: '#fff',
      minHeight: '100vh',
      position: 'relative',
      paddingTop: '40px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          style={{
            width: '100%',
            height: '115%', // Increased height to push the bottom watermark out of view
            objectFit: 'cover', // Ensures horizontal coverage
            objectPosition: 'center top', // Keeps the car in view while cropping the bottom
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 100%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '650px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Your Car Journey <br /> Starts Here
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)'
          }}>
            From rentals to management, detailing to insurance, and car sales –
            we handle it all so you can drive stress-free
          </p>

          <div className="flex gap-4 items-center justify-center mb-12">
            <button className="btn btn-primary flex gap-2">
              Find Your Car <FaArrowRight size={14} />
            </button>
            <button className="btn btn-outline-white">
              Get A Quote
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `#333`,
                  border: '2px solid #000',
                  marginLeft: i === 1 ? '0' : '-15px'
                }}></div>
              ))}
            </div>
            <div>
              <div className="flex gap-1 text-red mb-1 justify-center">
                {[1, 2, 3, 4, 5].map(i => <FaStar key={i} size={14} />)}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#fff', fontWeight: '500', textAlign: 'center' }}>
                4.9/5 <span style={{ color: '#ccc' }}>(9.5k Reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Categories / Pills Strip
 */
const ServiceCategories = () => {
  const categories = [
    { name: 'Car Rental', icon: <FaCar /> },
    { name: 'Car Sales', icon: <FaCheckCircle /> },
    { name: 'Management', icon: <FaTools /> },
    { name: 'Insurance', icon: <FaShieldAlt /> },
    { name: 'Detailing', icon: <FaStar /> },
  ];

  return (
    <div style={{ background: '#000', padding: '0 0 40px 0' }}>
      <div className="container">
        <div className="flex gap-4 overflow-x-auto" style={{ paddingBottom: '20px' }}>
          {categories.map((cat, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: '#1C1C1C',
              borderRadius: '50px',
              color: '#fff',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              border: idx === 0 ? '1px solid var(--color-primary)' : '1px solid transparent'
            }}>
              <span className="text-red">{cat.icon}</span>
              <span style={{ fontWeight: '500' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Car Listings (Sample)
 */
const CarListings = () => {
  const fleet = [
    { name: 'Porsche 911 GT3', price: '1,200', image: heroBg, rating: '5.0', reviews: '1.2k' },
    { name: 'BMW M4 Competition', price: '950', image: heroBg, rating: '4.9', reviews: '850' },
    { name: 'Audi R8 V10 Plus', price: '1,500', image: heroBg, rating: '5.0', reviews: '2.1k' },
  ];

  return (
    <section style={{ padding: '100px 0', background: '#F8F9FA' }}>
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#000', marginBottom: '8px', fontWeight: '800' }}>Popular Fleet</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Explore our most booked vehicles</p>
          </div>
          <button className="btn btn-outline-dark" style={{ borderRadius: '50px', padding: '12px 28px' }}>View All Cars</button>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
          {fleet.map((car, idx) => (
            <div key={idx} style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '200px',
                background: '#f8f8f8',
                borderRadius: '16px',
                marginBottom: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src={car.image} alt={car.name} style={{ width: '90%', height: 'auto', objectFit: 'contain' }} />
              </div>

              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#000' }}>{car.name}</h3>
                <div className="flex items-center gap-1 text-red" style={{ fontWeight: '700' }}>
                  <FaStar size={14} /> {car.rating}
                </div>
              </div>

              <div className="grid mb-8" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.9rem', color: '#666' }}>
                <div className="flex items-center gap-2"><FaCar size={14} /> Automatic</div>
                <div className="flex items-center gap-2"><FaCheckCircle size={14} /> Gasoline</div>
                <div className="flex items-center gap-2"><FaTools size={14} /> 2 Seats</div>
                <div className="flex items-center gap-2"><FaShieldAlt size={14} /> 8.5km/L</div>
              </div>

              <div className="flex justify-between items-center pt-6" style={{ borderTop: '1px solid #F0F0F0' }}>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#000' }}>${car.price}</span>
                  <span style={{ fontSize: '0.9rem', color: '#999' }}> /day</span>
                </div>
                <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: '700' }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
