# FoodieZone

A modern, responsive food delivery web application interface built from scratch to showcase React fundamentals, component-driven architecture, and modern CSS layouts. 

## Overview

FoodieZone is a front-end React application that displays a curated list of local restaurants. The primary goal of this project was to build a clean, scalable UI without relying on heavy external UI libraries. It relies entirely on custom, modern CSS and standard React features.

## Key Features

* **Component-Based Architecture:** The layout is broken down into modular, reusable functional components (`<Header />`, `<Body />`, `<Footer />`, `<RestaurantCard />`).
* **Dynamic Data Rendering:** Restaurant data is mapped from an external JavaScript array and passed down dynamically into the UI using **React Props**.
* **Modern UI/UX:** Features a vibrant, appetizing color scheme (Slate & Orange) tailored for the food industry.
* **Custom CSS Layouts:** Utilizes Flexbox/Grid for a fully responsive design that adapts smoothly to different screen sizes.

## Tech Stack

* **Framework:** React.js
* **Language:** JavaScript (ES6+)
* **Styling:** Custom CSS3 (Flexbox, standard styling)
* **Icons/Assets:** Custom SVG graphics and optimized web images

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Body.jsx
│   ├── Footer.jsx
│   ├── RestaurantCard.jsx
│   └── Logo.jsx
├── Data/
|    |--res-list.js    # Hardcoded restaurant JSON data
├── index.js           # Main application container
└── index.css          # Global styling
|-- index.html         # Main HTML file

