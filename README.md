# Jed Crisp - Personal IT Portfolio Website

A modern, responsive portfolio website designed to showcase IT skills, projects, and professional experience to potential employers.

## 🚀 Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile-First**: Optimized for mobile viewing
- **Fast Loading**: Optimized CSS and JavaScript for performance
- **SEO Friendly**: Proper HTML structure and meta tags

## 📁 Project Structure

```
JedCrisp/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All CSS styles
├── scripts/
│   └── main.js         # JavaScript functionality
├── images/             # (Create this folder for your images)
└── README.md           # This file
```

## 🛠️ Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Your Title/Role</p>
<p class="hero-description">
    Your personal description and professional summary...
</p>
```

#### Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@domain.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
```

#### Social Links
```html
<div class="social-links">
    <a href="https://linkedin.com/in/yourprofile" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/yourusername" class="social-link">
        <i class="fab fa-github"></i>
    </a>
</div>
```

### 2. Skills Section

Update your technical skills in the skills grid:

```html
<div class="skill-category">
    <h3><i class="fas fa-server"></i> Your Skill Category</h3>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

### 3. Projects Section

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Project Title</h3>
    <p>Project description and achievements...</p>
    <div class="project-tech">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
</div>
```

### 4. Experience Timeline

Update your work experience:

```html
<div class="timeline-item">
    <div class="timeline-date">2022 - Present</div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p>Job description and key achievements...</p>
    </div>
</div>
```

### 5. Certifications

Add your actual certifications:

```html
<div class="cert-card">
    <div class="cert-icon">
        <i class="fab fa-aws"></i> <!-- Change icon as needed -->
    </div>
    <h3>Certification Name</h3>
    <p>Certification Details</p>
    <span class="cert-date">Year</span>
</div>
```

## 🎨 Color Customization

The website uses a blue color scheme. To change colors, update these CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --primary-dark: #1d4ed8;       /* Darker blue */
    --accent-color: #fbbf24;       /* Yellow accent */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --background-light: #f9fafb;   /* Light background */
}
```

## 📸 Adding Images

1. Create an `images` folder in your project root
2. Add your profile photo and project screenshots
3. Update the HTML to reference your images:

```html
<!-- Replace the icon with your photo -->
<div class="profile-img">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

## 🚀 Deployment Options

### 1. GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Get instant deployment with custom domain options

### 3. Vercel
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Automatic deployments on every commit

## 🔧 Local Development

To run locally:
1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

## ✨ Additional Enhancements

### Add a Blog Section
Create a `blog.html` file and link to it from the navigation.

### Add Dark Mode
The JavaScript already includes a theme toggle function - uncomment and style as needed.

### Add Analytics
Add Google Analytics or similar tracking code to monitor visitors.

### Add Resume Download
Create a PDF version of your resume and add a download button:

```html
<a href="resume.pdf" class="btn btn-primary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

## 📱 Mobile Testing

Test your site on various devices:
- Use browser developer tools
- Test on actual mobile devices
- Check loading speed on slower connections

## 🎯 SEO Optimization

1. Update the `<title>` tag with your name and keywords
2. Add meta descriptions:
   ```html
   <meta name="description" content="Your Name - IT Professional specializing in...">
   <meta name="keywords" content="IT, Technology, Your Skills, Your Location">
   ```

## 📞 Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **Using Formspree**: Add `action="https://formspree.io/f/your-form-id"` to the form
2. **Using Netlify Forms**: Add `netlify` attribute to the form
3. **Using EmailJS**: Implement EmailJS for client-side email sending

## 🛡️ Security Considerations

- Keep your email and phone private if posting publicly
- Consider using a contact form instead of direct contact info
- Regularly update any dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that others might benefit from, consider submitting a pull request!

---

**Good luck with your job search! 🎉**

Remember to regularly update your portfolio with new projects, skills, and achievements to keep it current and engaging for potential employers.