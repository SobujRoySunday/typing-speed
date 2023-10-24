import { useEffect, useState } from "react";
import "./App.css";
import TypingText from "./TypingText";

function App() {
  const [quote, setQuote] = useState(
    "Ion propulsion, also known as ion thrusters or ion drives, is a type of propulsion technology used in space exploration. Unlike traditional chemical rocket engines that rely on the combustion of propellants, ion propulsion systems use electric fields to accelerate and expel charged particles, called ions, to generate thrust."
  );
  const quoteWords = quote.split(" ");
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(null);

  useEffect(() => {
    if (typedText.length === 1) {
      setStartTime(new Date());
      setTypingSpeed(0);
    }

    const typedWords = typedText.split(" ");
    let correctWords = 0;

    for (let i = 0; i < typedWords.length; i++) {
      if (typedWords[i] === quoteWords[i]) {
        correctWords++;
      }
    }

    if (correctWords === quoteWords.length) {
      const elapsedTime = (new Date() - startTime) / 1000;
      const wordsTyped = quoteWords.length;
      const speed = Math.floor((wordsTyped / elapsedTime) * 60);
      setTypingSpeed(speed);
    }
  }, [typedText, startTime, quoteWords]);

  return (
    <main>
      <h1>Typing Speed Test</h1>
      <div className="typing-text" id="quote">
        <TypingText text={typedText} quote={quote} />
      </div>
      <textarea
        className="typing-box"
        id="typing-box"
        placeholder="Start typing here..."
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
      ></textarea>
      <div className="results">
        Typing Speed: <span id="typing-speed">{typingSpeed || 0}</span> WPM
        (Words Per Minute)
      </div>
    </main>
  );
}

export default App;
