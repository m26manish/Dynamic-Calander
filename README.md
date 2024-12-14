# Vite React App - Dynamic Calendar with Event Management

## Project Overview

This project is a dynamic calendar application built using **Vite** and **React**. The app allows users to:

- Mark events with time, date, and details.
- Select a date to highlight it on the calendar.
- Use pop-up modals to interact with event details and input forms.

The app provides a seamless user experience with a single screen and two modals for managing calendar events.

---

## Features

1. **Dynamic Calendar**

   - Displays a dynamic, interactive calendar.
   - Dates can be selected, and the selected date gets highlighted.
   - Events with time and details can be marked for specific dates.

2. **Event Management**

   - Users can add and view events.
   - Events include date, time, and descriptions.

3. **Two Pop-up Modals**

   - **Modal 1:** For adding or editing events.
   - **Modal 2:** For viewing event details.

4. **Single Screen UI**
   - The entire functionality is built into a single responsive screen for better user experience.

---

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** SCSS / CSS (as preferred)
- **State Management:** React State / Context API

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-project
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

---

## Live Project

Check out the live version of the project here:
[Dynamic Calendar App](https://thunderous-capybara-1e3a94.netlify.app/)

---

## Folder Structure

```
src/
|-- components/
|   |-- Calendar.jsx      # Main calendar component
|   |-- EventModal.jsx    # Modal to add/edit events
|   |-- ViewEventModal.jsx# Modal to view event details
|
|-- styles/
|   |-- calendar.scss     # Styling for calendar
|   |-- modals.scss       # Styling for modals
|
|-- App.jsx               # Main App component
|-- main.jsx              # Vite entry point
|-- index.html            # Main HTML file
```

---

## Usage

- **Select a Date:** Click on any date in the calendar to mark it as selected.
- **Add Events:** Use the first modal to input event details like time and description.
- **View Events:** Open the second modal to view event details for a selected date.

---

## Scripts

- **Run Dev Server:**

  ```bash
  npm run dev
  ```

- **Build for Production:**

  ```bash
  npm run build
  ```

- **Preview Build:**
  ```bash
  npm run preview
  ```

---

## Screenshots

Add screenshots here to showcase the app's UI and features.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

For questions or collaboration:

- **Name:** Your Name
- **Email:** your.email@example.com
- **GitHub:** [your-username](https://github.com/your-username)

---
