import { useState, useEffect } from "react";

interface IncrementTextProps {
  text: string;
  delay?: number;
  speed?: number;
  blinkingCursor?: boolean;
}

function IncrementText({
  text,
  delay = 1000,
  speed = 150,
  blinkingCursor = true,
}: IncrementTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [drawText, setDrawText] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setDrawText(true);
    }, delay);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [delay]);

  useEffect(() => {
    if (!drawText) {
      return;
    }

    if (currentIndex >= text.length) {
      return;
    }

    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, speed); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, drawText]);

  return (
    <span>
      {displayedText}
      {blinkingCursor && (
        <span className={`inline-block animate-blink`}>|</span>
      )}
    </span>
  );
}

export default IncrementText;
