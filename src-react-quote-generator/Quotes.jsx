import React, { useState } from 'react';

const quotes = [
    "The best revenge is not to be like your enemy",
    "Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.",
    "Be tolerant with others and strict with yourself",
    "If it is not right, do not do it, if it is not true, do not say it",
    "It’s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.",
    "External things are not the problem. It’s your assessment of them. Which you can erase right now."
];

export default function Quotes() {
    const [quote, setQuote] = useState("Click Randomize!! ");
    const [lastIndex, setLastIndex] = useState(null);
    const [orderIndex, setOrderIndex] = useState(0);

    const randomQuote = () => {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === lastIndex); // Ensure it's not the same as the last quote

        setLastIndex(randomIndex);
        setQuote(quotes[randomIndex]);
    };

    const showNextQuote = () => {
        if (orderIndex < quotes.length - 1) {
            setOrderIndex(orderIndex + 1);
            setQuote(quotes[orderIndex + 1]);
        }
    };

    const showPreviousQuote = () => {
        if (orderIndex > 0) {
            setOrderIndex(orderIndex - 1);
            setQuote(quotes[orderIndex - 1]);
        }
    };

    return (
        <div className="color-picker-container"> 
            <h1>Random Quote Generator</h1>
            <div className="color-display">
                <p>{quote}</p>
            </div>
            <button className="button-container-randomQuote" onClick={randomQuote}>Randomize</button>
            <button className="button-container-nextQuote" onClick={showNextQuote} disabled={orderIndex === quotes.length - 1}>Next Quote</button>
            <button className="button-container-prevQuote" onClick={showPreviousQuote} disabled={orderIndex === 0}>Previous Quote</button>
        </div>
    );
}
