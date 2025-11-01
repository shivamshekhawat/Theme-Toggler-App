# Theme Customizer

A modern web application for managing Light/Dark mode themes with custom accent color customization. Built with the MERN stack using Next.js, TypeScript, and shadcn/ui.

## Features

✨ **Core Features:**
- Light/Dark mode toggle with system preference detection
- Persistent theme storage using localStorage
- 8 pre-defined accent colors to choose from
- Real-time preview of theme changes
- TypeScript for type safety
- Responsive design for mobile and desktop

🎁 **Bonus Features:**
- Custom primary and accent color selection
- Server-side rendering with Next.js
- RESTful API for theme management
- API documentation page
- Smooth theme transitions
- shadcn/ui components

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Theme:** next-themes
- **Backend:** Next.js API Routes
- **Database:** MongoDB (prepared for integration)
- **Deployment:** Vercel-ready

## Project Structure

\`\`\`
.
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Dashboard/home page
│   ├── customize/           # Theme customization page
│   ├── api-docs/            # API documentation
│   └── api/
│       └── themes/          # API endpoints for theme management
├── components/
│   ├── theme-provider.tsx   # Theme provider wrapper
│   ├── navbar.tsx           # Navigation bar with theme toggle
│   ├── dashboard-content.tsx # Main dashboard content
│   ├── theme-customizer.tsx # Theme customization component
│   └── code-block.tsx       # Code display component
├── app/globals.css          # Global styles and theme tokens
└── README.md

\`\`\`

## Installation

### Using shadcn CLI (Recommended)

1. **Initialize the project:**
   \`\`\`bash
   npx create-next-app@latest theme-customizer --typescript
   cd theme-customizer
   \`\`\`

2. **Add shadcn/ui components:**
   \`\`\`bash
   npx shadcn@latest init
   npx shadcn@latest add button card dropdown-menu label tabs
   \`\`\`

3. **Install dependencies:**
   \`\`\`bash
   npm install next-themes lucide-react
   \`\`\`

4. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

### Using GitHub

1. **Clone the repository:**
   \`\`\`bash
   git clone <repository-url>
   cd theme-customizer
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Toggle Theme
- Click the Sun/Moon icon in the top-right corner to switch between light and dark modes
- Your preference is automatically saved to localStorage

### Customize Theme
1. Click "Customize" → "Theme Settings"
2. Choose your accent color and primary color
3. Preview the changes in real-time
4. Click "Save Theme" to persist your settings
5. Use "Reset to Default" to restore default colors

### API Endpoints

#### POST /api/themes
Save a new theme configuration
\`\`\`json
{
  "accentColor": "#3b82f6",
  "primaryColor": "#000000"
}
\`\`\`

#### GET /api/themes
Retrieve all saved theme configurations

#### GET /api/themes/:id
Retrieve a specific theme configuration

## Implementation Details

### Theme Persistence
- **Local Storage:** Theme preference stored in `localStorage` for immediate persistence
- **API:** Optional backend storage via Next.js API routes
- **Server-Side:** Theme applied before hydration to prevent flash

### Color Customization
- Pre-defined 8 accent colors available
- Custom CSS variables for theme colors
- Real-time CSS updates using JavaScript
- Smooth transitions between theme changes

### Responsive Design
- Mobile-first approach
- Tailwind CSS responsive utilities
- Touch-friendly UI components
- Optimized for all screen sizes

## MongoDB Integration

To enable MongoDB persistence:

1. Install MongoDB driver:
   \`\`\`bash
   npm install mongodb
   \`\`\`

2. Add `MONGODB_URI` to your environment variables

3. Update `/app/api/themes/route.ts` to use MongoDB:
   \`\`\`typescript
   import { MongoClient } from "mongodb";
   
   const client = new MongoClient(process.env.MONGODB_URI);
   const db = client.db("theme-db");
   const themes = db.collection("themes");
   \`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Set Environment Variables:**
   - Add `MONGODB_URI` if using MongoDB

Your app will be live at `https://<your-project>.vercel.app`

### Deploy to Other Platforms

The app can be deployed to Render, Netlify, or any Node.js hosting:

1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Push code to your chosen platform's Git provider

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- ✅ Lightweight (~15KB gzipped)
- ✅ Zero-JavaScript flash on page load
- ✅ Optimized CSS with Tailwind
- ✅ Next.js Image optimization ready
- ✅ API response caching

## Troubleshooting

**Theme not persisting?**
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Check browser DevTools → Storage

**Colors not updating?**
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check CSS variables in DevTools

**API not working?**
- Ensure the development server is running
- Check browser console for errors
- Verify API endpoint URLs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or feature requests, please open an issue on GitHub or visit [vercel.com/help](https://vercel.com/help).

---

**Live Demo:** https://theme-toggler-app-1ijq.vercel.app/

Built with ❤️ using Next.js, TypeScript, and shadcn/ui
