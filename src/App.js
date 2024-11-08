import { useEffect, useRef, useState } from "react";
import "./App.css";
import TypingText from "./components/TypingText";
import Label from "./components/Label";
import Loader from "./components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [numberOfWords, setNumberOfWords] = useState(10);
  const [sentence, setSentence] = useState("sunshine brightens the morning sky as birds chirp in harmony");
  const [isLoading, setIsLoading] = useState(false);

  const startTime = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const fetchWords = async (numberOfWords) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://random-word-api.herokuapp.com/word?number=${numberOfWords}&lang=en`
      );
      const data = await response.json();
      setSentence(data.join(" "));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWords(numberOfWords);
  }, [numberOfWords]);

  useEffect(() => {
    if (sentence.length > 0) {
      if (typedText.length === 1) {
        startTime.current = new Date();
        setTypingSpeed(0);
        setAccuracy(0);
      }

      const characters = sentence.split("");
      const typedChar = typedText.split("");
      const typedWords = typedText.split(" ");

      let correctChar = 0;
      for (let i = 0; i < typedChar.length; i++) {
        if (typedChar[i] === characters[i]) {
          correctChar++;
        }
      }

      if (typedChar.length === characters.length) {
        const elapsedTime = (new Date() - startTime.current) / 1000;
        const wordsTyped = typedWords.length;
        const speed = Math.floor((wordsTyped / elapsedTime) * 60);
        const accuracyPercentage = Math.floor(
          (correctChar / characters.length) * 100
        );
        setTypingSpeed(speed);
        setAccuracy(accuracyPercentage);
      }

      if (typedChar.length === 0) {
        setAccuracy(0);
        setTypingSpeed(0);
        startTime.current = null;
      }
    }
  }, [typedText, sentence]);

  return (
    <main>
      <ToastContainer />

      {isLoading && <Loader />}

      <h1>Typing Speed Test</h1>

      <section className="controls">
        <button
          className={`${numberOfWords === 10 ? "btn-active" : ""}`}
          onClick={() => setNumberOfWords(10)}
        >
          10 words
        </button>
        <button
          className={`${numberOfWords === 20 ? "btn-active" : ""}`}
          onClick={() => setNumberOfWords(20)}
        >
          20 words
        </button>
        <button
          className={`${numberOfWords === 30 ? "btn-active" : ""}`}
          onClick={() => setNumberOfWords(30)}
        >
          30 words
        </button>
      </section>

      <section className="typing-text">
        <TypingText text={typedText} quote={sentence} />
      </section>
      <textarea
        className="typing-box"
        id="typing-box"
        placeholder="Start typing here..."
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
      ></textarea>
      <section className="results">
        <Label text={`${typingSpeed} WPM`} />
        <Label text={`${accuracy}%`} />
      </section>
      <footer>
        <p>Created by Sorbopriyo Roy in 2023</p>
      </footer>
    </main>
  );
}

export default App;
