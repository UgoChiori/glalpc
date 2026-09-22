# G. L. Agbomoagan Legal Practitioners & Consultants

A responsive multilingual website for **G. L. Agbomoagan Legal Practitioners & Consultants**, presenting the firm's legal services, team, publications, commitments, contact information, and cross-border presence in **Nigeria and Brazil**.

The application is built as a client-side React application with TypeScript and Vite, with a focus on responsive design, internationalization, smooth scrolling, animation, and a polished editorial/legal-services presentation.

## Features

- Responsive website layout for desktop, tablet, and mobile
- Home page with hero content, featured news, editorials, and additional news
- Dedicated pages for:
  - About
  - Team
  - Updates
  - Contact
  - Commitments
  - Brazil
- Individual legal/news article pages
- Team directory backed by structured JSON data
- Detailed team-member profiles with:
  - Biography
  - Qualifications
  - Experience
  - Awards
  - Publications
  - Contact information where available
- Nigeria/Brazil location-selection modal on the landing page
- Brazil-specific route at `/brazil`
- English and Brazilian Portuguese language support
- Language persistence through browser local storage
- Responsive navigation with mobile menu
- Navigation bar that hides while scrolling down and reappears while scrolling up
- Smooth scrolling powered by Lenis
- GSAP animations and scroll-based interactions
- Responsive image handling
- Light/dark-style visual sections throughout the site
- Contact form integration using Web3Forms
- Form submission loading and success/error notifications
- Google Maps embeds for office locations
- Responsive layouts built with Tailwind CSS
- Vercel SPA routing configuration for client-side React Router routes
- Custom 404/Not Found page

## Tech Stack

### Frontend

- **React 18**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Lucide React**
- **React Icons**

### Animation & Interaction

- **GSAP**
- **@gsap/react**
- **ScrollTrigger**
- **SplitText**
- **Lenis** for smooth scrolling

### Internationalization

- **i18next**
- **react-i18next**
- **i18next-browser-languagedetector**

Supported languages:

- English (`en`)
- Brazilian Portuguese (`pt`)

### Forms & Notifications

- **React Hook Form**
- **Web3Forms**
- **React Hot Toast**

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Footer.tsx
│   ├── LocationModal.tsx
│   ├── Navigation.tsx
│   └── ThemeToggle.tsx
│
├── data/
│   └── team.json
│
├── landingpage/
│   ├── Editorials.tsx
│   ├── FeaturedNews.tsx
│   ├── HeroSection.tsx
│   └── MoreNews.tsx
│
├── locales/
│   ├── en/
│   │   └── translation.json
│   └── pt/
│       └── translation.json
│
├── news/
│   ├── CyberSecurityLaw.tsx
│   ├── EntrepreneurLegalTips.tsx
│   ├── FeaturedCorporateTraining.tsx
│   └── LegalTips.tsx
│
├── routes/
│   ├── About.tsx
│   ├── Brazil.tsx
│   ├── Commitments.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Team.tsx
│   └── Updates.tsx
│
├── App.tsx
├── i18n.ts
├── index.css
├── main.tsx
└── App.css

public/
└── images/
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/team` | Team |
| `/updates` | Updates |
| `/contact` | Contact |
| `/commitments` | Commitments |
| `/brazil` | Brazil |
| `/news/corporate-training` | Corporate Training article |
| `/news/legal-tips` | Legal Tips article |
| `/news/legal-entrepreneur` | Entrepreneur Legal Tips article |
| `/news/cyber-security-law` | Cybersecurity Law article |
| `*` | Not Found |

## Country Selection

When the application is opened, a location-selection modal allows visitors to choose between:

- **Nigeria** — keeps the visitor on the main website
- **Brazil** — redirects the visitor to `/brazil`

The country-selection interface is implemented in:

```text
src/components/LocationModal.tsx
```

Routing is handled with React Router.

## Internationalization

The application uses `i18next` and `react-i18next`.

Translation files are stored in:

```text
src/locales/en/translation.json
src/locales/pt/translation.json
```

The language detector checks local storage and the browser's preferred language.

The navigation language switcher allows users to switch between:

```text
EN | PT
```

The selected language is cached in the browser so it can persist between visits.

To add another language:

1. Create a new locale folder under `src/locales/`.
2. Add a corresponding `translation.json`.
3. Import the translation into `src/i18n.ts`.
4. Register the new language in the `resources` object.
5. Add the language option to the navigation language selector.

## Team Data

Team information is maintained separately from the React components in:

```text
src/data/team.json
```

Each team member can contain:

- `id`
- `name`
- `role`
- `image`
- `bio`
- `qualifications`
- `experience`
- `awards`
- `publications`
- `contact`

This allows team information to be updated without restructuring the Team component.

## Contact Form

The Contact page submits enquiries through **Web3Forms**.

The application reads the Web3Forms access key from an environment variable:

```text
VITE_WEB3FORMS_KEY
```

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Do not commit the `.env` file or expose private credentials in source control.

The form sends requests to:

```text
https://api.web3forms.com/submit
```

Successful submissions and errors are displayed using React Hot Toast.

## Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed

Check your versions:

```bash
node -v
npm -v
```

### Installation

Clone the repository and move into the project directory:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

The `.env` file should remain local and should not be committed to Git.

### Run the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, typically:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production build is generated in:

```text
dist/
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks and creates the production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Serves the production build locally |

## Animation & Smooth Scrolling

The application initializes GSAP and Lenis in `App.tsx`.

GSAP plugins used include:

- ScrollTrigger
- SplitText
- `useGSAP`

Lenis is connected to GSAP's ticker so smooth scrolling remains synchronized with scroll-triggered animations.

## Responsive Design

The interface uses Tailwind CSS responsive utilities to adapt layouts across screen sizes.

Responsive behavior includes:

- Mobile navigation menu
- Flexible page grids
- Responsive typography
- Responsive images
- Mobile-friendly team profiles
- Responsive contact sections
- Responsive country-selection modal
- Desktop and mobile layouts for content sections

Images are generally allowed to preserve their natural aspect ratio where displaying the complete image is important, particularly for team photographs.

## Deployment

### Production

The live production website is hosted on **Hostinger**:

```text
https://glalpc.com
```

The application is deployed as a Vite production build. Before deployment, create the production build with:

```bash
npm run build
```

This generates the production-ready files in:

```text
dist/
```

The contents of `dist/` are then deployed to the site's Hostinger hosting environment.

Because this is a React single-page application using React Router, the hosting environment must serve the application's entry point for client-side routes such as:

```text
/about
/team
/contact
/brazil
```

when those URLs are accessed directly.

Make sure the `VITE_WEB3FORMS_KEY` environment variable is configured appropriately for the production build.

### Vercel

A `vercel.json` configuration is included in the repository for **development/testing purposes** and is not the production hosting configuration.

Vercel can be useful for previewing a build or testing React Router's SPA routing before deploying the final build to Hostinger.

## Production Considerations

Before deploying or publishing the repository:

1. Confirm `.env` is excluded by `.gitignore`.
2. Add the production Web3Forms key through the hosting provider's environment-variable settings.
3. Verify all public image assets exist under `public/images`.
4. Test every React Router route directly after deployment.
5. Test both English and Portuguese translations.
6. Test the contact form in production.
7. Test the mobile navigation and country-selection modal on physical devices.
8. Run:

```bash
npm run lint
npm run build
```

and resolve any issues before release.

## Updating Content

### Team

Update:

```text
src/data/team.json
```

### Translations

Update:

```text
src/locales/en/translation.json
src/locales/pt/translation.json
```

### Images

Place publicly accessible images in:

```text
public/images/
```

Reference them from React using paths such as:

```tsx
<img src="/images/example.jpg" alt="Description" />
```

### News & Publications

The current news/editorial pages are implemented as React components under:

```text
src/news/
src/landingpage/
```

New articles can be added by creating a new component and registering its route in `src/App.tsx`.

## License

This repository contains the website implementation for G. L. Agbomoagan Legal Practitioners & Consultants.

Unless otherwise stated by the repository owner, the site's content, branding, images, logos, and legal/editorial materials should be treated as proprietary and should not be reused without permission.

## Author

Developed for **G. L. Agbomoagan Legal Practitioners & Consultants**.
