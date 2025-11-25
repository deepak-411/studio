export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  topic: 'Robotics' | 'AI' | 'HTML' | 'CSS' | 'JavaScript';
};

export const questions: Question[] = [
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
    question: "If you connect three 1.5V LEDs in series to a 9V battery, what is the most likely outcome without a current-limiting resistor?",
    options: ["The LEDs will be very bright", "The LEDs will be dim", "The LEDs will likely be damaged or burn out", "Only the first LED in the series will light up"],
    answer: "The LEDs will likely be damaged or burn out",
    topic: "Robotics"
  },
  {
    id: 7,
    question: "A capacitor stores energy in the form of:",
    options: ["A magnetic field", "An electric field", "Kinetic energy", "Chemical energy"],
    answer: "An electric field",
    topic: "Robotics"
  },
  {
    id: 8,
    question: "To reverse the direction of a simple DC motor, what action should you take?",
    options: ["Increase the voltage", "Decrease the voltage", "Reverse the polarity of the power supply", "Add a resistor to the circuit"],
    answer: "Reverse the polarity of the power supply",
    topic: "Robotics"
  },
  {
    id: 9,
    question: "What is the key difference between a standard DC motor and a servo motor?",
    options: ["Servo motors are faster", "Servo motors allow for precise control of angular position", "Servo motors run on AC power", "Servo motors have higher torque"],
    answer: "Servo motors allow for precise control of angular position",
    topic: "Robotics"
  },
  {
    id: 10,
    question: "A DC Geared motor (BO motor) is designed to have _______ compared to a standard DC motor of similar size.",
    options: ["higher speed and lower torque", "lower speed and higher torque", "higher speed and higher torque", "lower speed and lower torque"],
    answer: "lower speed and higher torque",
    topic: "Robotics"
  },
  {
    id: 11,
    question: "The primary function of a diode in a circuit is to:",
    options: ["Amplify the current", "Store electrical charge", "Control the flow of current to one direction", "Resist the flow of current equally in both directions"],
    answer: "Control the flow of current to one direction",
    topic: "Robotics"
  },
  {
    id: 12,
    question: "In a BJT (Bipolar Junction Transistor), which terminal is used to activate or control the flow of current between the collector and emitter?",
    options: ["Collector", "Emitter", "Base", "Anode"],
    answer: "Base",
    topic: "Robotics"
  },
  {
    id: 13,
    question: "What is the main purpose of the microcontroller on an Arduino board?",
    options: ["To provide power to the circuit", "To connect the board to a computer via USB", "To execute the loaded program (sketch)", "To regulate voltage for external components"],
    answer: "To execute the loaded program (sketch)",
    topic: "Robotics"
  },
  {
    id: 14,
    question: "What does the 'PWM' acronym stand for in the context of Arduino digital pins?",
    options: ["Pulse Width Modulation", "Power Waveform Magnification", "Primary Wave Mode", "Programmable Width Microcontroller"],
    answer: "Pulse Width Modulation",
    topic: "Robotics"
  },
  {
    id: 15,
    question: "Which jumper cable type would you use to connect two female headers together?",
    options: ["Male-Male", "Male-Female", "Female-Female", "Alligator clips"],
    answer: "Male-Male",
    topic: "Robotics"
  },
  {
    id: 16,
    question: "Which HTML tag is used to define the most important heading?",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    answer: "<h1>",
    topic: "HTML"
  },
  {
    id: 17,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<lnbr>"],
    answer: "<br>",
    topic: "HTML"
  },
  {
    id: 18,
    question: "Which CSS property is used to change the background color of an element?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
    topic: "CSS"
  },
  {
    id: 19,
    question: "How do you apply a style to an element with a specific id, for example, `my-element`?",
    options: [".my-element", "#my-element", "my-element", "*my-element"],
    answer: "#my-element",
    topic: "CSS"
  },
  {
    id: 20,
    question: "Which CSS property controls the spacing between letters?",
    options: ["word-spacing", "font-spacing", "letter-spacing", "character-spacing"],
    answer: "letter-spacing",
    topic: "CSS"
  },
  {
    id: 21,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    answer: "<script>",
    topic: "JavaScript"
  },
  {
    id: 22,
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');"],
    answer: "alert('Hello World');",
    topic: "JavaScript"
  },
  {
    id: 23,
    question: "How do you declare a JavaScript variable?",
    options: ["variable carName;", "v carName;", "var carName;", "let carName;"],
    answer: "let carName;",
    topic: "JavaScript"
  },
  {
    id: 24,
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "-", "=", "x"],
    answer: "=",
    topic: "JavaScript"
  },
  {
    id: 25,
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["false", "true", "NaN", "undefined"],
    answer: "true",
    topic: "JavaScript"
  },
   {
    id: 26,
    question: "What is the purpose of the 'VIN' pin on an Arduino Uno?",
    options: ["To provide a 5V output", "To provide a 3.3V output", "To serve as a ground connection", "To supply external power to the board"],
    answer: "To supply external power to the board",
    topic: "Robotics"
  },
   {
    id: 27,
    question: "In CSS, what is the 'box model'?",
    options: ["A model for 3D transformations", "A layout paradigm that includes content, padding, border, and margin", "A way to organize CSS files", "A special type of HTML element"],
    answer: "A layout paradigm that includes content, padding, border, and margin",
    topic: "CSS"
  },
  {
    id: 28,
    question: "Which JavaScript method is used to select an HTML element by its ID?",
    options: ["document.querySelector()", "document.getElementById()", "document.getElement()", "document.selectId()"],
    answer: "document.getElementById()",
    topic: "JavaScript"
  },
  {
    id: 29,
    question: "The ATmega328P microcontroller on the Arduino UNO has how much Flash Memory for storing sketches?",
    options: ["1KB", "16KB", "32KB", "128KB"],
    answer: "32KB",
    topic: "Robotics"
  },
  {
    id: 30,
    question: "What does the `href` attribute in an `<a>` tag specify?",
    options: ["The link's text", "The target of the link (URL)", "The style of the link", "The alignment of the link"],
    answer: "The target of the link (URL)",
    topic: "HTML"
  },
];
