import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hi!" }],
        }),
      });
      

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Something went wrong");
      }

      const data = await response.json();
      setMessages([...newMessages, data.reply]);
    } catch (error) {
      console.error("💔 Chat error:", error.message);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Oops! The bot couldn't reply right now." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleSend} disabled={loading || !input.trim()}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
