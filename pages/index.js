import quotes from "../data/quotes";
import { useState, useEffect } from "react";

export default function Home() {
  const [number, setNumber] = useState(-1);
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setNumber(randomNumber);
  }, []);
  return (
    <div className="flex text-white items-center justify-center w-screen h-screen">
      <div style={{ width: "1024px" }} className="border-4 rounded p-20">
        {number != -1 ? (
          <>
            <h4 className="font-semibold text-3xl mb-6">
              &quot;{quotes[number].quote}&quot;
            </h4>
            <h4 className="text-2xl">
              - {quotes[number].author}, {quotes[number].game}
            </h4>
          </>
        ) : (
          <h4>Lodaing...</h4>
        )}
      </div>
    </div>
  );
}
