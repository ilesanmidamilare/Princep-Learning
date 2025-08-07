# Princep 🎓

**Princep** is a full-stack Learning Management System (LMS) that bridges the gap between instructors and students through seamless educational video sharing, payments, and structured learning experiences.

![Princep Screenshot](https://res.cloudinary.com/dhrohwpck/image/upload/v1754443708/f_auto,q_auto,w_1600,dpr_auto/Screenshot_2025-08-06_005726_sik9el.png)

## 🌐 Live Demo

🔗 [Visit Live App](https://princep-client.onrender.com)

## 📦 GitHub Repository

📁 [Princep GitHub Repo](https://github.com/ilesanmidamilare/Princep-Learning)

---

## ✨ Features

- 👨‍🏫 Instructor role: Upload videos organized by course category
- 👨‍🎓 Student role: Browse, purchase, and stream course videos
- 💳 Payment integration via PayPal
- 🔒 Secure authentication and user role management
- 📚 Structured course layout for guided learning

---

## 🧑‍💻 Technologies Used

- **Frontend**: React
- **Backend**: Express
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Payment**: PayPal

---

## 🔐 Default Test Credentials

### 👨‍🏫 Instructor
- **Email**: `instructor@gmail.com`  
- **Password**: `password123`

### 👨‍🎓 Student
- **Email**: `student@gmail.com`  
- **Password**: `password123`

Use these to log in and explore the features of both user roles.

---

## ⚙️ Environment Variables

To run this project locally, you'll need to set the following environment variables:

```env
MONGO_URI=your_mongo_connection_string
CLIENT_URL=http://localhost:3000
CLIENT_ORIGIN=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret_key
