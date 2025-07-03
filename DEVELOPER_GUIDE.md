
# NexoraTech Website – Developer Guide


This document provides a comprehensive overview of the NexoraTech website project, including structure, styling, deployment, editing, troubleshooting, and best practices for ongoing maintenance and collaboration.

---

## 1. Project Overview
- **Tech Stack:** React (Vite), CSS, Formspree, OpenStreetMap, WhatsApp integration
- **Purpose:** Modern, minimal, and professional website for a small IT company targeting global SMB clients
- **Main Pages:** Home, About Us, Services, Portfolio, Testimonials, Blog, Contact

---

## 2. Project Structure

```
root/
│  eslint.config.js
│  index.html
│  package.json
│  README.md
│  vite.config.js
│
├─public/
│   vite.svg
│
├─src/
│   App.css         # Main global styles
│   App.jsx         # Main app component
│   index.css       # (optional, may import App.css)
│   main.jsx        # React entry point
│
│   assets/         # Images and icons
│     logo.png
│     react.svg
│
│   components/
│     Header.jsx    # Navigation bar
│     Footer.jsx    # Footer
│
│   pages/
│     Home.jsx
│     About.jsx
│     Services.jsx
│     Portfolio.jsx
│     Testimonials.jsx
│     Blog.jsx
│     Contact.jsx
```

---


## 3. Quick Start

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.
4. **Edit code:**
   - All main code is in `src/`.
   - Save files to see hot-reload in action.
5. **Build for production:**
   ```sh
   npm run build
   ```
6. **Preview production build:**
   ```sh
   npm run preview
   ```

---

## 4. Key Features & Editing Tips

### Navigation (Header)
- Located in `src/components/Header.jsx`.
- Uses React Router's `NavLink` for navigation and active tab highlighting.
- Responsive: On mobile, the nav bar scrolls horizontally if tabs overflow.
- **To add/remove tabs:** Edit the `<ul>` in `Header.jsx`.
- **To add a hamburger menu:** See the example code snippet below.

### Styling (App.css)
- All main styles are in `src/App.css`.
- Responsive design is handled with media queries (see bottom of file).
- **To change colors:** Edit color variables in `App.css` (navy, white, light blue palette).
- **To add a new style:** Add a new class in `App.css` and use it in your JSX.
- **To adjust layout:** Edit container classes like `.contact-page`, `.contact-form`, `.site-header`, etc.

### Pages
- Each page is a React component in `src/pages/`.
- **To edit content:** Open the relevant `.jsx` file and update the JSX/HTML.
- **Contact page:**
  - Uses Formspree for form submissions (endpoint in `Contact.jsx`).
  - WhatsApp chat links are present.
  - Address and map have been removed as per latest requirements.
  - To change the thank you message, edit the JSX in `Contact.jsx`.

### Blog
- Blog posts are hardcoded as objects/arrays in `Blog.jsx`.
- **To add/edit posts:** Update the posts array in `Blog.jsx`.
- **To add a new field (e.g., author):** Add it to the post object and update the rendering code.

### Testimonials
- Testimonials are hardcoded in `Testimonials.jsx`.
- **To add/edit testimonials:** Update the testimonials array in `Testimonials.jsx`.
- **To add a new testimonial style:** Add a new class in `App.css` and use it in the testimonials rendering.

### Portfolio
- Projects are hardcoded in `Portfolio.jsx`.
- **To add/edit projects:** Update the projects array in `Portfolio.jsx`.
- **To add project images:** Place them in `src/assets/` and reference them in the project object.

---

## 5. Responsiveness & Mobile
- The site is fully responsive.
- Mobile-specific styles are in `App.css` under `@media (max-width: 600px)` and `@media (max-width: 700px)`.
- If you see horizontal scrolling on mobile/desktop, check for fixed widths, large paddings, or `vw` units in your CSS. Use browser DevTools to inspect overflowing elements.

---

## 6. SEO & Meta Tags
- SEO meta tags are in `index.html` (description, keywords, Open Graph, Twitter Card, canonical, robots).
- **To update SEO:** Edit `index.html` in the root folder.

---

## 7. Deployment
- **Recommended:** Deploy via Vercel, connected to your GitHub repo.
- On every push to `main` (or your chosen branch), Vercel auto-deploys.
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **To redeploy:** Commit and push changes to GitHub; Vercel will redeploy automatically.
- **Manual deploy:** Use Vercel CLI (`vercel --prod`) if needed.
- **To connect a new repo:** Use Vercel dashboard to link your GitHub repo.

---

## 8. Common Edits
- **Change company info:** Update text in `Header.jsx`, `Footer.jsx`, and relevant pages.
- **Change logo:** Replace `src/assets/logo.png` and update references if needed.
- **Change contact email:** Update in `Contact.jsx` and `Footer.jsx`.
- **Change WhatsApp number:** Update the WhatsApp links in `Contact.jsx`.
- **Change Formspree endpoint:** Update the `FORMSPREE_ENDPOINT` in `Contact.jsx`.
- **Change favicon:** Replace `public/vite.svg` or add a new favicon in `public/` and update `index.html`.

---

## 9. Troubleshooting
- **Mobile issues:** Check for fixed widths, paddings, or missing media queries in `App.css`.
- **Nav bar overflow:** See `.site-header nav ul` in `App.css` for scrollable nav on mobile.
- **Form not working:** Check Formspree endpoint and browser console for errors.
- **Deployment issues:** Check Vercel dashboard for build logs and errors.
- **White screen after deploy:** Check for build errors, missing assets, or incorrect base path in `vite.config.js`.

---

## 10. Useful Tips
- Use VS Code's "Go to Definition" and "Find All References" to navigate code.
- Use browser DevTools (F12) to test mobile mode and debug CSS. Use the "Toggle device toolbar" for mobile emulation.
- Keep your dependencies updated (`npm update`).
- Always test on both desktop and mobile after changes.

---

## 11. Further Customization
- To add a hamburger menu for navigation, consider using a React hamburger menu library or custom implementation. Example:

```jsx
// Example: Simple Hamburger Menu (install 'react-icons' for icons)
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
        <ul className={open ? 'open' : ''}>
          {/* ...nav links... */}
        </ul>
      </nav>
    </header>
  );
}
```

- For more dynamic blog/testimonials, consider integrating a CMS or using Markdown files.
- For advanced analytics, add Google Analytics or similar in `index.html`.
- For more dynamic blog/testimonials, consider integrating a CMS or using Markdown files.
- For advanced analytics, add Google Analytics or similar in `index.html`.

---

## 12. FAQ

**Q: How do I add a new page?**
A: Create a new file in `src/pages/`, add a route in your router (usually in `App.jsx`), and add a link in `Header.jsx`.

**Q: How do I update the site title and meta tags?**
A: Edit `index.html` in the root folder.

**Q: How do I fix layout issues?**
A: Use browser DevTools to inspect elements. Check for fixed widths, paddings, or missing media queries in `App.css`.

**Q: How do I reset the form after submit?**
A: In `Contact.jsx`, after `setSubmitted(true)`, also call `setForm({ name: '', email: '', message: '' })`.

**Q: How do I update dependencies?**
A: Run `npm update` or edit `package.json` and run `npm install`.

**Q: How do I add images?**
A: Place them in `src/assets/` and import or reference them in your components.

---

## 13. Contact
For further help, refer to this document, the code comments, or reach out to your developer team. You can also consult the official React, Vite, and CSS documentation for advanced topics.

---

**Happy coding with NexoraTech!**
