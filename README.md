# Tech Academy - Professional Training Website

A modern, beautiful, and professional website for your tech academy startup. Showcase your courses in DevOps, Cybersecurity, Applied AI & Generative AI, and Web Development with compelling design and user experience.

## 🚀 Features

- **Modern Design**: Clean, professional, and aesthetically pleasing UI
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with React and Vite for optimal speed
- **Beautiful Animations**: Smooth transitions and engaging interactions
- **Course Showcase**: Highlight your 4 core courses with detailed information
- **Pricing Plans**: Display 3-month and 6-month program options
- **Professional Branding**: Stand out with a compelling pitch to students

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

## 📦 Installation

1. **Navigate to the project directory:**
   ```bash
   cd academy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory. You can preview the build with:

```bash
npm run preview
```

## 📁 Project Structure

```
academy/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Features.jsx     # Features/Why Choose Us
│   │   ├── Courses.jsx      # Course showcase
│   │   ├── Pricing.jsx      # Pricing plans
│   │   ├── CTA.jsx          # Call to action section
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Contact Information

Edit the contact details in:
- `src/components/CTA.jsx` - Update email and phone
- `src/components/Footer.jsx` - Update social links and email

### Modify Colors

Edit `tailwind.config.js` to change the primary color scheme. The current theme uses blue tones.

### Update Course Content

Edit `src/components/Courses.jsx` to modify course descriptions, skills, and details.

### Adjust Pricing

Update pricing plans in `src/components/Pricing.jsx`.

## 🚢 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

### Other Platforms

Build the project with `npm run build` and upload the `dist` folder to your hosting provider.

## 📝 Next Steps

- [ ] Update contact email and phone number
- [ ] Add your social media links
- [ ] Customize colors to match your brand
- [ ] Add real testimonials
- [ ] Integrate a contact form
- [ ] Add course enrollment functionality
- [ ] Set up analytics (Google Analytics, etc.)

## 📄 License

This project is private and proprietary.

## 👥 Credits

Built with ❤️ for Tech Academy

---

**Need help?** Contact the development team or refer to the documentation.
