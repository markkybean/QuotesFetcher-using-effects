import { useState, useEffect } from "react";
import axios from "axios";

const RANDOM_QUOTE_URL = "https://dummyjson.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      const response = await axios.get(RANDOM_QUOTE_URL); // Use Axios to fetch the quote
      setQuote(response.data); // Axios automatically parses JSON, use response.data
      console.log(response.data); // Log the API response
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4 text-center"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h1 className="mb-3 display-5">
          {quote.quote || "Fetching quote..."}
        </h1>
        <p className="text-muted fst-italic">— {quote.author || "Unknown"}</p>
        <button className="btn btn-primary mt-3" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}
