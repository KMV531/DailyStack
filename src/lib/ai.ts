import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-2d7116dddf8c47869011f57b84fb24cb",
});

export async function summarize(text: string): Promise<string> {
  const prompt = `
    Give me a concise but comprehensive summary of the text below in 6–10 sentences. Cover:
        • The core message or thesis
        • The 3–5 most important points or sections
        • Any data, examples, or conclusions that matter
        • The final takeaway or call-to-action (if present)
    Write in clear, neutral language.

    Text:
    ${text}
  `;

  const response = await client.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "deepseek-chat",
  });

  return response.choices[0].message?.content?.trim() ?? "";
}
