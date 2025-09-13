# 💕 Beautiful Love Website

A stunning, modern, and interactive website created as a special gift for your girlfriend. Built with React, Tailwind CSS, Framer Motion, and lots of love!

## ✨ Features

- **Responsive Design**: Looks perfect on mobile, tablet, and desktop
- **Smooth Animations**: Beautiful parallax scrolling and interactive elements
- **Photo Gallery**: Showcase your favorite memories together
- **Love Notes**: Heartfelt messages with beautiful typography
- **Interactive Elements**: Tap-to-create hearts, draggable cards, and message carousel
- **Modern UI**: Glass morphism effects, gradients, and floating hearts
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Quick Start

1. **Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view in browser

2. **Build for Production**

   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Deploy from your project directory:

   ```bash
   vercel
   ```

3. Follow the prompts and your site will be live!

### Option 2: GitHub + Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project and deploy

## 🎨 Customization

### Replace Placeholder Content

1. **Photos**: Replace the Unsplash URLs in `src/components/PhotoGallery.jsx` with your own photos
2. **Messages**: Update the love notes in `src/components/LoveNotes.jsx`
3. **Hero Text**: Modify the main title and subtitle in `src/components/HeroSection.jsx`
4. **Interactive Messages**: Change the daily messages in `src/components/InteractiveSection.jsx`

### Example Photo Replacement:

```javascript
// In PhotoGallery.jsx, replace:
{
  id: 1,
  src: "YOUR_PHOTO_URL_HERE",
  alt: "Description of your photo",
  caption: "Your custom caption 💕"
}
```

### Add Your Own Photos:

1. Put photos in the `public` folder
2. Reference them like: `src: "/your-photo.jpg"`

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful icons
- **React Scroll Parallax** - Parallax scrolling effects

## 📱 Mobile Optimization

- Touch-friendly interactions
- Responsive breakpoints
- Optimized images
- Smooth scrolling
- PWA-ready meta tags

## 💝 Special Features

- **Floating Hearts**: Animated hearts that float across the screen
- **Glass Morphism**: Modern frosted glass effects
- **Parallax Scrolling**: Depth and movement as you scroll
- **Interactive Cards**: Drag, tap, and swipe interactions
- **Gradient Text**: Beautiful color transitions
- **Hover Effects**: Subtle animations on interaction

## 🎯 Performance

- Optimized bundle size (~118KB gzipped)
- Lazy loading images
- Efficient animations with Framer Motion
- Modern CSS with Tailwind
- Fast Vite development and build

## 💌 Creating Your QR Code

After deploying to Vercel:

1. Copy your live URL (e.g., `https://your-site.vercel.app`)
2. Use any QR code generator (like qr-code-generator.com)
3. Paste your URL and generate the QR code
4. Print or save the QR code to share!

---

Made with 💖 for the most special person in your world.
