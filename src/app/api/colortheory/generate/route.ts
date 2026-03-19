import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { domain, audience, tone } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
Act like a UI/UX designer.

Suggest a color palette for:
Domain: ${domain}
Audience: ${audience}
Tone: ${tone}

Return ONLY JSON:
{
  "primary": "",
  "secondary": "",
  "accent": "",
  "explanation": ""
}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return Response.json({ text });
}