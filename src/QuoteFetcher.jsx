import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    console.log(randomQuote);
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card  shadow p-4 text-center"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h1 className="mb-3 display-5 text-primary">{quote.text}</h1>
        <p className="text-muted fst-italic">— {quote.author || "Unknown"}</p>
        <button className="btn btn-primary mt-3" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}
