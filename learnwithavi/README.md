# LearnwithAvi.com - Java Learning Platform

A modern, interactive web application for learning Java programming, inspired by W3Schools. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📚 **Interactive Tutorials**: Step-by-step Java tutorials with clear explanations
- 💻 **Live Code Editor**: Try code examples directly in the browser with instant feedback
- 🎯 **Exercises**: Practice coding with hands-on exercises
- 📝 **Quizzes**: Test your knowledge with interactive quizzes
- 📖 **Reference Guide**: Complete Java keyword and method reference
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Clean UI**: Modern, professional design with excellent readability

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono

## Project Structure

```
learnwithavi/
├── app/
│   ├── java/              # Java tutorial pages
│   │   ├── intro/
│   │   ├── get-started/
│   │   ├── syntax/
│   │   ├── output/
│   │   ├── variables/
│   │   └── layout.tsx
│   ├── exercises/         # Exercise page
│   ├── quiz/             # Quiz page
│   ├── reference/        # Reference page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Sidebar.tsx       # Tutorial navigation sidebar
│   ├── CodeBlock.tsx     # Syntax-highlighted code display
│   ├── CodeEditor.tsx    # Interactive code editor
│   └── NavigationButtons.tsx  # Previous/Next navigation
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd learnwithavi
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Available Pages

- **Home** (`/`) - Landing page with overview
- **Java Tutorials** (`/java/*`) - Interactive Java tutorials
  - Introduction
  - Get Started
  - Syntax
  - Output
  - Variables
  - And more...
- **Exercises** (`/exercises`) - Practice exercises
- **Quiz** (`/quiz`) - Interactive quiz
- **Reference** (`/reference`) - Java keyword reference

## Key Components

### Header
Responsive navigation bar with links to main sections and mobile menu support.

### Sidebar
Hierarchical navigation for Java tutorials with expandable sections and active state highlighting.

### CodeBlock
Displays syntax-highlighted code with copy functionality.

### CodeEditor
Interactive code editor with split view for code input and output display. Includes run and reset functionality.

### NavigationButtons
Previous/Next navigation for sequential tutorial progression.

## Features in Detail

### Interactive Code Editor
- Edit Java code directly in the browser
- Run code with simulated execution
- View output in real-time
- Reset to original code

### Tutorial System
- Hierarchical topic organization
- Sequential navigation (Previous/Next)
- Sidebar navigation with active state
- Code examples with syntax highlighting
- Tips and notes for better learning

### Quiz System
- Multiple-choice questions
- Progress tracking
- Score calculation
- Instant feedback
- Restart functionality

### Exercises
- Categorized by difficulty level
- Multiple exercise sets
- Question count display
- Interactive UI

## Customization

### Colors
The primary color scheme uses green (#04AA6D) similar to W3Schools. You can customize colors in the Tailwind classes throughout the components.

### Content
Add new tutorial pages by creating new directories under `app/java/` with a `page.tsx` file. Update the sidebar navigation in `components/Sidebar.tsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.

## Acknowledgments

- Inspired by W3Schools' excellent tutorial format
- Built with Next.js and Tailwind CSS
- Icons from Heroicons (via inline SVG)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ for Java learners everywhere
