# FoodieZone

## Live link --> <a href="https://foodiezone02.vercel.app"> FoodieZone <a/>

A modern, responsive food delivery web application interface built from scratch to showcase React fundamentals, component-driven architecture, and modern CSS layouts. 

## Overview

FoodieZone is a front-end React application that displays a list of local restaurants. The primary goal of this project was to build a clean, scalable UI without relying on heavy external UI libraries. It relies entirely on custom, modern CSS, standard React features, and live API integration to fetch real-world data.

## Development Journey / Changelog

* **Phase 1 (The Foundation):** Built the core UI using standard React components and props, initially populated with static, hardcoded JSON data to establish the layout.
* **Phase 2 (State Management):** Introduced the `useState` hook to add interactivity, creating a feature that allows users to filter and view only the top-rated restaurants dynamically.
* **Phase 3 (Live API Integration):** Upgraded the app from static data to real-world data by implementing the `useEffect` hook to fetch and render live restaurant data directly from the Swiggy API. Also added shimmer effect for initial loading.
* **Phase 3.1 (Bugs Fix):** Added search box functionality by using `useState and filter` method to filter out search restaurants. Fixed unable to render the restaurant list from Swiggy API using the CORS Proxy.
* **Phase 4 (Multi-Page Architecture):** Implemented client-side routing using `react-router-dom` to transition from a single view to a comprehensive multi-page application. Added dedicated, fully styled routes for the Home, About Us, Contact, and Offers pages, alongside a custom 404 Error catch-all route to improve user experience and navigation flow.

## Key Features

* **Live API Data Fetching:** Utilizes modern React Hooks to request, parse, and render real-time data from external endpoints.
* **Component-Based Architecture:** The layout is broken down into modular, reusable functional components (`<Header />`, `<Body />`, `<Footer />`, `<RestaurantCard />`).
* **Dynamic Data Rendering:** Restaurant data is mapped from an external JavaScript array and passed down dynamically into the UI using **React Props**.
* **Modern UI/UX:** Features a vibrant, appetizing color scheme (Slate & Orange) tailored for the food industry.
* **Custom CSS Layouts:** Utilizes Flexbox/Grid for a fully responsive design that adapts smoothly to different screen sizes.

## Tech Stack

* **Framework:** React.js
* **Language:** JavaScript (ES6+)
* **Styling:** Custom CSS3 (Flexbox, standard styling)
* **Data:** Swiggy Live API Integration
* **Icons/Assets:** Custom SVG graphics and optimized web images

<img width="2940" height="1674" alt="image" src="https://github.com/user-attachments/assets/83baaeca-85f7-4e95-8aa1-cb07cb86ca0b" />


## Project Structure

will update at the end of this project 
