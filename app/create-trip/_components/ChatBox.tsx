"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EmptyChatBox from "./EmptyChatBox";
import { Loader2, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Message = {
  role: string;
  content: string;
  ui?: string;
};

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinal, setIsFinal] = useState<boolean>(false);

  const onSend = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    setUserInput("");

    const newMsg: Message = {
      role: "user",
      content: userInput,
    };

    setMessages((prev: Message[]) => [...prev, newMsg]);

    const response = await axios.post("/api/aimodel", {
      messages: [...messages, newMsg],
      isFinal,
    });

    console.log("TRIP DETS", response.data);

    !isFinal &&
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant",
          content: response?.data?.resp,
          ui: response?.data?.ui,
        },
      ]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];

    if (lastMsg.ui === "final") {
      setIsFinal(true);
      setUserInput("Ok Great");
    }
  }, [messages]);

  useEffect(() => {
    if (isFinal && userInput) {
      onSend();
    }
  }, [isFinal]);

  return (
    <div className="flex flex-col h-[81vh]">
      {messages.length === 0 && <EmptyChatBox />}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) =>
          msg.role === "user" ? (
            <div className="flex justify-end mt-2" key={index}>
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-2" key={index}>
              <div className="max-w-lg bg-gray-200 px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          )
        )}

        {isLoading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-200 px-4 py-2 rounded-lg">
              <Loader2 className="animate-spin" />
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="border-2 rounded-2xl py-2 relative">
          <Textarea
            className="border-0 resize-none h-28 focus-visible:ring-0 shadow-none"
            placeholder="Start typing here..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
          <Button
            className="cursor-pointer absolute right-2 bottom-2"
            onClick={() => onSend()}
          >
            Generata Trip
            <Send />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
