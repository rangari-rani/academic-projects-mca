# 🏨 StayMate – Property Room Management System (Java Swing GUI)  

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)  

StayMate is a desktop-based application built using **Java Swing** that allows users (e.g., property managers) to manage room listings, student allocations, and amenities like Wi-Fi, food, and bed type.

---

## 📚 About This Project  

Originally created during MCA, this project simulates student allocations, room listings, and amenity tracking.  

While offline and desktop-based, it reflects strong fundamentals in:  
- Swing-based GUI design and form handling
- Object-Oriented Programming (OOP) principles
- JDBC for persistent data storage (CRUD operations)
- Modular Java classes for core features (rooms, students, amenities)
- Multi-window UI and input validation

> 🕒 Organized and published later for clarity, learning, and portfolio presentation.

---

## 🛠️ Tech Stack

- **[Java Swing](https://docs.oracle.com/javase/tutorial/uiswing/)** – For designing desktop UI components (`JFrame`, `JTable`, `JTextField`, `JCheckBox`, etc.)
- **[JDBC (Java Database Connectivity)](https://docs.oracle.com/javase/tutorial/jdbc/)** – For connecting and querying relational databases (e.g., MySQL)
- **[MySQL](https://www.mysql.com/)** – Backend database for storing users, room data, and categories
- **[NetBeans IDE](https://netbeans.apache.org/)** – Used for drag-and-drop UI, form builder, and Java GUI development

---

## 📸 Screenshots

![LoginPage](https://github.com/rangari-rani/academic-projects-mca/blob/6689bae7fe15a682a3d1d9d98b39de6c1b4e592f/staymate-java-swing/login.png)
![searchPage](https://github.com/rangari-rani/academic-projects-mca/blob/6689bae7fe15a682a3d1d9d98b39de6c1b4e592f/staymate-java-swing/home.png)
![addRoom](https://github.com/rangari-rani/academic-projects-mca/blob/6689bae7fe15a682a3d1d9d98b39de6c1b4e592f/staymate-java-swing/property.png)  

---

## ✨ Features  

- 🔐**Login & Signup** – Basic user authentication flow
- 🏠**Home Screen** – Displays available facilities like Wi-Fi, food options, and double bed availability
- ➕**Add Property** – A form to enter property name, category, price, address, description, and select amenities via checkboxes
- 📋**Manage Room Details** – Add, view, and clear room entries using a JTable interface  

---

## 🔄 What Came Next

This project laid the foundation for my transition from desktop-based Java applications to full-stack web development using modern frameworks.  
 
After this, I began building **full-stack applications** with **ReactJS** and **Spring Boot**, adding real API integrations, role-based auth, database persistence, and modular monolithic structures.

📌 **Explore my pinned GitHub repositories to see full-stack platforms built beyond the academic phase.**

---

## 📁 Folder Structure  

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

### 1. Clone the repository  

```bash
git clone https://github.com/rangari-rani/academic-projects-mca.git
cd staymate-java-swing
```

## 2. Import project into your IDE  

- Open with NetBeans (recommended) or IntelliJ
- Make sure the MySQL JDBC driver is added to your classpath

## 3. Setup MySQL database  

- Update your DB connection in ConnectionProvider.java

```text
String url = "jdbc:mysql://localhost:3306/staymate";
String user = "root";
String password = "your_password";
```

## 4. Run the application  

- Run Main.java
- Login or Sign Up to use the app
- Start adding properties, students, and managing rooms

---

## ⚠️ Limitations  

- Login/Signup lacks encryption and secure storage
- Desktop-only app with no cloud or network connectivity
- Fixed-size UI layout (non-responsive, resolution-dependent)

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact
  
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  

