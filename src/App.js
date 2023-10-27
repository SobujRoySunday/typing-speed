import { useEffect, useState } from "react";
import "./App.css";
import TypingText from "./TypingText";
import Label from "./components/Label";

function App() {
  const [quote] = useState(
    "Ion propulsion, also known as ion thrusters or ion drives, is a type of propulsion technology used in space exploration. Unlike traditional chemical rocket engines that rely on the combustion of propellants, ion propulsion systems use electric fields to accelerate and expel charged particles, called ions, to generate thrust."
  );
  const quoteWords = quote.split(" ");
  const quoteChar = quote.split("");
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    if (typedText.length === 1) {
      setStartTime(new Date());
      setTypingSpeed(0);
      setAccuracy(0);
    }

    const typedChar = typedText.split("");
    const typedWords = typedText.split(" ");
    let correctChar = 0;

    for (let i = 0; i < typedChar.length; i++) {
      if (typedChar[i] === quoteChar[i]) {
        correctChar++;
      }
    }

    if (typedChar.length === quoteChar.length) {
      const elapsedTime = (new Date() - startTime) / 1000;
      const wordsTyped = typedWords.length;
      const speed = Math.floor((wordsTyped / elapsedTime) * 60);
      const acc = Math.floor((correctChar / quoteChar.length) * 100);
      setTypingSpeed(speed);
      setAccuracy(acc);
    }
  }, [typedText, startTime, quoteWords, quoteChar]);

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
        <Label text={`${typingSpeed} WPM`} />
        <Label text={`${accuracy}%`} />
      </div>

      <footer>Created by Sorbopriyo Roy in 2023</footer>
    </main>
  );
}

export default App;
