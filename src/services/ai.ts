import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyC4CaUnqUMDkibcri5ukzNw9DUkZ5s4NhI');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const cleanResponse = (text: string) => {
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/```[a-z]*\n/g, '')
    .replace(/```/g, '')
    .replace(/\n+/g, '\n')
    .trim();
};

export const aiService = {
  async generateResponse(prompt: string) {
    try {
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      return cleanResponse(response);
    } catch (error) {
      console.error('AI Service Error:', error);
      throw error;
    }
  }
};