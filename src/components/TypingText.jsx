import React, { useEffect } from "react";
import { useState } from "react";

export default function TypingText({ text, quote }) {
  const [typingTextJSX, setTypingTextJSX] = useState(null);

  useEffect(() => {
    // We only modify the style if the user has typed anything and that is
    // checked through this conditional statement
    if (text.length > 0) {
      let i = 0;
      const typedChars = text.split("");
      const quoteChars = quote.split("");
      let newTextJSX = [];

      // Looping over the characters and checking which one is correct and
      // which one is incorrect, based upon that we are inserting a JSX
      // line with className green or blue respectively.
      for (; i < typedChars.length; i++) {
        if (typedChars[i] === quoteChars[i]) {
          newTextJSX.push(<span className="green">{quoteChars[i]}</span>);
        } else {
          newTextJSX.push(<span className="red">{quoteChars[i]}</span>);
        }
      }

      newTextJSX.push(<span className="underline">{quoteChars[i]}</span>);

      // For the characters which has not beed typed yet.
      for (i = i + 1; i < quoteChars.length; i++) {
        newTextJSX.push(<span className="">{quoteChars[i]}</span>);
      }

      // Finally setting the prepared JSX array
      setTypingTextJSX(newTextJSX);
    } else {
      setTypingTextJSX(<span className="">{quote}</span>);
    }
  }, [text, quote]);

  // Final JSX to render
  return <>{typingTextJSX}</>;
}
