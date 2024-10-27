import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function chat(msg, history) {
  const chat = model.startChat({
    // history format
    // {
    //   role: "user",
    //   parts: [{ text: "Hello, I have 2 dogs in my house." }],
    // },
    // {
    //   role: "model",
    //   parts: [{ text: "Great to meet you. What would you like to know?" }],
    // }
    history: history,
    generationConfig: {
      maxOutputTokens: 1000000,
    },
  });

  try {
    const result = await chat.sendMessage(msg);
    const response = result.response;
  } catch (e) {
    console.log(e.message);
    return { msg: "Chat error" };
  }

  return { msg: response.text() };
}
