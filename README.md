# FitLog - Workout Library

FitLog is a workout management website built with Next.js. Users can explore different exercises, view workout details, create their daily workout plan, and save exercises for later.

The website is responsive and works on mobile, tablet, and desktop devices.

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Lucide React
- React Toastify
- Context API
- Local Storage

## Key Features

1. **Workout Library:** Users can browse 12 different workouts fetched from an API.
2. **Workout Details:** Each workout has its own details page with equipment, difficulty, duration, calories, rating, and instructions.
3. **Today's Plan:** Users can add up to 5 workouts to their daily workout plan.
4. **Save for Later:** Users can save workouts and access them from the Saved tab.
5. **Live Statistics:** Exercises, total minutes, and calories update based on the selected tab.
6. **Sorting:** Users can sort workouts by duration, calories, and rating.
7. **Workout Management:** Users can mark planned workouts as done or remove workouts from their lists.
8. **Local Storage:** Added and saved workouts remain available after refreshing the page.
9. **Responsive Design:** The layout adjusts to mobile, tablet, and desktop screens.
10. **Custom 404 Page:** Invalid routes display a custom page.

## API Used

All Workouts:
https://api.abcz.workers.dev/api/fitlog

Single Workout:
https://api.abcz.workers.dev/api/fitlog/:id

## Run Locally

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project folder:

```bash
cd fitlog
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Live Website

Live Link: Add after deployment

## GitHub Repository

Repository Link: Add after publishing

## Author

Developed as part of Assignment 6.