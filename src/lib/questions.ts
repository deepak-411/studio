
export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  topic: 'Robotics' | 'AI' | 'HTML' | 'CSS' | 'JavaScript';
};

export const questions: Question[] = [
  // --- Set 1 (Robotics) ---
  {
    id: 1,
    question: "What is the primary factor determining the color of light emitted by an LED?",
    options: ["The voltage supplied", "The current flowing through it", "The semiconductor material used", "The shape of the diode"],
    answer: "The semiconductor material used",
    topic: "Robotics"
  },
  {
    id: 2,
    question: "In a common cathode RGB LED, how would you produce the color yellow?",
    options: ["Power the Red and Green pins", "Power the Red and Blue pins", "Power the Green and Blue pins", "Power all three pins"],
    answer: "Power the Red and Green pins",
    topic: "Robotics"
  },
  {
    id: 3,
    question: "On a standard breadboard, how are the main component rows (not the power rails) typically connected internally?",
    options: ["Horizontally", "Vertically", "Diagonally", "They are not connected"],
    answer: "Vertically",
    topic: "Robotics"
  },
  {
    id: 4,
    question: "What is a primary advantage of a solderable board (DOT PCB) over a breadboard?",
    options: ["It's better for temporary circuits", "It allows for more complex component placement", "It creates semi-permanent, more reliable connections", "It requires no special tools"],
    answer: "It creates semi-permanent, more reliable connections",
    topic: "Robotics"
  },
  {
    id: 5,
    question: "What energy conversion process occurs inside a battery to produce electrical power?",
    options: ["Mechanical to Electrical", "Thermal to Electrical", "Chemical to Electrical", "Nuclear to Electrical"],
    answer: "Chemical to Electrical",
    topic: "Robotics"
  },
  {
    id: 6,
    question: "A capacitor stores energy in the form of:",
    options: ["A magnetic field", "An electric field", "Kinetic energy", "Chemical energy"],
    answer: "An electric field",
    topic: "Robotics"
  },
  {
    id: 7,
    question: "To reverse the direction of a simple DC motor, what action should you take?",
    options: ["Increase the voltage", "Decrease the voltage", "Reverse the polarity of the power supply", "Add a resistor to the circuit"],
    answer: "Reverse the polarity of the power supply",
    topic: "Robotics"
  },
  {
    id: 8,
    question: "What is the key difference between a standard DC motor and a servo motor?",
    options: ["Servo motors are faster", "Servo motors allow for precise control of angular position", "Servo motors run on AC power", "Servo motors have higher torque"],
    answer: "Servo motors allow for precise control of angular position",
    topic: "Robotics"
  },
  {
    id: 9,
    question: "A DC Geared motor (BO motor) is designed to have _______ compared to a standard DC motor of similar size.",
    options: ["higher speed and lower torque", "lower speed and higher torque", "higher speed and higher torque", "lower speed and lower torque"],
    answer: "lower speed and higher torque",
    topic: "Robotics"
  },
  {
    id: 10,
    question: "The primary function of a diode in a circuit is to:",
    options: ["Amplify the current", "Store electrical charge", "Control the flow of current to one direction", "Resist the flow of current equally in both directions"],
    answer: "Control the flow of current to one direction",
    topic: "Robotics"
  },
  {
    id: 11,
    question: "In a BJT (Bipolar Junction Transistor), which terminal is used to activate or control the flow of current between the collector and emitter?",
    options: ["Collector", "Emitter", "Base", "Anode"],
    answer: "Base",
    topic: "Robotics"
  },
_CHUNKING_DONE_
