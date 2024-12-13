# Tour Packing and Direction Assistant

Welcome to the **Tour Packing and Direction Assistant**! This web application is designed to help users efficiently pack for their travels and find the shortest path to their destination. The platform leverages **Greedy Algorithm** and **0/1 Knapsack Problem** to optimize packing and travel planning.

---

## Table of Contents
- [Features](#features)
  - [Packing Assistant](#1-packing-assistant)
  - [Shortest Path Suggestion](#2-shortest-path-suggestion)
- [Technologies Used](#technologies-used)
- [Algorithms Used](#algorithms-used)
  - [Greedy Algorithm](#greedy-algorithm)
  - [0/1 Knapsack Problem](#01-knapsack-problem)
- [Setup Instructions](#setup-instructions)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features

### **1. Packing Assistant**
- **Bag Customization**:
  - Upload a bag image and specify its weight capacity.
- **Item Input**:
  - Enter items with attributes such as weight and cost.
- **Optimal Packing Suggestion**:
  - The assistant uses the **0/1 Knapsack Problem** to calculate the best packing strategy.
  - Balances weight and cost to maximize user-defined revenue.
- **Output**:
  - A visual representation of the packed bag.
  - Tabular summary displaying:
    - Item Name
    - Weight
    - Cost
    - Revenue-to-weight ratio.

### **2. Shortest Path Suggestion**
- **Searchable Dropdown**:
  - Choose starting point and destination.
- **Shortest Route Recommendation**:
  - Uses a predefined graph to compute the shortest path.
  - Displays:
    - Destination
    - Estimated travel time
    - Recommendation type (Suggested, Custom, No Suggestion).
- **Optional Navigation**:
  - Easily switch to the Packing Assistant from this section.

---

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Python
- **Algorithm**: 0/1 Knapsack Problem, Greedy Algorithm
- **Graph Representation**: Predefined adjacency list for shortest path calculation.

---

## Algorithms Used

### **Greedy Algorithm**
- Applied in the shortest path computation.
- Ensures that the most efficient route is selected based on travel time.

### **0/1 Knapsack Problem**
- Used in the Packing Assistant to optimize item selection based on:
  - Maximum weight capacity.
  - Best cost-to-weight ratio.
- Implements a dynamic programming approach for precise optimization.

---

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tour-packing-assistant.git
   cd tour-packing-assistant
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Access the application**:
   - Open your browser and go to `http://localhost:3000`.

---

## Future Enhancements
- Integrate real-time traffic data for dynamic route suggestions.
- Allow collaborative packing for group tours.
- Add multi-language support.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
