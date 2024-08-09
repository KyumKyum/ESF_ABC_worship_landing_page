import { useState, useEffect } from 'react';
import { cls } from '../lib/utils';

interface TypingTextProps {
  text: string;
  typingSpeed: number;
  className?: string;
}

const TypingText = ({ text, typingSpeed, className }: TypingTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, typingSpeed]);

  return <p className={cls('w-[300px] p-0 text-center',className)}>{displayText}</p>;
};

export default TypingText