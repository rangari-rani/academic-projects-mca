# 🌦️ React Weather App

A modern weather forecast application built with **React**, **Tailwind CSS**, and **Luxon**, powered by the [OpenWeatherMap API](https://openweathermap.org/api). It gives real-time weather conditions, hourly and daily forecasts, and handles timezone conversions manually for accuracy.

---

## 🚀 Live Demo -  [Try it on Vercel](https://weather-glance-three.vercel.app/)

---

## 📚 About This Project

This weather app was originally built during my MCA in 2022 as part of my early learning journey in React, APIs & UI design using Tailwind CSS.  
While I now focus on more advanced full-stack and scalable applications, this project reflects my strong foundation in frontend logic and API integration.  

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/) : A powerful JavaScript library for building fast, interactive user interfaces using components.  
- [Tailwind CSS](https://tailwindcss.com/) : A utility-first CSS framework for building modern, responsive UIs with ease.
- [Luxon](https://moment.github.io/luxon/) : A modern JavaScript library for handling dates and times with timezone and formatting support.
- [React Toastify](https://fkhadra.github.io/react-toastify/) : A simple library to show elegant, customizable toast notifications in React.
- [OpenWeatherMap API](https://openweathermap.org/api) : A free weather API that provides current, hourly, and forecasted weather data for any location.  

---

## 📸 Screenshots

> 🌍 The screenshots were updated on **July 13, 2025**, to reflect the latest UI polish and timezone correction (example city: **Berlin, DE**).

![Screenshot 1](https://github.com/rangari-rani/weather-app/blob/b88ee15722120604f1677292df8ca919bf1430e2/page1.png) 
![Screenshot 2](https://github.com/rangari-rani/weather-app/blob/b88ee15722120604f1677292df8ca919bf1430e2/page2.png)  

---

## ✨ Features

- 🔍 City-based search (e.g., Mumbai, Berlin)
- 📍 Get current location weather using browser GPS
- 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
- ⏳ Accurate 5-day forecast (daily at 12PM)
- 🕒 Real-time hourly forecast (next 5 entries)
- ⚠️ Toast notifications for loading state and errors
- 💡 Mobile responsive UI with Tailwind CSS
- 🌐 **Manual timezone correction** using UTC offset

---

### 🛠️ Bug Fix Note (July 2025)

While revisiting this project in **July 2025**, I discovered a **timezone display bug** where cities like **Nagpur** and **Berlin** showed incorrect local times in the forecast view. This issue stemmed from misusing the `timezone` offset returned by the OpenWeatherMap API.

I fixed the bug by:

- Applying the `timezone` offset (`dt + timezone`) to all timestamps
- Using **Luxon** to correctly format and display local time
- Verifying with cities across multiple timezones (UTC±) and daylight saving time (DST) cases

✅ This ensures forecast timestamps now match the **real local time** of any searched city — a common issue in weather apps that's now fully resolved.

---

## 📁 Folder Structure (Monorepo)

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

1. **Clone this repo**
   ```bash
   git clone https://github.com/rangari-rani/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**
   
 - Get a free key from OpenWeatherMap  
 - Paste it in src/weather/weatherService.js:

   ```bash
   const API_KEY = "your_api_key_here";
   ```

4. **Run the app**

   ```bash
   npm run start
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

-  This was one of my early React projects from my MCA days. Feel free to explore my latest work on GitHub or LinkedIn! 
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!

