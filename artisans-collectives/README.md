# 🛍️ Artisans Collective – Handcrafted eCommerce UI (React + Tailwind)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A visually polished, handcrafted eCommerce interface featuring smooth navigation, responsive design, and realistic cart functionality — built fully on the frontend with mock product data.

---

## 🚀 Live Demo -  [Try it on Vercel](https://artisans-collectives.vercel.app/)

---

## 📚 About This Project

Originally created during MCA (2022), this project simulates a real shopping flow — from product discovery to checkout.

While lightweight, it reflects strong fundamentals in:
- Component-based UI design
- Context API for global state (cart and navigation)
- Route guarding and conditional rendering
- Mobile-first responsive layout using Tailwind
- Real-world UX practices (disabled checkout, grouped filters, etc.)

> 🕒 Organized and published later for clarity, learning, and portfolio presentation.

---

## 🛠️ Tech Stack

- [**React**](https://reactjs.org/) – JavaScript library for building interactive UIs with reusable components. 
- [**Tailwind CSS**](https://tailwindcss.com/) –  Utility-first framework for responsive design without writing custom CSS.   
- [**React Router v7**](https://reactrouter.com/en/main) – Enables dynamic client-side routing and navigation between pages like Home, Collections, and Cart.  
- [**React Context API**](https://reactjs.org/docs/context.html) – Provides global state management for cart operations and navigation logic.  
- [**React Icons**](https://react-icons.github.io/react-icons/) – Icon library integration for consistent, scalable vector icons throughout the app.
- [**Vite**](https://vitejs.dev/) – Modern build tool for instant dev server and optimized production.  
  
---

## 📸 Screenshots

![Home Page](https://github.com/rangari-rani/artisans-collectives/blob/702760e6aec5c2358f54f7878e803c1e76177934/artisans-collective/public/homepage.png)
_Product List Page_
![Collection Page](https://github.com/rangari-rani/artisans-collectives/blob/702760e6aec5c2358f54f7878e803c1e76177934/artisans-collective/public/collection.png)
_Collection Page_
![Product Page](https://github.com/rangari-rani/artisans-collectives/blob/702760e6aec5c2358f54f7878e803c1e76177934/artisans-collective/public/product.png)
_Product Page_
![Cart Page](https://github.com/rangari-rani/artisans-collectives/blob/702760e6aec5c2358f54f7878e803c1e76177934/artisans-collective/public/cart.png)
_Cart Page_

### Mobile Views
<p align="center">
  <img src="https://github.com/rangari-rani/artisans-collectives/blob/aaea177e1388238a67914350999e81638eae26fb/artisans-collective/public/home_mobile.png" alt="Mobile Product List" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/artisans-collectives/blob/aaea177e1388238a67914350999e81638eae26fb/artisans-collective/public/product_mobile.png" alt="Mobile Product View" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/artisans-collectives/blob/aaea177e1388238a67914350999e81638eae26fb/artisans-collective/public/cart_mobile.png" alt="Mobile Login" width="22%">
  
</p>
_Mobile responsive design screenshots_

---

## ✨ Features

- **Home Page**: Responsive grid layout with all products (mock data).
- **Collections**: Category-wise grouping — Pottery, Painting, Fashion. Filters by sub-category.
- **Product Page**: Size select, price info, add to cart, similar items shown.
- **Cart**: Update/delete items, live price total, checkout button guard.
- **Checkout**: 3-step flow — Cart → Delivery Info → Success screen.

---

## 🔄 What Came Next

This project marked my first serious attempt at building a realistic frontend flow—from product discovery to checkout—with reusable components and UX decisions.  

After this, I began building **full-stack applications** with **ReactJS** and **Spring Boot**, adding real API integrations, role-based auth, database persistence, and modular monolithic structures.

📌 **Explore my pinned GitHub repositories to see full-stack platforms built beyond the academic phase.**

---

## 📁 Folder Structure

```
artisans-collective/
├── src/
│ ├── assets/
│ ├── components/    # CartTotal, Navbar, ProductItem etc
│ ├── context/       # ShopContext
│ ├── pages/         # Cart, Home, Orders etc
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Setup Instructions  

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/academic-projects-mca.git
cd artisans-collectives
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server  

```bash
npm run dev
```
> The app will be available at:   
> 🌐 http://localhost:5173  

---

## ⚠️ Limitations

- No backend integration — all product data is hardcoded.
- No authentication or user session management.
- No real payment flow or delivery tracking (UI-only simulation).

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

This project is based on academic work from my MCA program (2022).  
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!
