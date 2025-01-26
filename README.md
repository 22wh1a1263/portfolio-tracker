# Portfolio Tracker

Portfolio Tracker is a **web application** to track and manage your stock portfolio. This project allows you to add, edit, and monitor stocks in your portfolio. It provides real-time stock data and helps you keep track of your investments.

## Features
- Track your stock portfolio in real-time.
- Add, edit, and remove stocks from your portfolio.
- See portfolio value, performance, and other statistics.
- Responsive and easy-to-use interface.

## How to Run Locally

Follow these steps to run the project locally on your system.

### 1. Clone the repository:
First, clone the repository to your local machine using the following command:
```bash
git clone https://github.com/22wh1a1263/portfolio-tracker.git
cd portfolio-tracker
```

## Backend Setup
The backend of the application is built using Node.js and Express.

### 1. Go to the backend directory:
```bash
cd backend
```
2. Install backend dependencies:
bash
Copy
npm install
3. Create a .env file in the backend directory with the following content:
bash
Copy
MONGO_URI=mongodb://localhost:27017/portfolio-tracker
PORT=5000
4. Run the backend server:
bash
Copy
npm run dev
The server will run on http://localhost:5000.

Frontend Setup
The frontend is built using React.

1. Go to the frontend directory:
bash
Copy
cd frontend
2. Install frontend dependencies:
bash
Copy
npm install
3. Run the React app:
bash
Copy
npm start
The frontend will run on http://localhost:3000.

Now you can access the application in your browser.

Assumptions
The application assumes basic knowledge of stock portfolios.
You have MongoDB running locally on your machine or have connected to a cloud MongoDB service.
Limitations
No user authentication is implemented.
Limited stock market API data for portfolio tracking.


