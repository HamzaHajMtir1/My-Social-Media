# Modern Personal Website

A beautiful, minimalistic, and professional one-page personal website built with Next.js and Tailwind CSS.

## Features

✨ **Modern Design**
- Clean, minimalistic interface
- Smooth gradient background with animated blob shapes
- Responsive design for all devices
- Dark mode support

🎨 **Professional Look**
- Circular profile picture with elevated shadow and gradient glow
- Elegant typography with proper spacing
- Smooth hover animations on social icons
- Gentle fade-in animation on page load

🔗 **Social Media Integration**
- GitHub, LinkedIn, Instagram, Twitter/X, and personal website links
- Icon tooltips on hover
- Opens links in new tabs

## How to Customize

### 1. Update Your Personal Information

Edit `app/page.tsx`:

```tsx
// Change your name (line ~82)
<h1 className="...">
  Your Full Name  // ← Change this
</h1>

// Change your tagline (line ~87)
<p className="...">
  Creating beautiful and functional web experiences  // ← Change this
</p>
```

### 2. Update Social Media Links

In `app/page.tsx`, find the `socialLinks` array (around line 16) and update the URLs:

```tsx
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",  // ← Update this
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  // ... update all URLs
];
```

### 3. Replace Profile Picture

Replace `/public/profile.svg` with your own image:
- **Recommended:** Use a square image (e.g., 400x400px or larger)
- **Format:** JPG, PNG, or SVG
- **File name:** Keep it as `profile.svg` or update the image path in `app/page.tsx` (line ~77)

To update the placeholder initials in the SVG:
```svg
<!-- In public/profile.svg, change "YN" to your initials (line ~9) -->
<text ...>YN</text>  <!-- Change YN to your initials -->
```

### 4. Customize Colors

The gradient background can be customized in `app/page.tsx` (line ~55):

```tsx
<div className="... bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
```

Change the color classes to your preference (e.g., `from-green-50`, `via-yellow-50`, etc.)

### 5. Add or Remove Social Icons

To add more icons or remove existing ones, modify the `socialLinks` array in `app/page.tsx`.

Available icons from `lucide-react`:
- Facebook, Youtube, Mail, Phone, MapPin, etc.

Example:
```tsx
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
    color: "hover:text-red-600",
  },
  // ... other links
];
```

## Running the Project

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **TypeScript** - Type safety

## Deployment

Deploy easily on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

## License

MIT - Feel free to use this template for your personal website!
