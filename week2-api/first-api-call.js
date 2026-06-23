require('dotenv').config();
const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

async function main() {
  const message = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: "Translate this into Arabic: Welcome to UKDSA, the UK student accommodation platform."
      }
    ]
  });

  console.log(message.content[0].text);
}

main();