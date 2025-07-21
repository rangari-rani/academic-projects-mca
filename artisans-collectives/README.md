# 🛍️ Artisans Collective – React eCommerce Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A beautiful handcrafted products eCommerce frontend built using **React**, **TailwindCSS**, and **Vite**.  
The app offers a seamless shopping experience—from browsing collections to placing an order—fully on the frontend. No backend or authentication system is used.

---

## 🚀 Live Demo -  [Try it on Vercel](https://artisans-collectives.vercel.app/)

---

## 📚 About This Project

This eCommerce frontend was built during my MCA in 2022 to explore product flow, state management, and responsive UI using React and Tailwind CSS.  
While I now work on full-stack, API-integrated platforms, this project showcases my solid grasp of React architecture and component-driven design.

---

## 🛠️ Tech Stack

- [**React**](https://reactjs.org/) – A popular JavaScript library for building fast, interactive user interfaces using reusable components.  
- [**Vite**](https://vitejs.dev/) – A next-generation frontend build tool for lightning-fast development and optimized production builds.  
- [**Tailwind CSS**](https://tailwindcss.com/) – A utility-first CSS framework for designing modern, responsive UIs without writing custom CSS.  
- [**React Router v7**](https://reactrouter.com/en/main) – Enables dynamic client-side routing and navigation between pages like Home, Collections, and Cart.  
- [**React Context API**](https://reactjs.org/docs/context.html) – Provides global state management for cart operations and navigation logic.  
- [**React Icons**](https://react-icons.github.io/react-icons/) – Icon library integration for consistent, scalable vector icons throughout the app.

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

### 🏠 Home Page
- Displays all products fetched from mock data.
- Responsive grid layout with product cards.

### 🧩 Collections Page
- Products grouped by category:
  - **Pottery**: Vase, Cups, Planters, Candle Holders
  - **Painting**: Mandala, Geometry, Nature, Animal
  - **Fashion**: Bracelets, Handbags, Wall Hangings, Caps
- Filters by selected sub-category.

### 🛒 Product Detail Page
- Select size: S, M, L, XL
- View pricing and details
- Add item to cart
- View similar products at bottom

### 🛍️ Cart
- Update quantity or delete items
- Total price dynamically updated
- Guard: Checkout button disabled if cart is empty

### 🚚 Checkout Flow (No login required)
1. **Cart Page** → Proceed to Checkout
2. **Delivery Info Page** → Enter name, phone, address
3. **Place Order Button** → Order Placed Successfully screen

---

## 🔄 What Came Next

Since then, I've worked on more advanced full-stack applications using ReactJS and Spring Boot, building secure, role-based systems with real API integration and database persistence.

📌 **Visit my pinned GitHub repositories to explore real-world monolithic full-stack apps built beyond the academic phase.**  

---

## 📁 Folder Structure

```
artisans-collective/
├── src/
│ ├── assets/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/rangari-rani/artisans-collectives.git
cd artisans-collective
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```
> App will run on http://localhost:5173

---

## 📚 Learning Highlights  

- Building scalable React UI using Tailwind
- Modular component and page design
- Context API for cart and navigation logic
- Route guarding and dynamic rendering

## 🚫 Limitations 

- No backend integration (data is hardcoded).
- No authentication or order persistence.
- No real payment or delivery APIs.

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

This project features academic work from my MCA program in 2022.  
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ Feel free to explore the project for learning and reference. If you found it useful, consider leaving a ⭐!
