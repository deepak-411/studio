
export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  topic: 'Robotics' | 'AI' | 'HTML' | 'CSS' | 'JavaScript';
};

export const questions: Question[] = [
  // --- Robotics Questions from Text ---
  {
    id: 1,
    question: "What identifies the positive terminal of an LED?",
    options: ["The shorter lead", "The longer lead", "The black-colored lead", "The flat side of the casing"],
    answer: "The longer lead",
    topic: "Robotics"
  },
  {
    id: 2,
    question: "What is the typical operating voltage range for a standard LED?",
    options: ["0.5V to 1.5V", "1.8V to 3.3V", "5V to 10V", "12V to 24V"],
    answer: "1.8V to 3.3V",
    topic: "Robotics"
  },
  {
    id: 3,
    question: "How do you make an LED glow using a battery?",
    options: ["Connect both leads to the positive terminal", "Connect the positive lead to the negative terminal and vice versa", "Connect the positive lead to the positive terminal and the negative lead to the negative terminal", "It depends on the color of the LED"],
    answer: "Connect the positive lead to the positive terminal and the negative lead to the negative terminal",
    topic: "Robotics"
  },
  {
    id: 4,
    question: "What component is used to supply the correct voltage to an LED if the battery voltage is too high?",
    options: ["Capacitor", "Diode", "Transistor", "Resistor"],
    answer: "Resistor",
    topic: "Robotics"
  },
  {
    id: 5,
    question: "An RGB LED can produce which three primary colors?",
    options: ["Red, Yellow, Blue", "Red, Green, Blue", "Cyan, Magenta, Yellow", "Orange, Purple, Green"],
    answer: "Red, Green, Blue",
    topic: "Robotics"
  },
  {
    id: 6,
    question: "How many leads does a standard RGB LED have?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    topic: "Robotics"
  },
  {
    id: 7,
    question: "What is the main purpose of a breadboard?",
    options: ["To permanently solder components", "To test circuits temporarily", "To supply power to circuits", "To amplify signals"],
    answer: "To test circuits temporarily",
    topic: "Robotics"
  },
  {
    id: 8,
    question: "How are the pins in the central part of a breadboard (not the power rails) typically connected?",
    options: ["Horizontally", "Vertically", "In pairs", "They are all separate"],
    answer: "Vertically",
    topic: "Robotics"
  },
  {
    id: 9,
    question: "What is a major advantage of a 'solderable board' (DOT PCB) over a breadboard?",
    options: ["It is cheaper", "It is easier to change components", "It creates semi-permanent, more reliable connections", "It requires no tools"],
    answer: "It creates semi-permanent, more reliable connections",
    topic: "Robotics"
  },
  {
    id: 10,
    question: "What energy conversion happens inside a battery?",
    options: ["Mechanical to Electrical", "Thermal to Electrical", "Chemical to Electrical", "Light to Electrical"],
    answer: "Chemical to Electrical",
    topic: "Robotics"
  },
  {
    id: 11,
    question: "Which type of battery cannot be recharged after being exhausted?",
    options: ["Li-ion batteries", "Rechargeable batteries", "Non-Rechargeable batteries", "All batteries can be recharged"],
    answer: "Non-Rechargeable batteries",
    topic: "Robotics"
  },
  {
    id: 12,
    question: "What is the main function of a resistor in an electronic circuit?",
    options: ["To store energy", "To amplify current", "To reduce current flow", "To act as a one-way switch"],
    answer: "To reduce current flow",
    topic: "Robotics"
  },
  {
    id: 13,
    question: "Do resistors have polarity?",
    options: ["Yes, they must be connected in a specific direction", "No, they can be connected either way", "Only high-value resistors have polarity", "Only low-value resistors have polarity"],
    answer: "No, they can be connected either way",
    topic: "Robotics"
  },
  {
    id: 14,
    question: "A capacitor stores energy in the form of:",
    options: ["A magnetic field", "An electric field", "Chemical energy", "Kinetic energy"],
    answer: "An electric field",
    topic: "Robotics"
  },
  {
    id: 15,
    question: "What happens to the equivalent capacitance when multiple capacitors are connected in series?",
    options: ["It increases", "It stays the same", "It becomes lesser", "It becomes zero"],
    answer: "It becomes lesser",
    topic: "Robotics"
  },
  {
    id: 16,
    question: "How do you reverse the direction of a simple DC motor?",
    options: ["Increase the voltage", "Add a capacitor", "Reverse the polarity of the power supply", "Decrease the current"],
    answer: "Reverse the polarity of the power supply",
    topic: "Robotics"
  },
  {
    id: 17,
    question: "What is the key advantage of a servo motor over a standard DC motor?",
    options: ["It is much faster", "It consumes less power", "It allows for precise control of position", "It is smaller in size"],
    answer: "It allows for precise control of position",
    topic: "Robotics"
  },
  {
    id: 18,
    question: "A DC Geared motor (BO motor) is designed to provide:",
    options: ["Higher speed and lower torque", "Lower speed and higher torque", "Higher speed and higher torque", "Variable speed and variable torque"],
    answer: "Lower speed and higher torque",
    topic: "Robotics"
  },
  {
    id: 19,
    question: "A diode acts as a:",
    options: ["Two-way switch", "Current amplifier", "Voltage regulator", "One-way switch"],
    answer: "One-way switch",
    topic: "Robotics"
  },
  {
    id: 20,
    question: "What are the two terminals of a diode called?",
    options: ["Positive and Negative", "Anode and Cathode", "Collector and Emitter", "Source and Drain"],
    answer: "Anode and Cathode",
    topic: "Robotics"
  },
  {
    id: 21,
    question: "A transistor can act as both a switch and an:",
    options: ["Amplifier", "Resistor", "Capacitor", "Inductor"],
    answer: "Amplifier",
    topic: "Robotics"
  },
  {
    id: 22,
    question: "Which terminal of a transistor is used to activate it or control the flow of current?",
    options: ["Collector", "Emitter", "Base", "Gate"],
    answer: "Base",
    topic: "Robotics"
  },
  {
    id: 23,
    question: "What is the 'brain' of an Arduino board called?",
    options: ["USB Port", "Microcontroller", "Voltage Regulator", "Capacitor Bank"],
    answer: "Microcontroller",
    topic: "Robotics"
  },
  {
    id: 24,
    question: "What type of pins on an Arduino board read values from 0-1023?",
    options: ["Digital pins", "Analog pins", "Power pins", "GND pins"],
    answer: "Analog pins",
    topic: "Robotics"
  },
  {
    id: 25,
    question: "Which Arduino board is most recommended for beginners?",
    options: ["Arduino Nano", "Arduino Mega", "Arduino UNO", "Arduino LilyPad"],
    answer: "Arduino UNO",
    topic: "Robotics"
  },
  {
    id: 26,
    question: "What is the primary function of hook-up wires?",
    options: ["To resist current flow", "To store charge", "To make internal wirings of electronic devices", "To amplify signals"],
    answer: "To make internal wirings of electronic devices",
    topic: "Robotics"
  },
  {
    id: 27,
    question: "What is a key advantage of jumper cables over normal hook-up wires for breadboarding?",
    options: ["They can handle more current", "They are better for permanent circuits", "They don't need to be stripped and can be plugged in directly", "They are insulated with a special material"],
    answer: "They don't need to be stripped and can be plugged in directly",
    topic: "Robotics"
  },
  {
    id: 28,
    question: "A berg strip is also known as a:",
    options: ["Jumper Cable", "Pin Header", "Alligator Clip", "DC Jack"],
    answer: "Pin Header",
    topic: "Robotics"
  },
  {
    id: 29,
    question: "What is a 'crocodile connector' also known as?",
    options: ["Alligator connector", "DC Jack", "Berg Strip", "Jumper cable"],
    answer: "Alligator connector",
    topic: "Robotics"
  },
  {
    id: 30,
    question: "The material 'phenolic' used in solderable boards is obtained from:",
    options: ["Petroleum products", "Synthetic polymers", "A variety of plant based foods", "Recycled metals"],
    answer: "A variety of plant based foods",
    topic: "Robotics"
  },
  {
    id: 31,
    question: "What safety measure is advised for LEDs?",
    options: ["Supplying a very high voltage", "Touching the leads while on", "Don’t put the LED close to the eyes", "Connecting it in reverse polarity"],
    answer: "Don’t put the LED close to the eyes",
    topic: "Robotics"
  },
  {
    id: 32,
    question: "In an RGB LED, how can you generate colors other than Red, Green, or Blue?",
    options: ["By changing the voltage", "By changing the intensity of each of the three colors", "By reversing the polarity", "It's not possible"],
    answer: "By changing the intensity of each of the three colors",
    topic: "Robotics"
  },
  {
    id: 33,
    question: "What should you never do on a breadboard?",
    options: ["Use jumper wires", "Solder the components", "Connect a battery", "Use it for complex circuits"],
    answer: "Solder the components",
    topic: "Robotics"
  },
  {
    id: 34,
    question: "What is the convention for the color of the positive and negative wires for a battery?",
    options: ["Red is negative, Black is positive", "Blue is positive, Green is negative", "Red is positive, Black is negative", "Both are interchangeable"],
    answer: "Red is positive, Black is negative",
    topic: "Robotics"
  },
  {
    id: 35,
    question: "What does a DC Geared motor offer compared to a regular DC motor?",
    options: ["Higher speed, lower torque", "Lower speed, higher torque", "Higher speed, higher torque", "It is quieter"],
    answer: "Lower speed, higher torque",
    topic: "Robotics"
  },
  {
    id: 36,
    question: "What is the main purpose of a servo motor?",
    options: ["Continuous rotation at high speed", "To convert AC to DC", "To provide precise control of angular or linear position", "To reduce the overall current of the circuit"],
    answer: "To provide precise control of angular or linear position",
    topic: "Robotics"
  },
  {
    id: 37,
    question: "The 'brain' of the Arduino that executes programs is the:",
    options: ["USB Port", "Digital Pins", "Power Jack", "Microcontroller"],
    answer: "Microcontroller",
    topic: "Robotics"
  },
  {
    id: 38,
    question: "The Arduino programming language is based on:",
    options: ["Python", "Java", "Wiring", "C++"],
    answer: "Wiring",
    topic: "Robotics"
  },
  {
    id: 39,
    question: "What is the function of the GND pin on an Arduino?",
    options: ["To supply 5V", "To read analog input", "To complete a circuit (0 volts)", "To upload the code"],
    answer: "To complete a circuit (0 volts)",
    topic: "Robotics"
  },
  {
    id: 40,
    question: "The Arduino UNO board is based on which microcontroller?",
    options: ["ATmega2560", "ATmega328P", "ESP32", "Raspberry Pi Pico"],
    answer: "ATmega328P",
    topic: "Robotics"
  },
  {
    id: 41,
    question: "What is a primary application for a diode?",
    options: ["To produce light", "To act as a rectifier", "To store charge", "To amplify signals"],
    answer: "To act as a rectifier",
    topic: "Robotics"
  },
  {
    id: 42,
    question: "A transistor has which three terminals?",
    options: ["Anode, Cathode, Gate", "Source, Drain, Gate", "Emitter, Base, Collector", "Pin 1, Pin 2, Pin 3"],
    answer: "Emitter, Base, Collector",
    topic: "Robotics"
  },
  {
    id: 43,
    question: "What is the main difference between male and female jumper cables?",
    options: ["The color", "The length", "The type of connector end (pin or hole)", "The material they are made of"],
    answer: "The type of connector end (pin or hole)",
    topic: "Robotics"
  },
  {
    id: 44,
    question: "Which of these is a common application for servo motors?",
    options: ["Electric fans", "Car starter motors", "Robotic arms", "Microwave turntables"],
    answer: "Robotic arms",
    topic: "Robotics"
  },
  {
    id: 45,
    question: "A 'DOT PCB' is another name for what?",
    options: ["Breadboard", "Arduino UNO", "Solderable board", "Alligator connector"],
    answer: "Solderable board",
    topic: "Robotics"
  },
  {
    id: 46,
    question: "If you connect multiple LEDs in series, what happens to their brightness?",
    options: ["It increases", "It stays the same", "It dips or decreases", "Some get brighter, some get dimmer"],
    answer: "It dips or decreases",
    topic: "Robotics"
  },
  {
    id: 47,
    question: "What does the 'P' in 'ATmega328P' on an Arduino UNO signify?",
    options: ["Professional", "Power", "PicoPower technology", "Programmable"],
    answer: "PicoPower technology",
    topic: "Robotics"
  },
  {
    id: 48,
    question: "Which of the following is NOT a good use for a breadboard?",
    options: ["Prototyping a simple LED circuit", "Testing a sensor connection", "Making a final, permanent product", "Holding components for easy connection"],
    answer: "Making a final, permanent product",
    topic: "Robotics"
  },
  {
    id: 49,
    question: "What is a safety measure for using a soldering iron on a perf board?",
    options: ["Use a lot of soldering wire", "Keep the iron on the board for a long time to ensure a good connection", "Don’t put the soldering iron in contact with the board for a long time", "Solder on the non-copper side"],
    answer: "Don’t put the soldering iron in contact with the board for a long time",
    topic: "Robotics"
  },
  {
    id: 50,
    question: "What is the purpose of a DC Jack on a battery clip?",
    options: ["To charge the battery", "To provide a pluggable power output", "To clip onto a belt", "To connect multiple batteries together"],
    answer: "To provide a pluggable power output",
    topic: "Robotics"
  },
  {
    id: 51,
    question: "A mini-breadboard typically has how many pins?",
    options: ["100", "400", "800", "1200"],
    answer: "400",
    topic: "Robotics"
  },
  {
    id: 52,
    question: "Which Arduino board is described as small, sustainable, and flexible?",
    options: ["UNO", "Mega", "Nano", "Due"],
    answer: "Nano",
    topic: "Robotics"
  },
  {
    id: 53,
    question: "What does the VIN pin on an Arduino stand for?",
    options: ["Variable Input", "Voltage In", "Verified Input", "Voltage Internal"],
    answer: "Voltage In",
    topic: "Robotics"
  },
  {
    id: 54,
    question: "What is the primary danger of overcharging a battery?",
    options: ["It loses its color", "It can get damaged or explode", "It becomes non-rechargeable", "It reverses polarity"],
    answer: "It can get damaged or explode",
    topic: "Robotics"
  },
  {
    id: 55,
    question: "A normal-sized breadboard usually has how many pins?",
    options: ["400", "600", "800", "1000"],
    answer: "800",
    topic: "Robotics"
  },
  {
    id: 56,
    question: "What tool is used to strip insulation from hook-up wires?",
    options: ["Pliers", "Wire stripper plier", "Scissors", "A knife"],
    answer: "Wire stripper plier",
    topic: "Robotics"
  },
  {
    id: 57,
    question: "What does 'ICSP' on an Arduino UNO board stand for?",
    options: ["Internal Circuit Signal Processor", "In-Circuit Serial Programming", "Integrated Chip System Power", "Internal Component Soldering Point"],
    answer: "In-Circuit Serial Programming",
    topic: "Robotics"
  },
  {
    id: 58,
    question: "Which component is used in cameras and fans to store and release energy quickly?",
    options: ["Resistor", "Diode", "Transistor", "Capacitor"],
    answer: "Capacitor",
    topic: "Robotics"
  },
  {
    id: 59,
    question: "What is the recommended input voltage for an Arduino UNO?",
    options: ["5V", "3.3V", "7-12V", "6-20V"],
    answer: "7-12V",
    topic: "Robotics"
  },
  {
    id: 60,
    question: "What does 'BO' in BO motor stand for?",
    options: ["Bolt-On", "Back-Oriented", "Battery Operated", "Base Output"],
    answer: "Battery Operated",
    topic: "Robotics"
  },
  {
    id: 61,
    question: "In the context of the text, what is a 'perf board'?",
    options: ["A mini breadboard", "A board for performance testing", "A solderable board (DOT PCB)", "A type of Arduino"],
    answer: "A solderable board (DOT PCB)",
    topic: "Robotics"
  },
  {
    id: 62,
    question: "What is a safety measure for alligator connectors?",
    options: ["Only use them on soft materials", "Don’t touch the metallic jaw when at high voltage", "Always use them for permanent connections", "Solder them for better contact"],
    answer: "Don’t touch the metallic jaw when at high voltage",
    topic: "Robotics"
  },
  {
    id: 63,
    question: "Arduino is an open-source platform based on easy-to-use hardware and ______.",
    options: ["software", "firmware", "shareware", "adware"],
    answer: "software",
    topic: "Robotics"
  },
  {
    id: 64,
    question: "How many digital I/O pins does an Arduino UNO have?",
    options: ["6", "8", "14", "20"],
    answer: "14",
    topic: "Robotics"
  },
  {
    id: 65,
    question: "What is the clock speed of the Arduino UNO's microcontroller?",
    options: ["8 MHz", "16 MHz", "20 MHz", "100 MHz"],
    answer: "16 MHz",
    topic: "Robotics"
  },
  {
    id: 66,
    question: "What is the amount of flash memory in an Arduino UNO?",
    options: ["16 KB", "32 KB", "64 KB", "128 KB"],
    answer: "32 KB",
    topic: "Robotics"
  },
  {
    id: 67,
    question: "What is the purpose of the USB to Serial chip on an Arduino?",
    options: ["To power the board", "To translate data between the computer and microcontroller", "To store the program", "To connect to Wi-Fi"],
    answer: "To translate data between the computer and microcontroller",
    topic: "Robotics"
  },
  {
    id: 68,
    question: "What should you do if a rechargeable battery is exhausted?",
    options: ["Throw it away", "Charge it", "Connect it to a higher voltage source", "Shake it vigorously"],
    answer: "Charge it",
    topic: "Robotics"
  },
  {
    id: 69,
    question: "What is the main advantage of a DC Geared motor?",
    options: ["High speed", "High torque", "Low noise", "Small size"],
    answer: "High torque",
    topic: "Robotics"
  },
  {
    id: 70,
    question: "What happens when you reverse the polarity of a DC motor's connection?",
    options: ["The motor stops", "The motor's speed increases", "The motor's direction of rotation reverses", "The motor gets damaged"],
    answer: "The motor's direction of rotation reverses",
    topic: "Robotics"
  },
  {
    id: 71,
    question: "Which type of motor is best for applications requiring precise angular position control?",
    options: ["DC Motor", "Servo Motor", "BO Motor", "Stepper Motor"],
    answer: "Servo Motor",
    topic: "Robotics"
  },
  {
    id: 72,
    question: "What is the function of the 'Base' terminal in a transistor?",
    options: ["It is the negative lead", "It is the positive lead", "It activates the transistor", "It collects the current"],
    answer: "It activates the transistor",
    topic: "Robotics"
  },
  {
    id: 73,
    question: "What is the primary material used to make solderable boards (perf boards)?",
    options: ["Plastic", "Aluminum", "Phenolic", "Fiberglass"],
    answer: "Phenolic",
    topic: "Robotics"
  },
  {
    id: 74,
    question: "A 'berg strip' is another name for a...",
    options: ["Jumper wire", "Resistor", "Pin header", "Diode"],
    answer: "Pin header",
    topic: "Robotics"
  },
  {
    id: 75,
    question: "Which type of jumper cable end can be plugged directly into a breadboard hole?",
    options: ["Male end", "Female end", "Alligator end", "Clipped end"],
    answer: "Male end",
    topic: "Robotics"
  },
  {
    id: 76,
    question: "What is a major safety concern when working with batteries?",
    options: ["Storing them in the cold", "Dropping them", "Overcharging them", "Using them with LEDs"],
    answer: "Overcharging them",
    topic: "Robotics"
  },
  {
    id: 77,
    question: "The power rails on a breadboard are typically used for what?",
    options: ["Connecting ICs", "Providing power and ground", "Connecting signal wires", "Holding screws"],
    answer: "Providing power and ground",
    topic: "Robotics"
  },
  {
    id: 78,
    question: "What does the 'GND' pin on an Arduino signify?",
    options: ["General N-type Diode", "Generated Node", "Ground (0 volts)", "Green LED"],
    answer: "Ground (0 volts)",
    topic: "Robotics"
  },
  {
    id: 79,
    question: "The Arduino IDE uses a programming language based on...",
    options: ["Python", "Java", "Wiring", "Assembly"],
    answer: "Wiring",
    topic: "Robotics"
  },
  {
    id: 80,
    question: "How much SRAM does the Arduino UNO have?",
    options: ["1 KB", "2 KB", "4 KB", "8 KB"],
    answer: "2 KB",
    topic: "Robotics"
  },
  {
    id: 81,
    question: "Which component allows current to flow in only one direction?",
    options: ["Resistor", "Capacitor", "Diode", "Transistor"],
    answer: "Diode",
    topic: "Robotics"
  },
  {
    id: 82,
    question: "What is a common application for a capacitor?",
    options: ["Reducing current", "Amplifying signals", "Storing and releasing charge", "Generating light"],
    answer: "Storing and releasing charge",
    topic: "Robotics"
  },
  {
    id: 83,
    question: "If you want to make a permanent circuit, which of these is the best choice?",
    options: ["Breadboard", "Alligator clips", "Solderable board (DOT PCB)", "Jumper cables"],
    answer: "Solderable board (DOT PCB)",
    topic: "Robotics"
  },
  {
    id: 84,
    question: "What does 'PCB' stand for?",
    options: ["Primary Circuit Base", "Printed Circuit Board", "Processor Control Block", "Power Connection Bus"],
    answer: "Printed Circuit Board",
    topic: "Robotics"
  },
  {
    id: 85,
    question: "What is the negative terminal of an LED called?",
    options: ["Anode", "Cathode", "Base", "Collector"],
    answer: "Cathode",
    topic: "Robotics"
  },
  {
    id: 86,
    question: "How can you produce the color purple with an RGB LED?",
    options: ["Turn on only the Red and Green LEDs", "Turn on only the Green and Blue LEDs", "Turn on only the Red and Blue LEDs", "Turn on all three LEDs at full intensity"],
    answer: "Turn on only the Red and Blue LEDs",
    topic: "Robotics"
  },
  {
    id: 87,
    question: "A transistor is considered one of the most important inventions because it acts as a switch and a(n)...",
    options: ["resistor", "capacitor", "amplifier", "diode"],
    answer: "amplifier",
    topic: "Robotics"
  },
  {
    id: 88,
    question: "What is the typical voltage supplied by the 3.3V pin on an Arduino?",
    options: ["3.3V", "5V", "7V", "12V"],
    answer: "3.3V",
    topic: "Robotics"
  },
  {
    id: 89,
    question: "What is a 'Li-ion' battery an example of?",
    options: ["A non-rechargeable battery", "A rechargeable battery", "A type of capacitor", "A type of resistor"],
    answer: "A rechargeable battery",
    topic: "Robotics"
  },
  {
    id: 90,
    question: "A resistor's primary purpose is to create electrical...",
    options: ["capacitance", "inductance", "resistance", "conductance"],
    answer: "resistance",
    topic: "Robotics"
  },
  {
    id: 91,
    question: "Which Arduino board is the smallest in the text's list?",
    options: ["UNO", "Mega", "Nano", "It is not specified"],
    answer: "Nano",
    topic: "Robotics"
  },
  {
    id: 92,
    question: "What tool is essential for working with a 'DOT PCB' that isn't used with a breadboard?",
    options: ["Pliers", "Wire strippers", "Soldering iron", "Screwdriver"],
    answer: "Soldering iron",
    topic: "Robotics"
  },
  {
    id: 93,
    question: "What is the main feature of an alligator connector?",
    options: ["It solders wires together", "It has jaws for temporary clipping", "It fits into a breadboard", "It can only be used with batteries"],
    answer: "It has jaws for temporary clipping",
    topic: "Robotics"
  },
  {
    id: 94,
    question: "What does 'I/O' in 'Digital I/O Pins' stand for?",
    options: ["Internal/Output", "Input/Output", "Integrated/Oscillator", "Inductor/Operator"],
    answer: "Input/Output",
    topic: "Robotics"
  },
  {
    id: 95,
    question: "What is the function of a 'bootloader' on an Arduino?",
    options: ["It powers the board", "It's a small program that allows uploading code without extra hardware", "It regulates the voltage", "It connects the board to the internet"],
    answer: "It's a small program that allows uploading code without extra hardware",
    topic: "Robotics"
  },
  {
    id: 96,
    question: "How many analog input pins are on an Arduino UNO?",
    options: ["4", "6", "8", "14"],
    answer: "6",
    topic: "Robotics"
  },
  {
    id: 97,
    question: "What is a common use for resistors in an LED circuit?",
    options: ["To make the light brighter", "To change the color of the light", "To limit the current and prevent the LED from burning out", "To make the LED blink"],
    answer: "To limit the current and prevent the LED from burning out",
    topic: "Robotics"
  },
  {
    id: 98,
    question: "In a capacitor, energy is stored in a(n) ______ field.",
    options: ["magnetic", "gravitational", "nuclear", "electric"],
    answer: "electric",
    topic: "Robotics"
  },
  {
    id: 99,
    question: "The wheels provided with BO motors are typically...",
    options: ["permanently attached", "detachable", "made of metal", "magnetic"],
    answer: "detachable",
    topic: "Robotics"
  },
  {
    id: 100,
    question: "What is a common safety tip for using transistors?",
    options: ["Always connect them backwards first", "Don't use voltages higher than their specified limits", "Touch all three leads at once to test them", "Cool them with water"],
    answer: "Don't use voltages higher than their specified limits",
    topic: "Robotics"
  },

  // --- HTML/CSS/JS Questions ---
  {
    id: 101,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language",
    topic: "HTML"
  },
  {
    id: 102,
    question: "Which HTML tag is used to define an unordered list (a bulleted list)?",
    options: ["<ol>", "<list>", "<li>", "<ul>"],
    answer: "<ul>",
    topic: "HTML"
  },
  {
    id: 103,
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    answer: "<br>",
    topic: "HTML"
  },
  {
    id: 104,
    question: "Which character is used to indicate an end tag in HTML?",
    options: ["^", "/", "*", "<"],
    answer: "/",
    topic: "HTML"
  },
  {
    id: 105,
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
topic: "CSS"
  },
  {
    id: 106,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "styles", "font"],
    answer: "style",
    topic: "CSS"
  },
  {
    id: 107,
    question: "Which is the correct CSS syntax?",
    options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    answer: "body {color: black;}",
    topic: "CSS"
  },
  {
    id: 108,
    question: "How do you insert a comment in a CSS file?",
    options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "<!-- this is a comment -->"],
    answer: "/* this is a comment */",
    topic: "CSS"
  },
  {
    id: 109,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    answer: "<script>",
    topic: "JavaScript"
  },
  {
    id: 110,
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
    answer: "alert('Hello World');",
    topic: "JavaScript"
  },
  {
    id: 111,
    question: "How do you create a function in JavaScript?",
    options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "create function myFunction()"],
    answer: "function myFunction()",
    topic: "JavaScript"
  },
  {
    id: 112,
    question: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "myFunction()", "call function myFunction()", "run myFunction()"],
    answer: "myFunction()",
    topic: "JavaScript"
  },
  {
    id: 113,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>",
    topic: "HTML"
  },
  {
    id: 114,
    question: "Which attribute specifies the URL of the page the link goes to?",
    options: ["src", "link", "href", "url"],
    answer: "href",
    topic: "HTML"
  },
  {
    id: 115,
    question: "How can you make a numbered list?",
    options: ["<ul>", "<dl>", "<ol>", "<list>"],
    answer: "<ol>",
    topic: "HTML"
  },
  {
    id: 116,
    question: "Which CSS property is used to change the background color of an element?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
    topic: "CSS"
  },
  {
    id: 117,
    question: "How do you select an element with id 'demo' in CSS?",
    options: [".demo", "#demo", "demo", "*demo"],
    answer: "#demo",
    topic: "CSS"
  },
  {
    id: 118,
    question: "How do you select elements with class name 'test' in CSS?",
    options: ["#test", "test", ".test", "*test"],
    answer: ".test",
    topic: "CSS"
  },
  {
    id: 119,
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
    answer: "if (i == 5)",
    topic: "JavaScript"
  },
  {
    id: 120,
    question: "How do you declare a JavaScript variable?",
    options: ["v carName;", "variable carName;", "var carName;", "string carName;"],
    answer: "var carName;",
    topic: "JavaScript"
  },
  {
    id: 121,
    question: "What is the correct HTML for creating a checkbox?",
    options: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
    answer: "<input type='checkbox'>",
    topic: "HTML"
  },
  {
    id: 122,
    question: "Which HTML tag is used to define a table?",
    options: ["<tab>", "<table>", "<tr>", "<td>"],
    answer: "<table>",
    topic: "HTML"
  },
  {
    id: 123,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
    topic: "CSS"
  },
  {
    id: 124,
    question: "What is the default value of the `position` property in CSS?",
    options: ["relative", "fixed", "absolute", "static"],
    answer: "static",
    topic: "CSS"
  },
  {
    id: 125,
    question: "Which JavaScript operator is used to assign a value to a variable?",
    options: ["=", "*", "-", "x"],
    answer: "=",
    topic: "JavaScript"
  },
  {
    id: 126,
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["false", "true", "NaN", "undefined"],
    answer: "true",
    topic: "JavaScript"
  },
  {
    id: 127,
    question: "Which HTML element is used to specify a header for a document or section?",
    options: ["<head>", "<header>", "<h1>", "<top>"],
    answer: "<header>",
    topic: "HTML"
  },
  {
    id: 128,
    question: "What is the correct HTML for adding a background color?",
    options: ["<body bg='yellow'>", "<background>yellow</background>", "<body style='background-color:yellow;'>", "<body color='yellow'>"],
    answer: "<body style='background-color:yellow;'>",
    topic: "HTML"
  },
  {
    id: 129,
    question: "How do you make text bold in CSS?",
    options: ["font-weight: bold;", "font-style: bold;", "text-decoration: bold;", "text-weight: bold;"],
    answer: "font-weight: bold;",
    topic: "CSS"
  },
  {
    id: 130,
    question: "Which property is used to change the font of an element?",
    options: ["font-style", "font-family", "font-weight", "font-variant"],
    answer: "font-family",
    topic: "CSS"
  },
  {
    id: 131,
    question: "Which HTML element defines the title of a document?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    answer: "<title>",
    topic: "HTML"
  },
  {
    id: 132,
    question: "Which HTML element is a container for all the visible contents of a webpage?",
    options: ["<body>", "<head>", "<main>", "<div>"],
    answer: "<body>",
    topic: "HTML"
  },
  {
    id: 133,
    question: "How do you add a background color for all <h1> elements in CSS?",
    options: ["h1 {background-color: #FFFFFF;}", "all.h1 {background-color: #FFFFFF;}", "h1.all {background-color: #FFFFFF;}", "h1 {bgcolor: #FFFFFF;}"],
    answer: "h1 {background-color: #FFFFFF;}",
    topic: "CSS"
  },
  {
    id: 134,
    question: "Which CSS property is used to change the left margin of an element?",
    options: ["padding-left", "margin-left", "indent-left", "spacing-left"],
    answer: "margin-left",
    topic: "CSS"
  },
  {
    id: 135,
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'"],
    answer: "var colors = ['red', 'green', 'blue']",
    topic: "JavaScript"
  },
  {
    id: 136,
    question: "How do you round the number 7.25 to the nearest integer?",
    options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)",
    topic: "JavaScript"
  },
  {
    id: 137,
    question: "Which tag is used to display an image in HTML?",
    options: ["<img>", "<pic>", "<image>", "<picture>"],
    answer: "<img>",
    topic: "HTML"
  },
  {
    id: 138,
    question: "What attribute is required for an <img> tag to display the image?",
    options: ["href", "alt", "src", "link"],
    answer: "src",
    topic: "HTML"
  },
  {
    id: 139,
    question: "Which tag defines the most important heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
    topic: "HTML"
  },
  {
    id: 140,
    question: "Which tag is used to define a paragraph?",
    options: ["<paragraph>", "<p>", "<para>", "<text>"],
    answer: "<p>",
    topic: "HTML"
  },
  {
    id: 141,
    question: "Which CSS property defines the space between letters?",
    options: ["letter-spacing", "spacing", "font-spacing", "character-spacing"],
    answer: "letter-spacing",
    topic: "CSS"
  },
  {
    id: 142,
    question: "How do you make each word in a text start with a capital letter using CSS?",
    options: ["text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "font-transform: capitalize;"],
    answer: "text-transform: capitalize;",
    topic: "CSS"
  },
  {
    id: 143,
    question: "Which property is used to control the space between the element's border and its content?",
    options: ["margin", "spacing", "padding", "border-spacing"],
    answer: "padding",
    topic: "CSS"
  },
  {
    id: 144,
    question: "How do you group selectors in CSS?",
    options: ["Separate each selector with a comma", "Separate each selector with a plus sign", "Separate each selector with a space", "You cannot group selectors"],
    answer: "Separate each selector with a comma",
    topic: "CSS"
  },
  {
    id: 145,
    question: "Which event occurs when the user clicks on an HTML element in JavaScript?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick",
    topic: "JavaScript"
  },
  {
    id: 146,
    question: "How can you add a single-line comment in JavaScript?",
    options: ["<!--This is a comment-->", "'This is a comment", "//This is a comment", "/*This is a comment*/"],
    answer: "//This is a comment",
    topic: "JavaScript"
  },
  {
    id: 147,
    question: "How can you find the number with the highest value of x and y in JavaScript?",
    options: ["Math.max(x, y)", "ceil(x, y)", "top(x, y)", "Math.ceil(x, y)"],
    answer: "Math.max(x, y)",
    topic: "JavaScript"
  },
  {
    id: 148,
    question: "What is the standard way to end a JavaScript statement?",
    options: ["A period (.)", "A colon (:)", "A semicolon (;)", "A comma (,)"],
    answer: "A semicolon (;)",
    topic: "JavaScript"
  },
  {
    id: 149,
    question: "In HTML, which attribute is used to provide an alternative text for an image if it cannot be displayed?",
    options: ["title", "src", "longdesc", "alt"],
    answer: "alt",
    topic: "HTML"
  },
  {
    id: 150,
    question: "Which doctype is correct for HTML5?",
    options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 5.0//EN'>", "<!DOCTYPE HTML V5>"],
    answer: "<!DOCTYPE html>",
    topic: "HTML"
  },
  {
    id: 151,
    question: "Which CSS property is used to create space around elements, outside of any defined borders?",
    options: ["padding", "border", "margin", "spacing"],
    answer: "margin",
    topic: "CSS"
  },
  {
    id: 152,
    question: "In CSS, what is the correct way to select all <p> elements inside a <div> element?",
    options: ["div + p", "div p", "div > p", "div.p"],
    answer: "div p",
    topic: "CSS"
  },
  {
    id: 153,
    question: "Which built-in JavaScript method returns the length of a string?",
    options: ["size()", "length", "index", "count()"],
    answer: "length",
    topic: "JavaScript"
  },
  {
    id: 154,
    question: "Which of the following is not a reserved word in JavaScript?",
    options: ["interface", "throws", "program", "short"],
    answer: "program",
    topic: "JavaScript"
  },
  {
    id: 155,
    question: "Which HTML tag is used to create a form?",
    options: ["<form>", "<input>", "<formdata>", "<fieldset>"],
    answer: "<form>",
    topic: "HTML"
  },
  {
    id: 156,
    question: "How can you open a link in a new tab/browser window?",
    options: ["<a href='url' new>", "<a href='url' target='_blank'>", "<a href='url' target='new'>", "<a href='url' window='new'>"],
    answer: "<a href='url' target='_blank'>",
    topic: "HTML"
  },
  {
    id: 157,
    question: "How do you apply a style to all elements of the same type (e.g., all paragraphs)?",
    options: ["ID Selector", "Class Selector", "Universal Selector (*)", "Type Selector (e.g., p)"],
    answer: "Type Selector (e.g., p)",
    topic: "CSS"
  },
  {
    id: 158,
    question: "What are the four main components of the CSS 'box model'?",
    options: ["Margin, Border, Padding, Content", "Width, Height, Color, Background", "Flexbox, Grid, Position", "Selectors, Properties, Values"],
    answer: "Margin, Border, Padding, Content",
    topic: "CSS"
  },
  {
    id: 159,
    question: "Which of these are JavaScript data types?",
    options: ["String", "Number", "Boolean", "All of the above"],
    answer: "All of the above",
    topic: "JavaScript"
  },
  {
    id: 160,
    question: "What keyword is used to define a constant variable in modern JavaScript (ES6)?",
    options: ["var", "let", "const", "static"],
    answer: "const",
    topic: "JavaScript"
  },
  {
    id: 161,
    question: "Which HTML element contains meta-information about the document?",
    options: ["<head>", "<body>", "<meta>", "<title>"],
    answer: "<head>",
    topic: "HTML"
  },
  {
    id: 162,
    question: "Which CSS property makes text italic?",
    options: ["font-style: italic;", "text-decoration: italic;", "font-weight: italic;", "style: italic;"],
    answer: "font-style: italic;",
    topic: "CSS"
  },
  {
    id: 163,
    question: "Which operator is used for strict equality (value and type) in JavaScript?",
    options: ["==", "===", "=", "!="],
    answer: "===",
    topic: "JavaScript"
  },
  {
    id: 164,
    question: "What does the HTML <br> element represent?",
    options: ["A bold tag", "A paragraph break", "A line break", "A horizontal rule"],
    answer: "A line break",
    topic: "HTML"
  },
  {
    id: 165,
    question: "In CSS, what does 'color: red;' do?",
    options: ["Changes the background color to red", "Changes the text color to red", "Changes the border color to red", "Highlights the text in red"],
    answer: "Changes the text color to red",
    topic: "CSS"
  },
  {
    id: 166,
    question: "A block of JavaScript code is enclosed by which characters?",
    options: ["()", "[]", "{}", "<>"],
    answer: "{}",
    topic: "JavaScript"
  },
  {
    id: 167,
    question: "Which tag is used to define a table row in HTML?",
    options: ["<td>", "<th>", "<tr>", "<table-row>"],
    answer: "<tr>",
    topic: "HTML"
  },
  {
    id: 168,
    question: "What is the purpose of the 'z-index' property in CSS?",
    options: ["To set the zoom level of an element", "To set the text alignment", "To control the vertical stacking order of elements", "To set the opacity of an element"],
    answer: "To control the vertical stacking order of elements",
    topic: "CSS"
  },
  {
    id: 169,
    question: "Which method in JavaScript is used to select an HTML element by its ID?",
    options: ["getElementByName()", "getElementByClass()", "getElementById()", "getElementByTag()"],
    answer: "getElementById()",
    topic: "JavaScript"
  },
  {
    id: 170,
    question: "Which HTML5 element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<section>", "<footer>", "<end>"],
    answer: "<footer>",
    topic: "HTML"
  },
  {
    id: 171,
    question: "What does `display: none;` do in CSS?",
    options: ["Makes the element transparent", "Hides the element and removes it from the document flow", "Hides the element but it still takes up space", "Changes the element's color to the background color"],
    answer: "Hides the element and removes it from the document flow",
    topic: "CSS"
  },
  {
    id: 172,
    question: "How do you start a 'for' loop in JavaScript?",
    options: ["for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i < 5; i++)", "for (i from 0 to 5)"],
    answer: "for (i = 0; i < 5; i++)",
    topic: "JavaScript"
  },
  {
    id: 173,
    question: "Which input type is used for a single-line text field in an HTML form?",
    options: ["<input type='text'>", "<input type='textfield'>", "<input type='line'>", "<textfield>"],
    answer: "<input type='text'>",
    topic: "HTML"
  },
  {
    id: 174,
    question: "How can you apply a style to only one specific element in HTML?",
    options: ["Using the 'class' attribute", "Using the 'id' attribute with CSS", "Using the 'tag' selector", "Using the 'style' tag in the head"],
    answer: "Using the 'id' attribute with CSS",
    topic: "CSS"
  },
  {
    id: 175,
    question: "What keyword is used to exit a loop in JavaScript?",
    options: ["exit", "break", "continue", "stop"],
    answer: "break",
    topic: "JavaScript"
  },
  {
    id: 176,
    question: "Which tag is used to embed a video in an HTML page?",
    options: ["<media>", "<movie>", "<video>", "<src>"],
    answer: "<video>",
    topic: "HTML"
  },
  {
    id: 177,
    question: "Which unit is a relative unit of measurement in CSS?",
    options: ["cm", "px", "em", "pt"],
    answer: "em",
    topic: "CSS"
  },
  {
    id: 178,
    question: "What does 'NaN' stand for in JavaScript?",
    options: ["Not a Name", "No and No", "New Age Notation", "Not a Number"],
    answer: "Not a Number",
    topic: "JavaScript"
  },
  {
    id: 179,
    question: "Which HTML attribute is used to define the character set for the document?",
    options: ["<meta charset='...'>", "<meta characterset='...'>", "<meta encoding='...'>", "<meta set='...'>"],
    answer: "<meta charset='...'>",
    topic: "HTML"
  },
  {
    id: 180,
    question: "What does the 'float' property in CSS do?",
    options: ["Makes text bold", "Allows an element to be pushed to the left or right, with text wrapping around it", "Makes an element invisible", "Centers an element horizontally"],
    answer: "Allows an element to be pushed to the left or right, with text wrapping around it",
    topic: "CSS"
  },
  {
    id: 181,
    question: "What is the logical AND operator in JavaScript?",
    options: ["&", "&&", "AND", "|"],
    answer: "&&",
    topic: "JavaScript"
  },
  {
    id: 182,
    question: "Which tag is used to create a dropdown list in HTML?",
    options: ["<list>", "<dropdown>", "<select>", "<input type='dropdown'>"],
    answer: "<select>",
    topic: "HTML"
  },
  {
    id: 183,
    question: "What is a pseudo-class in CSS?",
    options: ["A class that does not exist", "A keyword added to a selector that specifies a special state of the selected element(s)", "A class for styling pseudo-elements like ::before", "A class defined in JavaScript"],
    answer: "A keyword added to a selector that specifies a special state of the selected element(s)",
    topic: "CSS"
  },
  {
    id: 184,
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: ["The current function", "The previous object", "The global window object", "The object it belongs to"],
    answer: "The object it belongs to",
    topic: "JavaScript"
  },
  {
    id: 185,
    question: "Which HTML tag is used to define an email input field?",
    options: ["<input type='email'>", "<input type='mail'>", "<email>", "<mail>"],
    answer: "<input type='email'>",
    topic: "HTML"
  },
  {
    id: 186,
    question: "Which CSS property is used to set the color of a link when it is being clicked?",
    options: [":hover", ":active", ":visited", ":link"],
    answer: ":active",
    topic: "CSS"
  },
  {
    id: 187,
    question: "How do you write a multi-line comment in JavaScript?",
    options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "## This is a comment ##"],
    answer: "/* This is a comment */",
    topic: "JavaScript"
  },
  {
    id: 188,
    question: "Which HTML element is used for drawing graphics, on the fly, via scripting?",
    options: ["<canvas>", "<svg>", "<draw>", "<paint>"],
    answer: "<canvas>",
    topic: "HTML"
  },
  {
    id: 189,
    question: "What does the `rem` unit in CSS refer to?",
    options: ["The font size of the root element", "The width of the letter 'r'", "The remaining space on the page", "A relative millimeter"],
    answer: "The font size of the root element",
    topic: "CSS"
  },
  {
    id: 190,
    question: "What is the result of `\"5\" + 2` in JavaScript?",
    options: ["7", "52", "3", "Error"],
    answer: "52",
    topic: "JavaScript"
  },
  {
    id: 191,
    question: "Which HTML tag is used for the smallest heading?",
    options: ["<h6>", "<h1>", "<h7>", "<small-heading>"],
    answer: "<h6>",
    topic: "HTML"
  },
  {
    id: 192,
    question: "What is the purpose of CSS Flexbox?",
    options: ["To create animations", "To manage 3D space", "To create one-dimensional page layouts", "To style form inputs"],
    answer: "To create one-dimensional page layouts",
    topic: "CSS"
  },
  {
    id: 193,
    question: "Which JavaScript method converts a string to lowercase?",
    options: ["toLowerCase()", "toLower()", "convertLowerCase()", "lowerCase()"],
    answer: "toLowerCase()",
    topic: "JavaScript"
  },
  {
    id: 194,
    question: "Which HTML5 element is best for wrapping main navigation links?",
    options: ["<navigation>", "<nav>", "<menu>", "<links>"],
    answer: "<nav>",
    topic: "HTML"
  },
  {
    id: 195,
    question: "What does the `opacity` property in CSS control?",
    options: ["The border thickness", "The font size", "The transparency level of an element", "The shadow effect"],
    answer: "The transparency level of an element",
    topic: "CSS"
  },
  {
    id: 196,
    question: "What is JSON?",
    options: ["A JavaScript function", "A JavaScript library", "A lightweight data-interchange format", "A type of CSS framework"],
    answer: "A lightweight data-interchange format",
    topic: "JavaScript"
  },
  {
    id: 197,
    question: "Which HTML tag is used to define a cell in a table that contains data?",
    options: ["<td>", "<th>", "<cell>", "<tc>"],
    answer: "<td>",
    topic: "HTML"
  },
  {
    id: 198,
    question: "What is the correct syntax for a CSS Grid layout?",
    options: ["display: grid;", "display: flex-grid;", "layout: grid;", "grid-layout: true;"],
    answer: "display: grid;",
    topic: "CSS"
  },
  {
    id: 199,
    question: "What does DOM stand for in the context of web development?",
    options: ["Document Object Model", "Data Object Model", "Document Oriented Markup", "Display Object Management"],
    answer: "Document Object Model",
    topic: "JavaScript"
  },
  {
    id: 200,
    question: "Which HTML tag is used to link to an external CSS file?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    answer: "<link>",
    topic: "HTML"
  },
  {
    id: 201,
    question: "What does the `box-sizing: border-box;` CSS property do?",
    options: ["It includes padding and border in the element's total width and height.", "It makes the border box-shaped.", "It adds a shadow to the box.", "It removes the box's border."],
    answer: "It includes padding and border in the element's total width and height.",
    topic: "CSS"
  },
  {
    id: 202,
    question: "Which JavaScript method is used to remove the last element from an array and return that element?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "pop()",
    topic: "JavaScript"
  },
  {
    id: 203,
    question: "Which tag is used to create a radio button in an HTML form?",
    options: ["<input type='radio'>", "<input type='button'>", "<radio>", "<button type='radio'>"],
    answer: "<input type='radio'>",
    topic: "HTML"
  },
  {
    id: 204,
    question: "Which CSS pseudo-element is used to insert content before the content of an element?",
    options: ["::before", "::after", "::first-line", "::first-letter"],
    answer: "::before",
    topic: "CSS"
  },
  {
    id: 205,
    question: "What is a 'closure' in JavaScript?",
    options: ["A way to close a browser window", "A function having access to the parent scope, even after the parent function has closed", "The final statement in a code block", "A type of variable"],
    answer: "A function having access to the parent scope, even after the parent function has closed",
    topic: "JavaScript"
  },
  {
    id: 206,
    question: "Which HTML element represents a thematic break in a document, such as a scene change in a story?",
    options: ["<break>", "<hr>", "<line>", "<separator>"],
    answer: "<hr>",
    topic: "HTML"
  },
  {
    id: 207,
    question: "What does `text-decoration: underline;` do in CSS?",
    options: ["Adds a line through the text", "Adds a line over the text", "Adds a line under the text", "Makes the text blink"],
    answer: "Adds a line under the text",
    topic: "CSS"
  },
  {
    id: 208,
    question: "What does 'AJAX' stand for?",
    options: ["Asynchronous JavaScript And XML", "Advanced JavaScript And XHTML", "Automatic JavaScript And XML", "Asynchronous Java And XML"],
    answer: "Asynchronous JavaScript And XML",
    topic: "JavaScript"
  },
  {
    id: 209,
    question: "Which HTML attribute is used to make a form field required?",
    options: ["required", "validate", "mandatory", "must"],
    answer: "required",
    topic: "HTML"
  },
  {
    id: 210,
    question: "Which property is used to create a 'sticky' positioned element in CSS?",
    options: ["position: fixed;", "position: absolute;", "position: sticky;", "position: relative;"],
    answer: "position: sticky;",
    topic: "CSS"
  },
  {
    id: 211,
    question: "Which JavaScript function converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()",
    topic: "JavaScript"
  },
  {
    id: 212,
    question: "Which HTML tag is used to define the main content of a document?",
    options: ["<main>", "<content>", "<body-content>", "<article>"],
    answer: "<main>",
    topic: "HTML"
  },
  {
    id: 213,
    question: "What is the CSS selector for an element with the attribute `href='example.com'`?",
    options: ["[href~='example.com']", "[href*='example.com']", "[href='example.com']", "[href^='example.com']"],
    answer: "[href='example.com']",
    topic: "CSS"
  },
  {
    id: 214,
    question: "How do you find the number of elements in an array called `myArray`?",
    options: ["myArray.count", "myArray.size", "myArray.length", "count(myArray)"],
    answer: "myArray.length",
    topic: "JavaScript"
  },
  {
    id: 215,
    question: "Which HTML tag defines a section of a document?",
    options: ["<section>", "<div>", "<article>", "<group>"],
    answer: "<section>",
    topic: "HTML"
  },
  {
    id: 216,
    question: "How do you make a border rounded in CSS?",
    options: ["border-shape: round;", "corner-radius: 10px;", "border-curve: 10px;", "border-radius: 10px;"],
    answer: "border-radius: 10px;",
    topic: "CSS"
  },
  {
    id: 217,
    question: "Which of the following is a 'truthy' value in JavaScript?",
    options: ["0", "'' (empty string)", "[] (empty array)", "null"],
    answer: "[] (empty array)",
    topic: "JavaScript"
  },
  {
    id: 218,
    question: "What is the purpose of the HTML `<label>` tag?",
    options: ["To create a large text block", "To define a title for a form", "To provide a caption for an image", "To associate a text label with a form control"],
    answer: "To associate a text label with a form control",
    topic: "HTML"
  },
  {
    id: 219,
    question: "Which CSS display value is commonly used for creating horizontal navigation bars?",
    options: ["display: block;", "display: inline;", "display: inline-block;", "display: table;"],
    answer: "display: inline-block;",
    topic: "CSS"
  },
  {
    id: 220,
    question: "What does the `Array.prototype.map()` method do?",
    options: ["It modifies the original array", "It creates a new array with the results of calling a provided function on every element", "It checks if every element in an array passes a test", "It joins all elements of an array into a string"],
    answer: "It creates a new array with the results of calling a provided function on every element",
    topic: "JavaScript"
  },
  {
    id: 221,
    question: "Which HTML element is used to group related elements in a form?",
    options: ["<group>", "<fieldset>", "<formgroup>", "<section>"],
    answer: "<fieldset>",
    topic: "HTML"
  },
  {
    id: 222,
    question: "What does `!important` do in a CSS rule?",
    options: ["It highlights the style in developer tools", "It adds a comment to the style", "It makes the style a default value", "It gives the style higher precedence over other conflicting styles"],
    answer: "It gives the style higher precedence over other conflicting styles",
    topic: "CSS"
  },
  {
    id: 223,
    question: "How do you declare an object in JavaScript?",
    options: ["var myObj = {};", "object myObj = {};", "var myObj = [];", "new object = myObj;"],
    answer: "var myObj = {};",
    topic: "JavaScript"
  },
  {
    id: 224,
    question: "Which HTML tag is used to specify a list of pre-defined options for an `<input>` element?",
    options: ["<options>", "<list>", "<datalist>", "<select-options>"],
    answer: "<datalist>",
    topic: "HTML"
  },
  {
    id: 225,
    question: "What is the difference between `visibility: hidden` and `display: none` in CSS?",
    options: ["There is no difference", "`visibility: hidden` hides the element but it still takes up space, `display: none` removes it completely", "`display: none` hides the element but it still takes up space, `visibility: hidden` removes it completely", "They are aliases for each other"],
    answer: "`visibility: hidden` hides the element but it still takes up space, `display: none` removes it completely",
    topic: "CSS"
  },
  {
    id: 226,
    question: "What is an 'arrow function' in JavaScript?",
    options: ["A function that draws an arrow", "A function that can only be used for math", "A compact alternative to a traditional function expression", "A function that points to another function"],
    answer: "A compact alternative to a traditional function expression",
    topic: "JavaScript"
  },
  {
    id: 227,
    question: "Which HTML tag represents the 'strong importance' of text, typically displayed as bold?",
    options: ["<b>", "<important>", "<strong>", "<bold>"],
    answer: "<strong>",
    topic: "HTML"
  },
  {
    id: 228,
    question: "Which property is used to align items along the main axis in a flex container?",
    options: ["align-items", "justify-content", "flex-direction", "align-content"],
    answer: "justify-content",
    topic: "CSS"
  },
  {
    id: 229,
    question: "What does `setTimeout()` do in JavaScript?",
    options: ["It sets the current time", "It stops the execution of a function", "It calls a function after a specified number of milliseconds", "It sets an interval to call a function repeatedly"],
    answer: "It calls a function after a specified number of milliseconds",
    topic: "JavaScript"
  },
  {
    id: 230,
    question: "Which HTML tag is used to define an abbreviation or an acronym?",
    options: ["<abbr>", "<acronym>", "<short>", "<def>"],
    answer: "<abbr>",
    topic: "HTML"
  },
  {
    id: 231,
    question: "What is the 'L' in 'HSL' color values in CSS?",
    options: ["Lightness", "Luminosity", "Level", "Layer"],
    answer: "Lightness",
    topic: "CSS"
  },
  {
    id: 232,
    question: "What is 'event bubbling' in the DOM?",
    options: ["An event animation effect", "An error in the event handler", "The order in which event handlers are called on nested elements, from the innermost to the outermost", "The order in which event handlers are called on nested elements, from the outermost to the innermost"],
    answer: "The order in which event handlers are called on nested elements, from the innermost to the outermost",
    topic: "JavaScript"
  },
  {
    id: 233,
    question: "What is the purpose of the `aria-` attributes in HTML?",
    options: ["To style elements for printing", "To define regional content", "To improve accessibility for people with disabilities", "To add animations"],
    answer: "To improve accessibility for people with disabilities",
    topic: "HTML"
  },
  {
    id: 234,
    question: "Which CSS property would you use to create a drop shadow effect on a box?",
    options: ["shadow", "box-shadow", "text-shadow", "element-shadow"],
    answer: "box-shadow",
    topic: "CSS"
  },
  {
    id: 235,
    question: "What does the `...` operator do in JavaScript (ES6)?",
    options: ["It's a comment syntax", "It's a division operator", "It's a spread/rest operator for arrays and objects", "It's used for string concatenation"],
    answer: "It's a spread/rest operator for arrays and objects",
    topic: "JavaScript"
  },
  {
    id: 236,
    question: "Which HTML tag is used to define emphasized text, typically displayed as italic?",
    options: ["<i>", "<em>", "<italic>", "<emphasize>"],
    answer: "<em>",
    topic: "HTML"
  },
  {
    id: 237,
    question: "What does a 'media query' in CSS allow you to do?",
    options: ["Play media files like video and audio", "Apply styles based on device characteristics like width, height, and orientation", "Query the browser for user information", "Link to social media"],
    answer: "Apply styles based on device characteristics like width, height, and orientation",
    topic: "CSS"
  },
  {
    id: 238,
    question: "What is a 'Promise' in JavaScript?",
    options: ["A guarantee that a function will run", "An object representing the eventual completion (or failure) of an asynchronous operation", "A variable that cannot be changed", "A security token"],
    answer: "An object representing the eventual completion (or failure) of an asynchronous operation",
    topic: "JavaScript"
  },
  {
    id: 239,
    question: "Which HTML element is used to define a block of quoted content from another source?",
    options: ["<quote>", "<blockquote>", "<q>", "<citation>"],
    answer: "<blockquote>",
    topic: "HTML"
  },
  {
    id: 240,
    question: "How can you select an input field that is currently disabled using CSS?",
    options: ["input[disabled]", "input:disabled", "input.disabled", "input#disabled"],
    answer: "input:disabled",
    topic: "CSS"
  }
];
