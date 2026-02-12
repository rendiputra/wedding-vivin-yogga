import { useState, useEffect, useRef } from 'react';

interface WelcomeOverlayProps {
  coupleNames: string;
  date: string;
}

export default function WelcomeOverlay({ coupleNames, date }: WelcomeOverlayProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsClosing(true);
    document.body.classList.remove('overlay-open');

    // Dispatch event to trigger audio
    window.dispatchEvent(new CustomEvent('openInvitation'));

    setTimeout(() => {
      setIsOpen(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={`envelope-overlay ${isClosing ? 'closing' : ''}`}
    >
      {/* Envelope flap decorative triangle */}
      <div className="envelope-flap" />

      {/* Gold corner ornaments */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent-gold opacity-50 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent-gold opacity-50 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent-gold opacity-50 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent-gold opacity-50 rounded-br-lg" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Bismillah */}
        <p
          className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        {/* The Wedding of */}
        <p
          className="text-text-muted text-base md:text-lg tracking-widest uppercase mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          The Wedding of
        </p>

        {/* Couple Names */}
        <h1
          className="text-5xl md:text-7xl mb-4 gold-gradient-text"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          {coupleNames}
        </h1>

        {/* Ornament */}
        <div className="ornament-divider mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-accent-gold">
            <path
              d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Date */}
        <p
          className="text-text-dark text-sm md:text-base tracking-wider mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {date}
        </p>

        {/* Guest greeting */}
        <p className="text-text-muted text-xs tracking-wide mb-2">
          Kepada Yth.
        </p>
        <p
          className="text-text-dark text-sm md:text-base mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Bapak/Ibu/Saudara/i
        </p>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="btn-gold animate-pulse-gold"
          id="open-invitation-btn"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
