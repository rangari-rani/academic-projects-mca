# 🌦️ Weather Glance – Real-Time Forecast App (React + Tailwind)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A sleek, real-time weather forecast application with clean UI, responsive layout, and accurate timezone-adjusted data — powered by the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🚀 Live Demo -  [Try it on Vercel](https://weather-glance-one.vercel.app/)

---

## 📚 About This Project

Originally built during MCA, this project marked my first deep dive into working with external APIs, dynamic UI states, and timezone-aware data presentation using React.

Despite being a small-scale frontend app, it showcases key strengths:
- Real-time data handling from the OpenWeatherMap API
- Custom timezone logic and formatting using **Luxon**
- Geolocation handling through the browser
- State-driven rendering via `useEffect` and `useState`
- Reusable components, clean layout logic, and user-friendly feedback (toasts, error messages)

> 🕒 Organized and published later for clarity, learning, and portfolio presentation.

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/) : JavaScript library for building interactive UIs with reusable components. 
- [Tailwind CSS](https://tailwindcss.com/) : Utility-first framework for responsive design without writing custom CSS.
- [Luxon](https://moment.github.io/luxon/) : A modern JavaScript library for handling dates and times with timezone and formatting support.
- [React Toastify](https://fkhadra.github.io/react-toastify/) : A simple library to show elegant, customizable toast notifications in React.
- [OpenWeatherMap API](https://openweathermap.org/api) : A free weather API that provides current, hourly, and forecasted weather data for any location.  

---

## 📸 Screenshots

> 🌍 The screenshots were updated on **July 13, 2025**, to reflect the latest UI polish and timezone correction (example city: **Berlin, DE**).

![Weather Forecast Page](https://github.com/rangari-rani/weather-app/blob/b88ee15722120604f1677292df8ca919bf1430e2/page1.png) 
![Weather Forecast Page](https://github.com/rangari-rani/weather-app/blob/b88ee15722120604f1677292df8ca919bf1430e2/page2.png)  

---

## ✨ Features

- 🔍 Search for weather by city name
- 📍 Get current location forecast via browser GPS
- 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
- 📅 5-day forecast (daily at 12 PM)
- 🕒 Real-time hourly forecast (next 5 entries)
- 🧭 Timezone correction using UTC offset
- 🔔 Toast notifications for loading and errors

---

### 🛠️ Bug Fix Note (July 2025)

While revisiting this project in **July 2025**, I discovered a **timezone display bug** where cities like **Nagpur** and **Berlin** showed incorrect local times in the forecast view. This issue stemmed from misusing the `timezone` offset returned by the OpenWeatherMap API.

I fixed the bug by:

- Applying the `timezone` offset (`dt + timezone`) to all timestamps
- Using **Luxon** to correctly format and display local time
- Verifying with cities across multiple timezones (UTC±) and daylight saving time (DST) cases

✅ This ensures forecast timestamps now match the **real local time** of any searched city — a common issue in weather apps that's now fully resolved.

---

## 🔄 What Came Next

This weather app helped me transition from basic React concepts to handling real-world APIs, managing live state updates, and implementing timezone logic with libraries like **Luxon**.

After this, I began building **full-stack applications** with **ReactJS** and **Spring Boot**, adding real API integrations, role-based auth, database persistence, and modular monolithic structures.

📌 **Explore my pinned GitHub repositories to see full-stack platforms built beyond the academic phase.**

---

## 📁 Folder Structure 

```
weather-app/
├── public/
├── src/
│ ├── components/   # Forecast, Inputs, TemperatureDetails, TimeAndLocation, TopButtons
│ ├── weather/      # API and data formatting logic
│ ├── App.js
│ └── index.js
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Setup Instructions
> ⚡️ For faster local development, consider migrating the codebase to [Vite](https://vitejs.dev/) — the `src` structure remains compatible.

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/academic-projects-mca.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

> The app will be available at:  
> 🌐 http://localhost:3000  

### 4. Add your API key
   
 - Get a free key from OpenWeatherMap  

   ```text
   const API_KEY = "your_api_key_here"; // in src/weather/weatherService.js
   ```

---

## ⚠️ Limitations  

- No saved cities or user account
- No dark mode or chart-based weather graphs
- Forecast UI limited to default 5-day/hourly API structure

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  

