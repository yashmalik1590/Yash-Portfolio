# Portfolio Setup Guide

## Issues Fixed

### 0. Quick Chrome Launch (No npm required)
If npm is not installed yet, you can still run the portfolio using Python:

1. Double-click `start-chrome.bat`
2. Chrome opens at `http://localhost:8000`
3. Keep the terminal window open while using the site

Stop server anytime with `Ctrl + C` in that terminal.

### 1. ✅ Tailwind CSS CDN → Production Build
**Problem:** Using CDN version is not suitable for production.
**Solution:** Set up proper Tailwind CSS build process.

#### Setup Instructions:
```bash
# 1. Install dependencies
npm install

# 2. Build Tailwind CSS (run once for production)
npm run build

# 3. Or watch for changes during development
npm run watch
```

The built CSS will be generated in `dist/output.css`. For production, link it in your HTML:
```html
<link rel="stylesheet" href="dist/output.css">
```

---

### 2. ✅ Contact Form Email Functionality
**Problem:** Message form was only opening mailto, not sending proper emails.
**Solution:** Integrated with Email.js for professional email delivery.

#### Setup Instructions:

**Step 1: Create Email.js Account (Free)**
- Go to: https://dashboard.emailjs.com/
- Sign up for a free account

**Step 2: Get Your Credentials**
- Go to Account Settings → API Keys
- Copy your **Public Key**

**Step 3: Create Email Service & Template**
- In Email.js Dashboard, create a new Email Service
- Create a Template with variables:
  - `to_email` - recipient email
  - `from_name` - visitor name
  - `from_email` - visitor email  
  - `subject` - message subject
  - `message` - message content

**Step 4: Update script.js**
In `script.js`, find the email configuration section and update:
```javascript
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";        // From Email.js API Keys
const SERVICE_ID = "YOUR_SERVICE_ID";        // From Email.js Service
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";      // From Email.js Template
```

**Test:** Go to Contact section and send a test message!

---

### 3. ✅ Resume Download Button
**Problem:** "Download Full Resume" button wasn't working.
**Solution:** Fixed with proper JavaScript file handling.

The resume download now works by:
- Detecting the file location in `src/assets/HHLCV.pdf`
- Creating a temporary download link
- Triggering the native browser download

**Ensure the file exists at:** `src/assets/HHLCV.pdf`

---

## Production Deployment

### Before Going Live:

1. **Configure Email.js**
   - Update PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID in script.js
   - Test the contact form

2. **Build Tailwind CSS**
   ```bash
   npm run build
   ```

3. **Update HTML (Optional but recommended)**
   - Replace `<link rel="stylesheet" href="styles.css">` with:
   ```html
   <link rel="stylesheet" href="dist/output.css">
   ```

4. **Test Everything**
   - Contact form sending emails
   - Resume downloading
   - Dark/light mode switching
   - All animations and responsiveness

---

## File Structure
```
HLPortfolio/
├── index.html              # Main HTML file
├── script.js              # Main JavaScript (with Email.js setup)
├── styles.css             # Base styles + Tailwind utilities
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── dist/
│   └── output.css         # Built CSS (after npm run build)
└── src/
    └── assets/
        ├── HHLCV.pdf      # Your resume
        └── images/        # Portfolio images
```

---

## Troubleshooting

**Resume not downloading?**
- Ensure file path is correct: `src/assets/HHLCV.pdf`
- Try a different PDF or test with a smaller file

**Contact form not sending?**
- Check if Email.js credentials are correct
- Verify template variable names match
- Check browser console for errors (F12 → Console)

**Tailwind styles not showing?**
- Run `npm run build` to generate output.css
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure dist/output.css is linked in HTML

---

## Getting Help

- Email.js Docs: https://www.emailjs.com/docs/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Contact: leelhimanshu5113@gmail.com
