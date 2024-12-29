# Birthday Calendar for Mariam

This project is a personalized calendar app created as a birthday gift for Mariam. It allows her to explore daily notes and reflections written for her in an interactive format.

## Features

- **Introduction Page:** A welcoming homepage introducing the purpose of the app.
- **Interactive Calendar:** Displays a user-friendly calendar where Mariam can select a day to view personalized notes.
- **Daily Notes:** For each day, a special note or reflection will be shown upon selection.
- **Light/Dark Mode:** The app dynamically adapts to light or dark themes with a navy blue-based palette, Mariam's favorite color.

## Tech Stack

- **Next.js**: Leveraging the App Router for modern server and client component rendering.
- **React Calendar**: An interactive calendar component for seamless date selection.
- **TypeScript**: Ensuring type safety and improved development experience.
- **Tailwind CSS**: For fast, responsive, and beautiful UI styling.
- **Vercel**: Deployment platform for fast and scalable hosting.

## Project Structure

- `src/app/page.tsx`: Home page (introduction).
- `src/app/calendar/page.tsx`: Interactive calendar page.
- `src/components/ClientCalendar.tsx`: Handles client-side interactivity for the calendar.
- `src/app/layout.tsx`: Defines global layout and includes the navigation bar.
- `src/app/globals.css`: Custom global styles including the navy blue color palette.

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/birthday-calendar.git
   cd birthday-calendar
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build the app for production (optional):**
   ```bash
   npm run build
   ```

5. **Preview the production build (optional):**
   ```bash
   npm run start
   ```

## How to Use

1. Visit the homepage to see a warm introduction.
2. Navigate to the calendar by clicking "Calendar" in the navigation bar.
3. Click on any day in the calendar to read the note or reflection for that day.

## Deployment

This app is deployed on **Vercel** for fast and seamless access. Any changes pushed to the `main` branch are automatically deployed.

## Screenshots

### Home Page
A simple and warm introduction to the app.

### Calendar Page
The interactive calendar with a navy blue-themed design.

## License

This project is a personal gift and is not intended for commercial use.
