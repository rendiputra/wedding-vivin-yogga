import { useState, useEffect, useRef } from 'react';

interface AudioControlProps {
  audioSrc: string;
}

export default function AudioControl({ audioSrc }: AudioControlProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const handleOpenInvitation = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log('Audio autoplay blocked:', err);
        });
      }
    };

    window.addEventListener('openInvitation', handleOpenInvitation);

    return () => {
      window.removeEventListener('openInvitation', handleOpenInvitation);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-1 rounded-full bg-primary-cream shadow-lg border-2 border-accent-gold hover:scale-110 transition-transform duration-300"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      id="audio-control-btn"
    >
      <div className={`vinyl-disc ${isPlaying ? 'playing' : 'paused'}`} />
    </button>
  );
}
