# AI Assistant with Gemini 1.5

A modern, responsive AI chat interface powered by Google's Gemini 1.5 model. Built with React, TypeScript, and Tailwind CSS.

🔗 [Live Demo](https://serene-sunshine-02ee2c.netlify.app/)

## Features

- 🤖 Real-time AI responses using Gemini 1.5
- 💬 Clean and intuitive chat interface
- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- ⚡ Built with performance in mind

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Google Generative AI SDK
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Google AI API key:
   ```
   GOOGLE_AI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/        # React components
│   ├── ChatInput.tsx    # Message input component
│   └── ChatMessage.tsx  # Individual message display
├── services/         # External services
│   └── ai.ts          # Gemini AI integration
└── App.tsx          # Main application component
```

## Features in Detail

### Chat Interface
- Real-time message updates
- Loading states and animations
- Error handling
- Message history preservation
- Clean message formatting

### AI Integration
- Powered by Google's Gemini 1.5 model
- Fast response times
- Markdown support
- Error handling and fallbacks

### UI/UX
- Responsive design for all screen sizes
- Smooth animations and transitions
- Clear visual hierarchy
- Accessible design patterns

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Google Generative AI team for Gemini 1.5
- Lucide for the beautiful icons
- The React and Vite teams