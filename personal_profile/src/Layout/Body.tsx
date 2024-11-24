import React, { useEffect, useRef, useState } from "react";
import sai from "../Images/sai.jpg";
import { Button } from "react-bootstrap";

const Body: React.FC = () => {
  const typeJsTextRef = useRef<HTMLHeadingElement | null>(null);
  const [voiceName, setVoiceName] = useState<SpeechSynthesisVoice | null>(null);

  // Function to load voices
  const loadVoices = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    const femaleVoice = availableVoices.find((voice) =>
      voice.name.toLowerCase().includes("female")
    );
    setVoiceName(femaleVoice || availableVoices[0]); // Fallback to the first voice if no female voice is found
  };

  // Ensure voices are loaded when the component mounts
  useEffect(() => {
    // Initially load voices
    loadVoices();

    // Onvoiceschanged event to reload voices when they are ready
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Typewriter effect for the header text
  useEffect(() => {
    const typeJsText = typeJsTextRef.current;
    if (!typeJsText) return;

    const text = typeJsText.dataset.typetext || "";
    let index = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (typeJsText) {
        typeJsText.innerHTML = text.slice(0, index);

        if (!isDeleting && index < text.length) {
          index++;
        } else if (isDeleting && index > 0) {
          index--;
        } else {
          isDeleting = !isDeleting;
        }
      }
    };

    const intervalId = setInterval(typeEffect, 100);
    return () => clearInterval(intervalId);
  }, []);

  const handleSpeak = () => {
    if (!voiceName) return; // If no voice is selected, do nothing

    const utterance = new SpeechSynthesisUtterance(
      `I am a passionate and experienced web developer with a strong
      background in creating dynamic and responsive web applications. With
      3 years 2 months of professional experience, I specialize in the
      MERN stack. I have a solid
      foundation in JavaScript.`
    );
    utterance.voice = voiceName;
    utterance.pitch = 1.2; // Slightly higher pitch for a feminine tone
    utterance.rate = 1.0;  // Normal speed

    // Event listener to know when the current speech has finished
    utterance.onend = () => {
      console.log("Speech has finished.");
    };

    // Stop any ongoing speech before starting a new utterance, only if it's playing
    if (speechSynthesis.speaking) {
      // Check if the current speech has finished before canceling
      window.speechSynthesis.cancel();
    }

    // Start the new speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="background-animation text-white"
      style={{ padding: "80px", scrollBehavior: "smooth" }}
    >
      <div className="row p-2">
        <div className="col-6">
          <img
            style={{ height: "500px", borderRadius: "60px" }}
            src={sai}
            alt="Sai Kiran"
          />
        </div>
        <div className="col-6">
          <h2
            className="typeJsText"
            data-typetext="Hello! I am Sai Kiran"
            ref={typeJsTextRef}
          ></h2>
          <div className="d-flex align-items-center mt-3">
            <div className="text-warning text-right" style={{ fontStyle: "italic" }}>
              Software Engineer
            </div>
            <Button className="btn btn-primary ms-3" onClick={handleSpeak}>
              <i className="bi bi-volume-up"></i>
            </Button>
          </div>
          <div className="mt-4" style={{ fontSize: "large" }}>
            I am a passionate and experienced web developer with a strong
            background in creating dynamic and responsive web applications. With
            3 years 2 months of professional experience, I specialize in the
            MERN stack (MongoDB, Express.js, React, Node.js), and I have a solid
            foundation in JavaScript.
          </div>
          <div className="mt-5">
            <Button className="btn btn-primary">Download Resume</Button>
          </div>
        </div>
      </div>

      <div className="row p-3 justify-content-center g-3">
        {[{ title: "3+ ", subtitle: "Years Of Experience" },
          { title: "5", subtitle: "Projects Completed" },
          { title: "7", subtitle: "Technologies Used" }]
          .map((item, idx) => (
            <div key={idx} className="card col-4 d-flex gap-3 hover-card text-center">
              <span className="mt-3">
                <h1>{item.title}</h1>
              </span>
              <h2>{item.subtitle}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
