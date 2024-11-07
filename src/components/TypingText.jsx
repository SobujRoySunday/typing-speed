export default function TypingText({ text, quote }) {
  if (text.length > 0) {
    let i = 0;
    const typedChars = text.split("");
    const quoteChars = quote.split("");
    let newTextJSX = [];

    for (; i < typedChars.length; i++) {
      if (typedChars[i] === quoteChars[i]) {
        newTextJSX.push(<span key={i} className="green">{quoteChars[i]}</span>);
      } else {
        newTextJSX.push(<span key={i} className="red">{quoteChars[i]}</span>);
      }
    }
    newTextJSX.push(<span key={i} className="underline">{quoteChars[i]}</span>);
    for (i = i + 1; i < quoteChars.length; i++) {
      newTextJSX.push(<span key={i} className="">{quoteChars[i]}</span>);
    }
    return newTextJSX;
  }
  return (<span className="">{quote}</span>)
}
