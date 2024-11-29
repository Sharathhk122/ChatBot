import React, { useState, useEffect, useRef } from "react";
import { MdSend } from "react-icons/md";
import axios from "axios";

const Form = ({ close, proMember, address, freeTrail, messages, setMessages }) => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages([...messages, userMessage]);

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/get-bot-response", {
        userInput,
      });
      const cleanedBotMessage = response.data.botMessage.text.replace(/<\/s>$/, "");
      const botMessage = { text: cleanedBotMessage, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = { text: "Sorry, I could not fetch a response.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
    setUserInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80vh" }}>
      <div
        className="chat-messages"
        style={{
          overflowY: "auto",
          flex: 1,
          marginBottom: "20px",
          padding: "10px",
          maxHeight: "calc(100vh - 150px)",
          paddingBottom: "50px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-wrapper ${message.sender}`}
            style={{
              display: "flex",
              flexDirection: message.sender === "user" ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {message.sender === "user" ? (
              <>
                <img
                  src="/images/img3.jpg"
                  alt="user"
                  style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "10px" }}
                />
                <div
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#2c2c2e",
                    padding: "10px",
                    borderRadius: "10px",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {message.text}
                </div>
              </>
            ) : (
              <>
                <img
                  src="/images/img1.jpg"
                  alt="bot"
                  style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
                />
                <div
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#3a3a3c",
                    padding: "10px",
                    borderRadius: "10px",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {message.text}
                </div>
              </>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form id="form_input_data" className="msger-inputarea" onSubmit={handleSend}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: "10px" }}>
          <input
            name="prompt"
            type="text"
            className="msger-input"
            placeholder="Ask any question here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{
              color: "#FFFFFF",
              backgroundColor: "#1c1c1e",
              borderRadius: "5px",
              padding: "10px",
              width: "85%",
              marginRight: "10px",
            }}
          />
          <button
            onClick={handleSend}
            type="submit"
            className="msger-send-btn"
            disabled={loading}
            style={{ backgroundColor: "#4CAF50", borderRadius: "50%", padding: "10px" }}
          >
            <MdSend className="icon_size" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
