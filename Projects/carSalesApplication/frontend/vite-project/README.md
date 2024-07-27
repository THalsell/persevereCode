This project is a car dealership website built using React, React Router, and Material-UI. The application allows users to browse through a list of cars, view details about specific cars, and navigate between different pages.

-Home page with a welcome message and a link to view the car list.
-Car list page that displays all available cars.
-Car details page that shows detailed information about a selected car.
-Navigation between pages using React Router.

Components
HomePage
The HomePage component is the landing page of the application. It includes a welcome message and a button to view the car list.

CarList
The CarList component fetches and displays a list of cars. Each car is displayed as a card with a photo, make, model, rating, and price. Clicking on a card navigates to the car details page for that specific car.

CarDetails
The CarDetails component fetches and displays detailed information about a specific car. It uses the id parameter from the URL to fetch the car data.

API Integration
The application integrates with an external API to fetch car data. The API functions are defined in utls/userHelper.js.

getAllCars
Fetches all available cars from the API.

getCarById
Fetches detailed information about a specific car using its ID.

Styling
The application uses Material-UI for styling. Components are styled using the styled function from Material-UI.