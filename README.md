# G. L. Agbomoagan Legal Practitioners & Consultants

## Website Documentation & Handover Guide

A responsive multilingual website for **G. L. Agbomoagan Legal Practitioners & Consultants**, presenting the firm's legal services, team, publications, commitments, contact information, and cross-border presence in **Nigeria and Brazil**.

The application is built as a client-side React application using TypeScript and Vite, with a focus on responsive design, internationalization, smooth scrolling, animation, and a polished editorial/legal-services presentation.

---

# Features

* Responsive website layout for desktop, tablet, and mobile
* Home page with hero content, featured news, editorials, and additional news
* Dedicated pages for:

  * About
  * Team
  * Updates
  * Contact
  * Commitments
  * Brazil
* Individual legal/news article pages
* Team directory backed by structured JSON data
* Detailed team-member profiles with:

  * Biography
  * Qualifications
  * Experience
  * Awards
  * Publications
  * Contact information where available
* Nigeria/Brazil location-selection modal on the landing page
* Brazil-specific route at `/brazil`
* English and Brazilian Portuguese language support
* Language persistence through browser local storage
* Responsive navigation with mobile menu
* Navigation bar that hides while scrolling down and reappears while scrolling up
* Smooth scrolling powered by Lenis
* GSAP animations and scroll-based interactions
* Responsive image handling
* Light/dark-style visual sections throughout the site
* Contact form integration using Web3Forms
* Form submission loading and success/error notifications
* Google Maps embeds for office locations
* Responsive layouts built with Tailwind CSS
* Client-side routing using React Router
* Custom 404/Not Found page

---

# Tech Stack

## Frontend

* **React 18**
* **TypeScript**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **Lucide React**
* **React Icons**

## Animation & Interaction

* **GSAP**
* **@gsap/react**
* **ScrollTrigger**
* **SplitText**
* **Lenis** for smooth scrolling

## Internationalization

* **i18next**
* **react-i18next**
* **i18next-browser-languagedetector**

Supported languages:

* English (`en`)
* Brazilian Portuguese (`pt`)

## Forms & Notifications

* **React Hook Form**
* **Web3Forms**
* **React Hot Toast**

---

# Project Structure

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

---

# Routes

| Route                      | Page                            |
| -------------------------- | ------------------------------- |
| `/`                        | Home                            |
| `/about`                   | About                           |
| `/team`                    | Team                            |
| `/updates`                 | Updates                         |
| `/contact`                 | Contact                         |
| `/commitments`             | Commitments                     |
| `/brazil`                  | Brazil                          |
| `/news/corporate-training` | Corporate Training article      |
| `/news/legal-tips`         | Legal Tips article              |
| `/news/legal-entrepreneur` | Entrepreneur Legal Tips article |
| `/news/cyber-security-law` | Cybersecurity Law article       |
| `*`                        | Not Found                       |

---

# Country Selection

When the application is opened, a location-selection modal allows visitors to choose between:

* **Nigeria** — keeps the visitor on the main website
* **Brazil** — redirects the visitor to `/brazil`

The country-selection interface is implemented in:

```text
src/components/LocationModal.tsx
```

Routing is handled using React Router.

---

# Internationalization

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

The selected language is cached in the browser so that the preference can persist between visits.

## Adding Another Language

1. Create a new locale folder under `src/locales/`.
2. Add a corresponding `translation.json`.
3. Import the translation into `src/i18n.ts`.
4. Register the new language in the `resources` object.
5. Add the language option to the navigation language selector.

---

# Team Data

Team information is maintained separately from the React components in:

```text
src/data/team.json
```

Each team member can contain:

* `id`
* `name`
* `role`
* `image`
* `bio`
* `qualifications`
* `experience`
* `awards`
* `publications`
* `contact`

This allows team information to be updated without restructuring the Team component.

---

# Contact Form

The Contact page submits enquiries through **Web3Forms**.

The application reads the Web3Forms access key from an environment variable:

```text
VITE_WEB3FORMS_KEY
```

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

The `.env` file should not be committed to Git.

The form sends requests to:

```text
https://api.web3forms.com/submit
```

Successful submissions and errors are displayed using React Hot Toast.

---

# Getting Started

## Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* Git installed

Check your versions:

```bash
node -v
npm -v
git --version
```

## Installation

Clone the repository and move into the project directory:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

The `.env` file should remain local and should not be committed to Git.

If a production environment requires the Web3Forms key to be configured separately, the appropriate environment variable should be added through that hosting environment rather than committed to the repository.

---

# Run the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, typically:

```text
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

The production build is generated in:

```text
dist/
```

The contents of `dist/` contain the production-ready website files.

---

# Preview the Production Build

```bash
npm run preview
```

---

# Lint the Project

```bash
npm run lint
```

---

# Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Starts the Vite development server           |
| `npm run build`   | Type-checks and creates the production build |
| `npm run lint`    | Runs ESLint                                  |
| `npm run preview` | Serves the production build locally          |

---

# Animation & Smooth Scrolling

The application initializes GSAP and Lenis in `App.tsx`.

GSAP functionality includes:

* ScrollTrigger
* SplitText
* `useGSAP`

Lenis is connected to GSAP's ticker so that smooth scrolling remains synchronized with scroll-triggered animations.

---

# Responsive Design

The interface uses Tailwind CSS responsive utilities to adapt layouts across screen sizes.

Responsive behavior includes:

* Mobile navigation menu
* Flexible page grids
* Responsive typography
* Responsive images
* Mobile-friendly team profiles
* Responsive contact sections
* Responsive country-selection modal
* Desktop and mobile layouts for content sections

Images are generally allowed to preserve their natural aspect ratio where displaying the complete image is important, particularly for team photographs.

---

# Deployment

## Production Hosting

The live production website is hosted on **Hostinger**:

```text
https://glalpc.com
```

The application is deployed as a Vite production build.

Before deployment, create the production build:

```bash
npm run build
```

This generates the production-ready files in:

```text
dist/
```

The contents of `dist/` are then transferred to the website's Hostinger hosting environment.

Because this is a React single-page application using React Router, the hosting environment must serve the application's entry point for client-side routes such as:

```text
/about
/team
/contact
/brazil
```

when those URLs are accessed directly.

The production Web3Forms configuration must also be available to the production build.

---

# Vercel

A `vercel.json` configuration is included in the repository for **development/testing and preview purposes**.

Vercel is **not the production hosting provider for this website**.

The production website is hosted on Hostinger at:

```text
https://glalpc.com
```

Vercel may be used to preview or test builds, but changes intended for the live website must ultimately be deployed to the Hostinger hosting environment.

---

# Website Maintenance & Access

The website does not use WordPress or another traditional content management system.

It is a **React/Vite application**, which means that website content, structure, styling, and functionality are maintained through the project's source code.

There is currently **no WordPress-style content management dashboard or admin login** for editing website content.

The main systems involved in maintaining the website are:

### 1. GitHub Repository

The GitHub repository contains the website's complete React/Vite source code.

This is where developers can:

* Modify website content
* Update pages
* Add or remove sections
* Update team information
* Update translations
* Add new publications or articles
* Modify styling
* Modify functionality
* Add new routes
* Fix bugs
* Build new features

The website owner/designated maintainer will be added to the repository as a **GitHub collaborator**.

This provides access to the source code so that future changes can be made directly to the project.

### 2. FileZilla

**FileZilla** is used to transfer website files between a computer and the Hostinger server.

The FileZilla/FTP credentials required to access the website's hosting files will be included as part of the handover.

FileZilla can be used to:

* Upload updated production files
* Replace existing website files
* Download files from the server
* Manage the files currently deployed to the website

After making changes to the React project, the usual process is:

```bash
npm run build
```

This generates the updated production files in:

```text
dist/
```

The contents of the `dist/` folder can then be transferred to the appropriate directory on the Hostinger server using FileZilla.

### 3. Hostinger

**Hostinger** provides the hosting/server environment where the production website files are stored and served to visitors.

The live website is:

```text
https://glalpc.com
```

Hostinger is therefore the production hosting environment, while GitHub contains the editable source code.

### 4. No WordPress-Style Admin Dashboard

There is currently **no WordPress-style content management dashboard**.

This means there is no separate `/wp-admin`-type interface where a non-technical user can log in and edit pages or publish articles through a visual content-management system.

Website changes are currently made through the React/Vite source code and then deployed to the Hostinger server.

---

# Recommended Update Workflow

For developers or technically capable maintainers, the recommended workflow is:

```text
1. Clone or pull the GitHub repository
        ↓
2. Make the required changes to the React/Vite source code
        ↓
3. Test the changes locally
        ↓
4. Run npm run lint
        ↓
5. Run npm run build
        ↓
6. Confirm the production build completes successfully
        ↓
7. Upload the contents of dist/ to Hostinger using FileZilla
        ↓
8. Verify the live website at https://glalpc.com
```

The GitHub repository should remain the **source of truth** for the website's source code.

Directly modifying deployed files on the Hostinger server without updating the repository is not recommended because those changes may not be reflected in the source code maintained in GitHub.

---

# Handover Access

The following access information will be provided as part of the website handover:

### GitHub

The designated person will be added as a **collaborator to the website's GitHub repository**.

This provides access to the project's source code and allows authorized changes to be made to the repository.

### FileZilla / Hosting Files

The required **FileZilla credentials** for accessing the website files on the Hostinger server will be included in the handover documentation.

These credentials should be kept confidential and should only be shared with authorized individuals.

### Hostinger

The production website is hosted on Hostinger.


---

# Production Considerations

Before deploying or publishing an update:

1. Confirm `.env` is excluded by `.gitignore`.
2. Ensure production environment variables are correctly configured.
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

9. Resolve any build or linting issues before uploading the production files.
10. Verify the live website after deployment.

---

# Updating Content

## Team

Update:

```text
src/data/team.json
```

Team information can be changed by editing the relevant team member's data.

---

## Translations

Update:

```text
src/locales/en/translation.json
src/locales/pt/translation.json
```

The English and Brazilian Portuguese versions should be kept synchronized when adding or modifying website content.

---

## Images

Place publicly accessible images in:

```text
public/images/
```

Reference them from React using paths such as:

```tsx
<img src="/images/example.jpg" alt="Description" />
```

---

## News & Publications

The current news/editorial pages are implemented as React components under:

```text
src/news/
src/landingpage/
```

New articles can be added by creating a new component and registering its route in:

```text
src/App.tsx
```

---

# Important Maintenance Note

Because the website is a React/Vite application rather than a WordPress website, changes made to the source code do not automatically appear on the live website.

The updated application must first be built:

```bash
npm run build
```

and the resulting production files must then be deployed to the Hostinger server.

Similarly, changes made directly to files on the Hostinger server will affect the live website but will not automatically update the GitHub source code.

For this reason, maintaining the GitHub repository as the primary source of the website code is recommended.

---

# Handover Access

The following access will be provided as part of the website handover.

### GitHub Repository

The designated person will be added as a **collaborator to the website's GitHub repository**.

This provides access to the website's React/Vite source code and allows authorized developers to make, review, and maintain changes to the project.

### FileZilla / Website Files

The required **FileZilla credentials** for accessing the website's files on the Hostinger server will be provided as part of the handover.

FileZilla provides access to the files belonging to this website without requiring access to the wider Hostinger account.

It can be used to:

* Upload updated production files
* Replace existing website files
* Download website files from the server
* Manage the files associated with the live website

### Hostinger Account

**Direct Hostinger account access is not included in this handover.**

The Hostinger account used to host this website also contains other websites and projects belonging to other clients. For security, privacy, and account-management reasons, the Hostinger account credentials cannot be shared.

Access to this specific website's hosting files is instead provided through the **FileZilla credentials supplied with this handover**.

This provides the necessary access to manage and deploy the website's files without exposing unrelated websites, projects, or account information.

### Access Summary

| Access                  | Provided       | Purpose                                                  |
| ----------------------- | -------------- | -------------------------------------------------------- |
| GitHub repository       | Yes            | View and modify the website's source code                |
| FileZilla credentials   | Yes            | Upload and manage this website's files on the server     |
| Hostinger account login | No             | Account contains other client projects and is not shared |
| WordPress admin         | Not applicable | Website is not built with WordPress                      |

---

# License & Ownership

This repository contains the website implementation for **G. L. Agbomoagan Legal Practitioners & Consultants**.

Unless otherwise stated by the repository owner, the site's content, branding, images, logos, and legal/editorial materials should be treated as proprietary and should not be reused without permission.

---

# Author

Developed for **G. L. Agbomoagan Legal Practitioners & Consultants**.
