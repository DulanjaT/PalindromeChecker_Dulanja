import { useState } from "react";

const PalindromeChecker: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkIfPalindrome = (): void => {
    if (!word.trim()) {
      setMessage("❗ Please enter a word.");
      return;
    }

    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedWord = cleanedWord.split("").reverse().join("");

    setMessage(
      cleanedWord === reversedWord
        ? "✅ Yes! It's a palindrome."
        : "❌ Nope! Not a palindrome."
    );
  };

  return (
    <div className="container">
      <h2>Palindrome Checker</h2>
      <input
        type="text"
        placeholder="Type a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={checkIfPalindrome}>Check</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PalindromeChecker;
