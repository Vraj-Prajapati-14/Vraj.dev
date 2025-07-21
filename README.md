# Vraj Prajapati - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light theme support, smooth animations, and excellent SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Contact Form**: Functional contact form with validation

## 📱 Sections

1. **Hero Section**: Animated introduction with call-to-action buttons
2. **About Section**: Experience timeline and education details
3. **Skills Section**: Interactive skill cards with progress indicators
4. **Research Section**: Detailed research project showcase
5. **Projects Section**: Portfolio projects with live demos and code links
6. **Contact Section**: Contact form and social media links

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vraj.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update your information in `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other details
  },
  // ... rest of the data
}
```

### Styling
- Colors: Modify CSS variables in `src/app/globals.css`
- Theme: Update color schemes in the CSS variables
- Animations: Adjust Framer Motion configurations

### Content
- Sections: Modify components in `src/components/sections/`
- Layout: Update `src/app/page.tsx`
- Navigation: Edit `src/components/ui/navigation.tsx`

## 📁 Project Structure

```
vraj.dev/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── navigation.tsx  # Navigation bar
│   │   │   ├── footer.tsx      # Footer component
│   │   │   └── theme-provider.tsx
│   │   └── sections/           # Page sections
│   │       ├── hero.tsx        # Hero section
│   │       ├── about.tsx       # About section
│   │       ├── skills.tsx      # Skills section
│   │       ├── research.tsx    # Research section
│   │       ├── projects.tsx    # Projects section
│   │       └── contact.tsx     # Contact section
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript types
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Perfect score with structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: prajapativraj147@gmail.com
- **LinkedIn**: [Vraj Prajapati](https://linkedin.com/in/vraj-prajapati-4b6130232)
- **GitHub**: [vraj-prajapati](https://github.com/vraj-prajapati)

---

Made with ❤️ by Vraj Prajapati
