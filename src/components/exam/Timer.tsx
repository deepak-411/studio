
"use client";

import { useState, useEffect, useRef } from "react";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  playSound?: boolean;
}

export default function Timer({ initialTime, onTimeUp, playSound = false }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        audioRef.current = new Audio('/tick.mp3');
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (playSound && newTime > 0) {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeUp, playSound]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center">
      <div className={`font-mono text-2xl font-bold p-2 rounded-md ${timeLeft <= 10 ? 'text-destructive animate-pulse' : 'text-primary'}`}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <p className="text-xs text-muted-foreground">Time Left</p>
    </div>
  );
}
