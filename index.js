import openai from "./config/open_ai.js";

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "what is capital of israel" }],
    model: "gpt-3.5-turbo",
  });
  console.log(chatCompletion);
}
main();
