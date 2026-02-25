import { useState, useEffect, useCallback } from 'react';

interface TypingTextProps {
  strings: string[];
  className?: string;
}

const TypingText = ({ strings, className = '' }: TypingTextProps) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = strings[currentStringIndex];

    if (!isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length + 1));
      if (currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setCurrentText(fullText.substring(0, currentText.length - 1));
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [currentText, isDeleting, currentStringIndex, strings]);

  useEffect(() => {
    const speed = isDeleting ? 30 : 60;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className={className}>
      {currentText}
      <span className="typing-cursor text-gold">|</span>
    </span>
  );
};

export default TypingText;
