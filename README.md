# 🍽️ LocalChefBazaar  
---
## 📌 Overview
LocalChefBazaar is a MERN stack web application that connects local home chefs with customers who want fresh, homemade meals. Users can explore daily meals, place orders, make secure payments, track orders, give reviews, and save favorite meals. Chefs and Admins manage meals, orders, users, and platform activities through role-based dashboards.

---

## 🛠️ Tech Stack
**Client:** React, React Router, Tailwind CSS, Firebase Auth, Axios, React Hook Form, Framer Motion  
**Server:** Node.js, Express.js, MongoDB, JWT, Stripe, dotenv
---
## ✨ Key Features
- Email & Password Authentication (Firebase)
- JWT-based protected routes
- Role-based Dashboard (User / Chef / Admin)
- Meal listing with pagination & price sorting
- Order placement with Stripe payment
- Review & Favorite meal system
- Chef meal & order management
- Admin user, request & statistics management
- Fully responsive & animated UI
---
## 📦 NPM Packages Used
react, react-router-dom, axios, firebase, react-hook-form, framer-motion, sweetalert2, recharts, express, mongodb, jsonwebtoken, stripe
---

## ⚙️ Local Setup
```bash
git clone <client-repo>
git clone <server-repo>

# Client
cd client && npm install && npm run dev

# Server
cd server && npm install && npm run start
