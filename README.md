# Angular E-Commerce Application

##  Overview
A modern e-commerce application built with Angular 20, featuring product management, shopping cart functionality, and user authentication.

##  Features
- Product catalog with detailed views
- Shopping cart management
- User authentication and authorization
- Responsive design with Angular Material
- Form handling (both reactive and template-driven)
- Protected routes with Guards
- API integration for product management

## 🛠️ Tech Stack
- Angular 20.2.2
- Angular Material
- TypeScript
- RxJS
- JSON Server (for backend mock)

##  Installation

1. Clone the repository
```bash
git clone https://github.com/nihalsabri/eCommerce--Angular.git
cd App
```

2. Install dependencies
```bash
npm install
```

3. Start the JSON Server (API mock)
```bash
cd server
npm install
npm start
```

4. Start the Angular application (in a new terminal)
```bash
npm start
```

The application will be available at `http://localhost:4200`

##  Project Structure
```
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── services/        # API and business logic
│   ├── models/          # TypeScript interfaces
│   ├── guards/          # Route guards
│   ├── directives/      # Custom directives
│   └── pipes/           # Custom pipes
├── assets/             # Static files
└── environments/       # Environment configurations
```

##  Key Features Explained

### Products Management
- Browse products catalog
- View detailed product information
- Add/Edit products (protected by auth guard)
- Filter and search functionality

### Shopping Cart
- Add/Remove products
- Update quantities
- Calculate totals
- Persist cart data

### Authentication
- User login/signup
- Protected routes
- Auth state management
- Form validations

## Running Tests
```bash
ng test
```

For more information on testing, visit the [Angular Testing Guide](https://angular.dev/guide/testing).

## Responsive Design
The application is fully responsive and works across:
- Desktop browsers
- Tablets
- Mobile devices

## Thank you 

