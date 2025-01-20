import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyC4CaUnqUMDkibcri5ukzNw9DUkZ5s4NhI');

export async function chat(message: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent(message);
  const response = await result.response;
  return response.text();
}