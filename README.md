# 🔗 Weather Application

A full-stack Weather application built with React.js (Frontend) and Node.js + TypeScript (Backend).
It allows users to fetch current weather and forecast data using city name or GPS coordinates.

---

## Features

- Get current weather by city or GPS coordinates
- Get weather forecast (Next 12Hours)
- TypeScript-based backend
- REST API architecture

---

## Tech Stack

- React.js
- Node.js
- Express.js
- Typescript

---



# How to Run the Project

### Clone the Repository
```
 git https://github.com/jaihindkushwah/weather_app.git
 cd weather_app
```

## Backend Setup

### Go to `backend` directory
```
cd backend
```
### Install Dependencies
```
npm install
```

### Environment setup
Create a `.env` file inside the backend folder like `.env.example` and add the following variables:
```
WEATHER_API_KEY="XXXXXXXXXXXXX"
PORT=8000
```

### Run in Development Mode
```
npm run dev
````

### Server URL

After running, the server will be available at:

http://localhost:8000

---

## Frontend Setup

### Go to `frontend` directory
```
cd frontend
```
### Install Dependencies
```
npm install
```

### Environment setup
Create a `.env` file inside the backend folder like `.env.example` and add the following variables:
```
VITE_API_BASE_URL="http://localhost:8000/api"
```

### Run in Development Mode
```
npm run dev
````

### Frontend URL

After running, the frontend server will be available at:

http://localhost:3000

----

##  API Endpoints

#### BASE_URL= http://localhost:8000/api



## Weather Data

Endpoint

GET /weather


Query Parameters

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| `city`    | string | City name (optional) |
| `lat`     | number | Latitude (optional)  |
| `lon`     | number | Longitude (optional) |


cURL
```
curl --location 'http://localhost:8000/api/weather?city=delhi'
```

## Forecast Data

Endpoint

GET /forecast



Query Parameters

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| `city`    | string | City name (optional) |
| `lat`     | number | Latitude (optional)  |
| `lon`     | number | Longitude (optional) |


cURL
```
curl --location 'http://localhost:8000/api/forecast?city=delhi'
```

## AccuWeather API Key Setup

To use this project, you need an AccuWeather API key.

- Go to: https://developer.accuweather.com/
- Create an account
- After logging in, navigate to **Subscriptions & Keys**
- Create a new app in the dashboard
- Copy your API Key and add it to the backend `.env` file