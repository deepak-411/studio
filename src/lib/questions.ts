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
  {
    id: 31,
    question: "What is the typical operating voltage range for a standard LED?",
    options: ["0.5V to 1.0V", "1.8V to 3.3V", "5V to 9V", "12V to 24V"],
    answer: "1.8V to 3.3V",
    topic: "Robotics"
  },
  {
    id: 32,
    question: "Which of the following is NOT a primary color in an RGB LED?",
    options: ["Red", "Green", "Blue", "Yellow"],
    answer: "Yellow",
    topic: "Robotics"
  },
  {
    id: 33,
    question: "What is the main purpose of a breadboard?",
    options: ["To permanently solder components", "To test circuits temporarily", "To supply power to a circuit", "To amplify signals"],
    answer: "To test circuits temporarily",
    topic: "Robotics"
  },
  {
    id: 34,
    question: "What is another name for a General Purpose Solderable Board?",
    options: ["Breadboard", "DOT PCB", "Motherboard", "CPU"],
    answer: "DOT PCB",
    topic: "Robotics"
  },
  {
    id: 35,
    question: "What is the basic principle of a battery?",
    options: ["Conversion of mechanical energy to electrical energy", "Conversion of thermal energy to electrical energy", "Conversion of chemical energy to electrical energy", "Conversion of nuclear energy to electrical energy"],
    answer: "Conversion of chemical energy to electrical energy",
    topic: "Robotics"
  },
  {
    id: 36,
    question: "What is the function of a resistor in an electronic circuit?",
    options: ["To store energy", "To amplify current", "To reduce current flow", "To act as a one-way switch"],
    answer: "To reduce current flow",
    topic: "Robotics"
  },
  {
    id: 37,
    question: "What does a capacitor store energy as?",
    options: ["A magnetic field", "An electric charge", "Kinetic energy", "Potential energy"],
    answer: "An electric charge",
    topic: "Robotics"
  },
  {
    id: 38,
    question: "How can you reverse the direction of a simple DC motor?",
    options: ["Increase the voltage", "Decrease the voltage", "Reverse the polarity of the power supply", "Add a capacitor"],
    answer: "Reverse the polarity of the power supply",
    topic: "Robotics"
  },
  {
    id: 39,
    question: "What is the main advantage of a servo motor?",
    options: ["High speed", "High torque", "Precise control of angular position", "Low power consumption"],
    answer: "Precise control of angular position",
    topic: "Robotics"
  },
  {
    id: 40,
    question: "What are the characteristics of a DC Geared motor (BO motor)?",
    options: ["High speed, low torque", "Low speed, high torque", "High speed, high torque", "Low speed, low torque"],
    answer: "Low speed, high torque",
    topic: "Robotics"
  },
  {
    id: 41,
    question: "What is a diode?",
    options: ["A two-way switch for current", "A device that amplifies current", "A one-way switch for current", "A device that stores charge"],
    answer: "A one-way switch for current",
    topic: "Robotics"
  },
  {
    id: 42,
    question: "What is a transistor used for?",
    options: ["To generate light", "To store energy", "To act as a switch or amplifier", "To measure temperature"],
    answer: "To act as a switch or amplifier",
    topic: "Robotics"
  },
  {
    id: 43,
    question: "What is the 'brain' of an Arduino board?",
    options: ["USB port", "Microcontroller", "Digital pins", "Analog pins"],
    answer: "Microcontroller",
    topic: "Robotics"
  },
  {
    id: 44,
    question: "Which type of jumper cable is used to connect a component to a breadboard?",
    options: ["Male-Male", "Male-Female", "Female-Female", "Alligator clips"],
    answer: "Male-Male",
    topic: "Robotics"
  },
  {
    id: 45,
    question: "What is a Berg strip (pin header) used for?",
    options: ["To supply power", "To make connections on circuit boards", "To control motor speed", "To display information"],
    answer: "To make connections on circuit boards",
    topic: "Robotics"
  },
  {
    id: 46,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>",
    topic: "HTML"
  },
  {
    id: 47,
    question: "Which CSS property is used to make text bold?",
    options: ["font-style", "font-weight", "text-decoration", "text-transform"],
    answer: "font-weight",
    topic: "CSS"
  },
  {
    id: 48,
    question: "How do you create a function in JavaScript?",
    options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "create function myFunction()"],
    answer: "function myFunction()",
    topic: "JavaScript"
  },
  {
    id: 49,
    question: "Which of these is NOT a valid JavaScript data type?",
    options: ["string", "number", "boolean", "character"],
    answer: "character",
    topic: "JavaScript"
  },
  {
    id: 50,
    question: "What is the correct way to write a comment in JavaScript that spans multiple lines?",
    options: ["//This is a comment", "<!--This is a comment-->", "/*This is a comment*/", "#This is a comment"],
    answer: "/*This is a comment*/",
    topic: "JavaScript"
  },
  {
    id: 51,
    question: "What does the `alt` attribute in an `<img>` tag provide?",
    options: ["A caption for the image", "A URL to a high-resolution version of the image", "Alternative text for an image if it cannot be displayed", "A title for the image"],
    answer: "Alternative text for an image if it cannot be displayed",
    topic: "HTML"
  },
  {
    id: 52,
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<end>"],
    answer: "<footer>",
    topic: "HTML"
  },
  {
    id: 53,
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    options: ["p {text-size:bold;}", "p {font-weight:bold;}", "p {style:bold;}", "<p style='font-weight:bold;'>"],
    answer: "p {font-weight:bold;}",
    topic: "CSS"
  },
  {
    id: 54,
    question: "How do you make each word in a text start with a capital letter using CSS?",
    options: ["text-transform:capitalize", "text-style:capitalize", "text-transform:uppercase", "You can't do this with CSS"],
    answer: "text-transform:capitalize",
    topic: "CSS"
  },
  {
    id: 55,
    question: "How do you call a function named 'myFunction' in JavaScript?",
    options: ["call myFunction();", "call function myFunction();", "myFunction();", "Call.myFunction();"],
    answer: "myFunction();",
    topic: "JavaScript"
  },
  {
    id: 56,
    question: "How do you write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
    answer: "if (i == 5)",
    topic: "JavaScript"
  },
  {
    id: 57,
    question: "How does a 'for' loop start?",
    options: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5"],
    answer: "for (i = 0; i <= 5; i++)",
    topic: "JavaScript"
  },
  {
    id: 58,
    question: "Which component is known as the 'brain' of the Arduino board?",
    options: ["USB Port", "Microcontroller", "VIN Pin", "GND Pin"],
    answer: "Microcontroller",
    topic: "Robotics"
  },
  {
    id: 59,
    question: "What type of connector is a Berg strip?",
    options: ["A type of battery clip", "A single core wire", "A pin header", "An alligator connector"],
    answer: "A pin header",
    topic: "Robotics"
  },
  {
    id: 60,
    question: "What is the primary use of a hook-up wire?",
    options: ["To connect batteries to DC jacks", "To make temporary connections on breadboards", "For internal wiring of electronic devices", "To clip onto components"],
    answer: "For internal wiring of electronic devices",
    topic: "Robotics"
  }
];
