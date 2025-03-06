import React, { useState, useEffect, useCallback } from "react";

const PalindromeChecker: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkIfPalindrome = useCallback((input: string): void => {
    const trimmedWord = input.trim();

    if (!trimmedWord) {
      setMessage("❗ Please enter a valid word.");
      return;
    }

    const cleanedWord = trimmedWord
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    if (!cleanedWord) {
      setMessage("❗ Please enter a word with alphanumeric characters.");
      return;
    }

    const reversedWord = cleanedWord.split("").reverse().join("");

    setMessage(
      cleanedWord === reversedWord
        ? "✅ Yes! It's a palindrome."
        : "❌ Nope! Not a palindrome."
    );
  }, []);

  useEffect(() => {
    checkIfPalindrome(word);
  }, [word, checkIfPalindrome]);

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        placeholder="Type a word..."
        value={word}
        onChange={({ target: { value } }) => setWord(value)}
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default PalindromeChecker;
