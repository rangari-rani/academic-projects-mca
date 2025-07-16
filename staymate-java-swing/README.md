# 🏨 StayMate – Java Swing Room Management App

StayMate is a desktop-based application built using **Java Swing** that allows users (e.g., property managers) to manage room listings, student allocations, and amenities like Wi-Fi, food, and bed type.

---

## 📚 About This Project

This was one of my earliest Java GUI projects, built during my **MCA phase (2022)**. The goal was to create a fully offline desktop application to manage room properties and student entries. It helped me grasp the fundamentals of Swing UI design, JDBC for database interaction, and object-oriented programming in Java.

---

## 🛠️ Tech Stack

- **[Java Swing](https://docs.oracle.com/javase/tutorial/uiswing/)** – For designing desktop UI components (`JFrame`, `JTable`, `JTextField`, `JCheckBox`, etc.)
- **[JDBC (Java Database Connectivity)](https://docs.oracle.com/javase/tutorial/jdbc/)** – For connecting and querying relational databases (e.g., MySQL)
- **[MySQL](https://www.mysql.com/)** – Backend database for storing users, room data, and categories
- **[NetBeans IDE](https://netbeans.apache.org/)** – Used for drag-and-drop UI, form builder, and Java GUI development

---

## ✨ Features

- 🔐 **Login & Signup** – Basic authentication flow for users
- 🏠 **Home Page UI** – Shows available facilities like Wi-Fi, Double Bed, Food options
- ➕ **Add Property Form** – Fields:
  - Property Name
  - Category
  - Price
  - Address
  - Description
  - Amenities (via checkboxes: Food, Wi-Fi, etc.)
- 📋 **Manage Room Details** – Add, view, and clear room entries in a JTable

---

## 📸 Screenshots

![LoginPage](https://github.com/rangari-rani/academic-projects-mca/blob/6689bae7fe15a682a3d1d9d98b39de6c1b4e592f/staymate-java-swing/login.png)
![searchPage](https://github.com/rangari-rani/academic-projects-mca/blob/6689bae7fe15a682a3d1d9d98b39de6c1b4e592f/staymate-java-swing/home.png)
![addRoom](https://github.com/rangari-rani/academic-projects-mca/blob/6689bae7fe15a682a3d1d9d98b39de6c1b4e592f/staymate-java-swing/property.png)

---

## 🧠 What I Learned

- How to design clean desktop UI using Swing components
- Managing form data, validation, and resetting forms
- Using **JDBC** for DB connection, SQL CRUD operations
- Handling JTable with dynamic row rendering using `DefaultTableModel`
- Modular Java code structure using packages, DAO & models

---

## ⚠️ Limitations (MCA Phase)

- No encryption in login/signup system
- Local-only, no cloud or network access
- UI lacks responsive design (fixed resolution)
- No MVC structure (initial version)

---

## 🔄 What Came Next

Since this MCA project, I've worked on advanced full-stack applications with authentication, role-based systems, and more.

📌 **Check my pinned GitHub repositories for latest monolithic projects.**  

---

## 📁 Folder Structure (Simplified)

```bash
staymate-java-swing/
├── src/
│ ├── dao/
│ ├── entity/
│ ├── gui/
│ ├── images/
├── lib/ # MySQL JDBC driver
├── README.md
```

---

## ⚙️ Setup Instructions

> Prerequisites: JDK 8+, MySQL installed, NetBeans or IntelliJ IDE

### 1. Clone the repo

```bash
git clone https://github.com/rangari-rani/academic-projects-mca.git
cd academic-projects-mca/staymate-java-swing
```

## 2. Import project into your IDE  

- Open with NetBeans (recommended) or IntelliJ
- Make sure the MySQL JDBC driver is added to your classpath

## 3. Setup MySQL database  

- Update your DB connection in ConnectionProvider.java

```bash
String url = "jdbc:mysql://localhost:3306/staymate";
String user = "root";
String password = "your_password";
```

## 4. Run the application  

- Run Main.java
- Login or Sign Up to use the app
- Start adding properties, students, and managing rooms

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

-  This was one of my early projects from my MCA days. Feel free to explore my latest work on GitHub or LinkedIn! 
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!

