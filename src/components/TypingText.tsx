import { useState, useEffect } from 'react';

interface TypingTextProps {
  strings: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText = ({
  strings,
  className = '',
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 2000,
}: TypingTextProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!strings.length) return;

    const currentFullText = strings[index];

    if (isPaused) return;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        const nextText = currentFullText.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === currentFullText) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, pauseTime);
        }
      } else {
        // Deleting
        const nextText = currentFullText.substring(0, text.length - 1);
        setText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseTime, isPaused]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 text-gold animate-pulse">|</span>
    </span>
  );
};

export default TypingText;