# Chill Gamer 🎮

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open-green?style=for-the-badge)](https://chill-gamer-rahul-khan-suvo.netlify.app/)

<div align="center">
  <img height="100%" src="https://i.ibb.co.com/kggpnBS5/screely-1738735936074.png"  />
</div>

## Project Overview
A community-driven game review platform where gamers can share reviews, manage content, and track upcoming games. Features secure authentication, personalized watchlists, and dynamic content filtering.

### 🚀 Technologies Used
- **Frontend**: React, Tailwind CSS, DaisyUI  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Authentication**: Firebase, JWT  
- **Hosting**: Firebase (Client), Netlify (Server)  

### 🔑 Core Features
- 🔐 **Secure Auth**: Google/GitHub login + email/password  
- 📝 **Review System**: Create/Edit/Delete reviews with ratings  
- 🎯 **Smart Filtering**: Sort by rating/year, filter by genre  
- 🌓 **Theme Toggle**: Dark/light mode switcher  
- 📌 **Watchlist**: Save games for later  
- 📱 **Responsive**: Mobile-first design  
- 🔄 **Real-time Updates**: Instant content changes  

### 📦 Key Dependencies
#### **Client**
- `react-router-dom`
- `axios`
- `firebase`
- `daisyui`
- `lottie-react`

#### **Server**
- `express`
- `mongoose`
- `cors`
- `dotenv`
- `jsonwebtoken`

### 🛠 Local Setup Guide

#### **Prerequisites**
- Node.js ≥16.x
- MongoDB Atlas account
- Firebase project

#### **1️⃣ Clone Repository**
```bash
git clone https://github.com/RahulKhanSuvo/chill-gamer.git
cd chill-gamer
## 2️⃣ Install Dependencies

### Client
```bash
cd client
npm install
```

### Server
```bash
cd ../server
npm install
```

## 3️⃣ Configure Environment Variables

Create `.env` files inside both the client and server directories.

### Client `.env`
```ini
REACT_APP_API_URL=http://localhost:5000
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

### Server `.env`
```ini
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```
Replace all `your-...` values with actual credentials.

## 4️⃣ Start the Application

### Run Backend
```bash
cd server
npm start
```
This starts the backend server at `http://localhost:5000/`.

### Run Frontend
Open a new terminal, then:
```bash
cd client
npm start
```
This starts the frontend at `http://localhost:3000/`. 
