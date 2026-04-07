React Weather Application


A modern, responsive weather dashboard built with React.js and Vite, utilizing the OpenWeatherMap API to provide real-time weather data for cities worldwide.

Features
Real-time Weather Data: Fetches current temperature, wind speed, and weather conditions (e.g., Clear, Clouds) via the OpenWeatherMap API.

Dynamic Search: Allows users to search for specific cities to get instant weather updates.

Asynchronous Data Handling: Uses Axios with the useEffect hook to manage API requests and synchronization.

Error Handling: Implements user-friendly error messages if a city is not found or if the API request fails.

Secure API Management: Configured to use environment variables for API key security, preventing sensitive data from being exposed in the source code.

🛠️ Tech Stack
Frontend: React 19

Build Tool: Vite

HTTP Client: Axios

Styling: Custom CSS

Linting: ESLint

📦 Installation & Setup
1. Clone the repository:
git clone https://github.com/PranavHotha/react-weather-app.git

2. Change directory to the project: 
cd react-weather-app

3. Install dependencies:
npm install

4. Set up Environment Variables:
Create a .env file in the root directory and add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_api_key_here

5. Run the application:
npm run dev
