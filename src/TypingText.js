import React, { useEffect } from "react";
import { useState } from "react";

export default function TypingText({ text, quote }) {
  const [typingTextJSX, setTypingTextJSX] = useState(null);

  useEffect(() => {
    if (text.length > 0) {
      let i;
      const typedChars = text.split("");
      const typingChars = quote.split("");

      let newText = [];
      for (i = 0; i < typedChars.length; i++) {
        if (typedChars[i] === typingChars[i]) {
          newText.push(<span className="green">{typingChars[i]}</span>);
        } else {
          newText.push(<span className="red">{typingChars[i]}</span>);
        }
      }
      for (; i < typingChars.length; i++) {
        newText.push(<span className="">{typingChars[i]}</span>);
      }
      setTypingTextJSX(newText);
    } else {
      setTypingTextJSX(<span>{quote}</span>);
    }
  }, [quote, text]);
  return <>{typingTextJSX}</>;
}
