import React, { useState } from "react";
import me from "../assets/mes.png";

const Chat = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleSend = () => {
    if (!text && !image) return;

    const newMessages = [...messages, { role: "user", text }];

    // Mock AI reply
    const botReply = image
      ? "Thanks for the image! Here's my response to it."
      : "You said: " + text;

    newMessages.push({ role: "bot", text: botReply });

    setMessages(newMessages);
    setText("");
    setImage(null);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setVisible(!visible)}>
          <img
            src={me}
            alt="Chat"
            className="w-12 h-12 rounded-full shadow-md"
          />
        </button>
      </div>

      {/* Chat Window */}
      {visible && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-300">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold">Ask AI</h3>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-500 text-sm hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="h-60 overflow-y-auto border border-gray-100 rounded p-2 mb-3 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded px-3 py-2 max-w-[70%] ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full border border-gray-300 px-2 py-1 rounded mb-2 text-sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Image Upload */}
          <input
            type="file"
            className="mb-2 text-xs text-gray-500"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          {/* Send Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded text-sm"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
