# Hritik Raj — Personal Portfolio

> **B.Tech Computer Science & Engineering (AI/ML) Student | Aspiring Developer**  
> *Soft-Pastel Neo-Brutalist & Modern Playful Editorial Design*

A complete, responsive, pixel-perfect personal portfolio website designed with a modern soft-pastel neo-brutalist aesthetic. Built with clean semantic HTML5, Vanilla CSS, and JavaScript, featuring dynamic micro-interactions, an expansive bento grid layout, a live typewriter headline, and direct smooth scrolling.

---

## 🚀 Live Links & Contact

- **GitHub Profile**: [@hritikraj07](https://github.com/hritikraj07)
- **LinkedIn**: [linkedin.com/in/hritikraj07](https://www.linkedin.com/in/hritikraj07/)
- **Email**: [hritikraj626@gmail.com](mailto:hritikraj626@gmail.com)

---

## 🎨 Design System & Visual Language

- **Aesthetic**: Soft neo-brutalism, expansive bento grid layout, crisp high-contrast outlines, friendly playful touches.
- **Color Palette**:
  - **Backgrounds**: Pure White (`#FFFFFF`) & Soft Off-White (`#F7F7F7`)
  - **Ink & Outlines**: Deep Charcoal (`#1D1D1D`) with `1.5px solid` borders
  - **Pastel Color Blocks**:
    - Pastel Lavender: `#E3E3FF`
    - Pastel Mint / Sage: `#DBF5F0`
    - Pastel Butter Yellow: `#FFE7A9`
    - Pastel Pink / Blush: `#FFE3FB`
    - Pastel Lime: `#E9FAC0`
    - Pastel Coral Peach: `#FBEBEA`
- **Typography**:
  - **Primary Sans**: `Plus Jakarta Sans` (Heavy/Medium weights, `-0.03em` tracking)
  - **Handwritten Accent**: `Caveat` (Playful annotations, scribbles, and underlines)
- **Border Radii & Shadows**:
  - `24px` to `36px` on bento project and profile cards
  - `9999px` (full pill) for buttons, badges, and tags
  - Tactile neo-brutalist solid drop shadows on hover (`4px 4px 0px #1D1D1D`)

---

## ⚡ Core Features & Sections

### 1. Sticky Navigation (Top-Right Aligned)
- Brand logo with dedicated `<code />` icon badge, bold typography **"Hritik Raj."**, and accent dot.
- Floating pill navigation container aligned to the **right top** (`Home`, `Projects`, `About`, `Contact`).
- **"Get in Touch"** primary pill button with subtle hover lift.
- Animated slide-in mobile sheet drawer for small screens.

### 2. Hero Section
- **Status Badge**: *"Open to Internships & Collaborations"* with a green pulsing dot.
- **Dynamic Typewriter Headline**: Live typing, pausing, and backspacing effect cycling through:
  - `B.Tech CSE (AI/ML) Student`
  - `Frontend Web Developer`
  - `Python Programmer`
  - `Creative Tech Builder`
- **Rotating Availability Seal**: 360° continuously rotating circular SVG text badge (*"— I AM AVAILABLE — FOR FREELANCE —"*).
- **Floating Tags**: `Python` (Lime), `HTML5` (Lavender), `CSS3` (Mint), `JavaScript` (Yellow), and handwritten Caveat annotation.
- **Hero Actions**: Quick action buttons for **"Get in Touch"** and **"View Projects"**.
- **Expansive Bento Quick-Nav Cards**:
  - *Featured Projects* (Mint `#DBF5F0`)
  - *About Me* (Butter Yellow `#FFE7A9`)
  - *Contact Me* (Soft Pink `#FFE3FB`)

### 3. Featured Projects
Showcases selected projects with stylized browser window mockups and direct repository links:
1. **[CodeFlux](https://github.com/hritikraj07/CodeFlux)**
   - *Tags*: `Web Development` • `UI/UX Design`
   - *Description*: Modern digital studio platform crafting responsive web applications, interactive UI components, and clean digital experiences.
   - *Action*: Direct link to the GitHub repository.
2. **[Galaxy Defender](https://github.com/hritikraj07/Galaxy-Defender)**
   - *Tags*: `60 FPS Web Game` • `HTML5 Canvas` • `JavaScript`
   - *Description*: Fast-paced **60 FPS arcade sci-fi web game** built with HTML5 Canvas and Vanilla JavaScript featuring alien combat, collision physics, health systems, and particle explosions.
   - *Action*: Direct link to the GitHub repository.
- **GitHub Banner**: Prominent callout to visit [@hritikraj07](https://github.com/hritikraj07) for more code and repositories.

### 4. About Me & Technical Skills
- **Profile Card**: Minimalist designer avatar illustration with India location tag and student status badge.
- **Bio**: Highlighting academic focus in Computer Science & Engineering (AI/ML) and web development.
- **Animated Skill Progress Bars** (via `IntersectionObserver`):
  - **HTML (Complete)** — `100%`
  - **Python (Intermediate Level)** — `75%`
  - **CSS (Basics)** — `60%`
- **Technologies Cloud**: Interactive pill badges for Python, HTML5, CSS3, JavaScript, AI/ML Foundations, Git & GitHub, and Responsive Design.

### 5. Call-to-Action (CTA) & Footer
- **CTA Callout**: High-impact card with Caveat handwritten accent *"or just say hi"* and custom curved underline SVG.
- **Contact Hub**: Direct email button to `hritikraj626@gmail.com` with quick social pills for GitHub and LinkedIn.
- **Footer**: Brand mark, tagline *"B.Tech CSE (AI/ML) Student | Aspiring Developer"*, copyright, quick navigation, and smooth **"Back to Top"** button.

### 6. Layout & Navigation Refinements
- **Expansive `1420px` Layout**: Full-width fluid container (`clamp(24px, 4.5vw, 64px)`) eliminating any cropped or cramped feel on wide displays.
- **Direct Section Landing**: Smooth scroll calculations land directly at the `.section-header` underneath the floating navbar, eliminating awkward empty gaps.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic, accessible structure.
- **Vanilla CSS**: Custom design system tokens, CSS grid, flexbox, keyframe animations (`spin-seal`, `pulse-ring`, `blink-cursor`).
- **Vanilla JavaScript**: Typewriter text engine, IntersectionObserver for skill meters, calibrated smooth scrolling, mobile modal management.
- **Google Fonts**: `Plus Jakarta Sans` & `Caveat`.

---

## 📁 Repository Structure

```text
PORTFOLIO/
├── index.html       # Semantic HTML5 document & page structure
├── style.css        # Soft-pastel neo-brutalist design system & responsive styling
├── script.js        # Typewriter effect, smooth scrolling & interactive animations
├── favicon.svg      # Modern geometric HR monogram favicon
└── README.md        # Project documentation
```

---

## 🚀 Running Locally

You can run the project locally without any dependencies:

1. **Directly in Browser**:
   - Double-click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari).

2. **Using Python**:
   ```bash
   python -m http.server 8080
   ```
   Open `http://localhost:8080` in your browser.

3. **Using VS Code Live Server**:
   - Right-click `index.html` and select **"Open with Live Server"**.
