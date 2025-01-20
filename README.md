# Gemini AI Chat Application

A modern, responsive chat interface for interacting with Google's Gemini AI model. Built with React, TypeScript, and Tailwind CSS.


## Features

- 🤖 Real-time chat with Gemini AI
- 🌓 Dark/Light theme toggle
- ✨ Modern, responsive UI design
- 📋 Code block syntax highlighting with copy functionality
- 🎨 Clean and intuitive user interface
- ⚡ Fast and efficient performance

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Google Generative AI SDK
- Lucide React Icons
- React Markdown
- React Syntax Highlighter

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React context providers
├── lib/              # Utility functions and API
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Features in Detail

### Chat Interface
- Real-time messaging with Gemini AI
- Markdown support for rich text responses
- Code syntax highlighting
- Copy code functionality

### Theme Support
- Toggle between light and dark themes
- Persistent theme preference
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Optimized layout for different devices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.