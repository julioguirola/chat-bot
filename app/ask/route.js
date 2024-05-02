import { GoogleGenerativeAI } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI("AIzaSyDyCLVxtIBN6ZPLHagM4Rdye1O4Pt_EM4g");
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

export async function POST(request) {
    const body = await request.json()
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
    history: body.history,
    generationConfig: {
        maxOutputTokens: 1000000,
    },
    });

    const msg = body.msg;
    const result = await chat.sendMessage(msg);
    const response = result.response;
    return Response.json({msg : response.text()})

}
