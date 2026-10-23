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

1. **Workout Library:** Browse 12 different workouts fetched from an API.
2. **Workout Details:** View exercise information, including equipment, difficulty, duration, calories, rating, and instructions.
3. **Today's Plan:** Add up to 5 exercises to a daily workout plan.
4. **Save for Later:** Save workouts and access them from the Saved tab.
5. **Live Statistics:** Exercise count, total minutes, and calories update based on the selected tab.
6. **Sorting:** Sort workouts by duration, calories, or rating.
7. **Workout Management:** Mark workouts as done or remove them from the list.
8. **Local Storage:** Keep planned and saved workouts after refreshing the page.
9. **Responsive Design:** Works on mobile, tablet, and desktop devices.
10. **Custom 404 Page:** Shows a custom error page for invalid routes.

## API Used

**All Workouts:**

https://api.abcz.workers.dev/api/fitlog

**Single Workout:**

https://api.abcz.workers.dev/api/fitlog/:id

## Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/Junaid-redart/fitlog-workout-library.git
```

**2. Go to the project folder**

```bash
cd fitlog-workout-library
```

**3. Install dependencies**

```bash
pnpm install
```

**4. Start the development server**

```bash
pnpm dev
```

Open http://localhost:3000 in browser.

## Live Website

https://fitlog-workout-library-pearl.vercel.app

## GitHub Repository

https://github.com/Junaid-redart/fitlog-workout-library