# 🏡 Real Estate Brokerage Web App

A full-stack real estate web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).  
The app allows users to browse, search, and filter properties. Admin users can securely add property listings. The app is responsive and works across all devices.

---

## 🔧 Technologies Used

- **Frontend**: React.js + Vite
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Image Upload**: Cloudinary

---

## ✅ Features

- User authentication (Signup/Login/Logout)
- Role-based access (Only admins can add properties)
- Property search and filter
- Responsive UI (mobile + desktop)
- Cloud-based image upload
- Secure APIs with JWT protection

---

## 🔐 Admin Access

Only specific emails can access the **Add Property** page:

---



## ⚙️ Setup Instructions (Local Development)

# 1. Clone the repo
git clone https://github.com/your-username/real-estate-brokerage-app.git

# 2. Backend Setup
backend/routes/propertyRoutes.js
replace the "def@gmail.com" & "abc@gmail.com" with the emails of the admin. you can also add more emails to make more number of admins.

backend/.env
fill the required fields given there.

cd backend
npm install
npm start

# 3. Frontend Setup
frontend/src/components/Navbar.jsx
replace the emails here with the admin emails. Such that only admins can access the section of adding property.
const adminEmails = ["abc@gmail.com", "def@gmail.com"];

cd frontend
npm install
npm run dev

# 4. Also install the required dependencies like bcrypt etc.....
