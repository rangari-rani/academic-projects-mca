# 🌦️ Weather Glance – Real-Time Forecast App (React + Tailwind)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A sleek, real-time weather forecast application with clean UI, responsive layout, and accurate timezone-adjusted data — powered by the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🚀 Live Demo -  [Try it on Vercel](https://weather-glance-one.vercel.app/)

---

## 📚 About This Project

Originally built during MCA (2022), this project marked my first deep dive into working with external APIs, dynamic UI states, and timezone-aware data presentation.

Despite being a small-scale frontend app, it showcases key strengths:
- API integration and real-time data handling  
- Custom timezone conversion using **Luxon**  
- Responsive UI with **Tailwind CSS**  
- Reusable components and clean layout logic

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

## 🧠 What I Learned

- Integrating real-world APIs with React
- Handling geolocation via browser
- Timezone math and formatting using Luxon
- State-driven UI with `useEffect` and `useState`
- Error handling, feedback toasts, and user-first UX

---

## ⚠️ Limitations (MCA Phase)

- No saved cities or user account
- No dark mode or chart-based weather graphs
- Forecast UI limited to default 5-day/hourly API structure
- API key is hardcoded (no `.env` support)

---

## 🔄 What Came Next

Since this MCA project, I've worked on advanced full-stack applications with authentication, role-based systems and more.

📌 **Check my pinned GitHub repositories for latest monolithic projects.**  

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

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/academic-projects-mca.git
cd academic-projects-mca/weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will be available at:  
🌐 http://localhost:3000  

### 4. Add your API key
   
 - Get a free key from OpenWeatherMap  
 - Paste it in src/weather/weatherService.js:

   ```bash
   const API_KEY = "your_api_key_here";
   ```

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

-  This was one of my early React projects from my MCA days. Feel free to explore my latest work on GitHub or LinkedIn! 
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!

