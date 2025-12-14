<h1 align="center">Subscription Tracker API</h1>

<h3 align="center">
  node.js · express.js · mongodb
</h3>

<p align="center">
  A production-ready Subscription Management System API built with Node.js, Express, and MongoDB.
</p>

# 📦 Subscription Tracker API

A **Subscription Management System API** built using **Node.js, Express.js, and MongoDB**.  
This project is developed by **Soham Vyas**, a student learning backend development and real-world API architecture.

🔗 **GitHub Repository:**  
[https://github.com/soham-v14/Subscription-Tracker.git](https://github.com/soham-v14/Subscription-Tracker-API.git)

---

## 🤖 Introduction

The **Subscription Tracker API** is a backend application designed to manage user subscriptions efficiently.  
It handles real-world concepts like subscription pricing, billing frequency, renewals, and user ownership.

This project focuses on learning:
- Backend system design
- Authentication & authorization
- Database modeling with MongoDB
- Secure and scalable API development

---

## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **JWT (JSON Web Tokens)** – Authentication
- **Arcjet** – Rate limiting & bot protection
- **Upstash (QStash)** – Workflow automation
- **Nodemailer** – Email notifications
- **dotenv** – Environment variable management
- **Nodemon** – Development auto-reload

---

## 🔋 Features

- ✅ User authentication using JWT
- ✅ Subscription CRUD operations
- ✅ MongoDB schema & model relationships
- ✅ Secure API with Arcjet rate limiting
- ✅ Global error handling middleware
- ✅ Automated reminder workflows with Upstash
- ✅ Clean, scalable project structure
- ✅ Environment-based configuration

---

## 🤸 Quick Start

Follow these steps to run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- Git
- MongoDB

---

### Clone the Repository

```bash
git clone https://github.com/soham-v14/Subscription-Tracker.git
cd Subscription-Tracker
```

---

### Install Dependencies

```bash
npm install
```

---

### Environment Variables

Create a `.env.local` file in the project root and add:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=your_mongodb_connection_string

# JWT AUTH
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=your_arcjet_key
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=your_qstash_token

# NODEMAILER
EMAIL_PASSWORD=your_email_password
```

---

### Run the Project

```bash
npm run dev
```

Server will start at:

```
http://localhost:5500
```

---

## 🕸️ Dummy JSON Data

Use this sample data to test subscription creation:

```json
{
  "name": "NETFLIX",
  "price": 3000,
  "currency": "INR",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```


---

## ⭐ Support

If you found this project useful, please consider giving it a **star ⭐** on GitHub.
