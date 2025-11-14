# API Authentication API (JWT Authentication)

A secure and scalable **RESTful Authentication API** built with **Node.js, Express.js, and MongoDB**, implementing **JSON Web Tokens (JWT)** for user login, registration, and protected routes.

---

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (JSON Web Token)**
* **bcrypt.js** for password hashing

---

## 🔐 Features

### 🔹 User Registration

Secure user signup with hashed passwords.

### 🔹 User Login

Returns a signed JWT token upon successful authentication.

### 🔹 Protected Routes

Only accessible with a valid JWT token.

### 🔹 Token Verification Middleware

Middle layer to verify tokens in request headers.

### 🔹 Logout (Client-Side Token Removal)

Secure handling of token invalidation.

---

## 📂 Project Structure

```
api-authentication/
│── controllers/
│     └── authController.js
│── models/
│     └── User.js
│── routes/
│     └── authRoutes.js
│── middleware/
│     └── authMiddleware.js
│── config/
│     └── db.js
│── server.js
│── package.json
```

---

## 🌐 API Endpoints

| Method   | Endpoint    | Description            |
| -------- | ----------- | ---------------------- |
| **POST** | `/register` | Register new user      |
| **POST** | `/login`    | Login user & get JWT   |
| **GET**  | `/profile`  | Access protected route |

---

## 🔒 JWT Authentication Flow

1. User registers → password hashed using **bcrypt**.
2. User logs in → credentials verified.
3. If valid → API generates **JWT token**.
4. Token must be sent in headers for protected routes:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

5. Middleware verifies token and grants/denies access.

---

## ⚙️ Setup Instructions

### 1. Clone Project

```
git clone https://github.com/your-username/pi-authentication.git
cd pi-authentication
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure Environment Variables

Create `.env` file:

```
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/authDB
```

### 4. Start Server

```
npm start
```

---

## 🧪 API Testing (Postman)

### **Register User:**

```
POST http://localhost:8000/api/auth/register
```

Body:

```
{
  "name": "Gaurav",
  "email": "gaurav@example.com",
  "password": "123456"
}
```

### **Login:**

```
POST http://localhost:8000/api/auth/login
```

Response:

```
{
  "token": "your_jwt_token_here"
}
```

### **Access Protected Route:**

```
GET http://localhost:8000/profile
```

Header:

```
Authorization: Bearer your_jwt_token_here
```

---

## 🤝 Contributing

Pull requests are welcome! Please follow clean coding and security practices.

---

## 📜 License

MIT License.
