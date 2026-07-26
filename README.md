# Personal Portfolio Website

## 📌 Project Overview

This is a Full-Stack Personal Portfolio Website developed using the MERN stack. It showcases personal information, technical skills, projects, and provides a contact form for visitors to send messages. Project details and contact messages are stored in a MongoDB database.

---

## 🚀 Features

- Responsive portfolio website
- Home, About, Skills, Projects, and Contact sections
- View projects stored in MongoDB
- Contact form to send messages
- RESTful API using Express.js
- MongoDB database integration
- Responsive design for desktop and mobile
- Ready for deployment on Vercel and Render

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- Visual Studio Code
- Git & GitHub
- Postman
- MongoDB Atlas

---

## 📁 Project Structure

```
portfolio-website/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   ├── models/
│   └── routes/
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio-website.git
```

### 2. Navigate to the Project

```bash
cd portfolio-website
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the Server

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /projects | Get all projects |
| POST | /projects | Add a new project |

### Contact

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /contact | Save contact message |
| GET | /contact | Get all contact messages |

---

## 💻 Sample Project Data

```json
{
  "title": "Smart Restaurant Service using QR Code",
  "description": "A QR code-based restaurant ordering system that allows customers to scan a QR code, view the digital menu, and place orders without waiting for a waiter.",
  "technology": "HTML, CSS, JavaScript, Node.js, MongoDB"
}
```

---

## 📸 Screenshots

Add screenshots of the following pages:

- Home Page
- About Page
- Skills Page
- Projects Page
- Contact Page
- MongoDB Database
- API Testing in Postman

---

## 🚀 Deployment

### Frontend
- Vercel

### Backend
- Render

### Database
- MongoDB Atlas

---

## 🎯 Learning Outcomes

- Built a full-stack web application
- Created RESTful APIs using Express.js
- Connected MongoDB with Mongoose
- Integrated frontend with backend
- Implemented CRUD operations
- Deployed a full-stack application
- Learned Git and GitHub workflow

---

## 👩‍💻 Author

**Asha Macharla**

B.Tech Student

Aspiring Full-Stack Web Developer

---

## 📄 License

This project is created for educational purposes and is free to use.
