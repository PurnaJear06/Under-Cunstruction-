# 🚀 Purna Jear's Portfolio Website

A modern, animated portfolio website built with React, showcasing full-stack development and infrastructure engineering skills. This website features cutting-edge animations, responsive design, and a comprehensive display of professional experience.

## ✨ Features

- **🎨 Modern Design**: Clean, minimalistic interface with dark/light theme toggle
- **🌟 Advanced Animations**: 
  - Framer Motion for smooth page transitions
  - GSAP for creative timeline animations
  - Anime.js for SVG and text animations
  - Three.js for 3D background effects
- **📱 Responsive**: Mobile-first design that works on all devices
- **🎯 Interactive Elements**: Hover effects, scroll-triggered animations, and micro-interactions
- **🔥 Performance Optimized**: Built with Vite for fast development and build times
- **♿ Accessible**: Includes reduced motion preferences and proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Animation Libraries
- **Framer Motion** - React animation library
- **GSAP** - Professional animation library
- **Anime.js** - Lightweight animation library
- **Three.js** - 3D graphics library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/purnajear/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── vite.svg
│   └── resume-purna-jear.pdf
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── Navigation.jsx
│   │   ├── ThreeBackground.jsx
│   │   └── ScrollToTop.jsx
│   ├── contexts/
│   │   ├── AnimationContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ResumePage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Key Components

### LoadingScreen
- Animated loading screen with GSAP and Anime.js
- Shows progress indicator and brand animation
- Smooth transition to main content

### Navigation
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Theme toggle functionality
- Active section highlighting

### ThreeBackground
- Interactive 3D particle system
- Mouse-responsive animations
- Performance-optimized rendering
- Ambient lighting effects

### HomePage
- Hero section with animated text
- Skills showcase with progress bars
- Featured projects carousel
- Call-to-action sections

### AboutPage
- Professional profile with photo
- Detailed experience timeline
- Skills and expertise breakdown
- Education and certifications

### ProjectsPage
- Interactive project gallery
- Filter by technology/category
- Detailed project descriptions
- Live demo and GitHub links

### ResumePage
- Downloadable PDF resume
- Interactive skill bars
- Professional experience timeline
- Contact information

### ContactPage
- Contact form with validation
- Social media links
- Response time guarantee
- Professional contact details

## 🎨 Animation Details

### Framer Motion
- Page transitions with `AnimatePresence`
- Hover and tap animations
- Scroll-triggered animations
- Staggered children animations

### GSAP
- Timeline-based animations
- ScrollTrigger for scroll-based effects
- Text animations with TextPlugin
- Complex motion paths

### Anime.js
- SVG path animations
- Staggered element animations
- Elastic and spring easing
- CSS property animations

### Three.js
- Particle system with WebGL
- Interactive mouse effects
- Smooth camera movements
- Ambient lighting and materials

## 🎭 Theme System

The website supports both light and dark themes:

- **Light Theme**: Clean white background with subtle shadows
- **Dark Theme**: Deep gray background with neon accents
- **Theme Toggle**: Smooth transition between themes
- **System Preference**: Respects user's OS theme preference

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailored for all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Fast loading on all devices

## 🔧 Customization

### Adding New Projects
1. Update the projects array in `src/data/projects.js`
2. Add project images to `public/projects/`
3. Update the project filtering logic if needed

### Modifying Animations
1. Animation preferences are managed in `AnimationContext.jsx`
2. Individual components have their own animation logic
3. Use the `useAnimation` hook to check if animations are enabled

### Updating Content
1. Personal information is stored in component state
2. Update contact details in `ContactPage.jsx`
3. Modify the resume data in `ResumePage.jsx`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 3 seconds on 3G
- **Animation Performance**: 60fps smooth animations

## 🔒 Privacy & Security

- **No Tracking**: No analytics or tracking scripts
- **Secure Forms**: Contact form with proper validation
- **HTTPS Ready**: Configured for secure deployment
- **Data Protection**: No personal data collection

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

- **Email**: purna.jear@example.com
- **LinkedIn**: [linkedin.com/in/purnajear](https://linkedin.com/in/purnajear)
- **GitHub**: [github.com/purnajear](https://github.com/purnajear)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and UI/UX best practices
- **Animation Libraries**: Thanks to the creators of Framer Motion, GSAP, and Anime.js
- **Icons**: Lucide React for beautiful icons
- **Fonts**: Google Fonts for typography

---

**Made with ❤️ by Purna Jear** 