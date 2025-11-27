
"use client";

import { useState, useEffect, useRef } from "react";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  playSound?: boolean;
}

export default function Timer({ initialTime, onTimeUp, playSound = false }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AudioContext) {
      // Create AudioContext only once
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
    }
  }, []);

  const playTickSound = () => {
    if (!audioContextRef.current) return;
    const context = audioContextRef.current;
    
    // Simple tick sound
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1000, context.currentTime); 
    gainNode.gain.setValueAtTime(1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.05);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (playSound && newTime > 0) {
          playTickSound();
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
