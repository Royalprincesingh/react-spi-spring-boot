# Admin Management System

A comprehensive React-based admin management system with three distinct admin roles: Super Admin, Farmer Admin, and Product Admin.

## Features

### 🚀 Super Admin
- **Complete System Access**: View and manage all aspects of the system
- **Admin Management**: Create, edit, and delete admin accounts
- **Product Management**: Oversee all products and their details
- **Transaction History**: View all system transactions
- **Order Management**: Monitor and manage all orders
- **Merchant Management**: Control merchant accounts and details
- **Farmer Management**: Oversee farmer registrations and accounts

### 👨‍🌾 Farmer Admin
- **Farmer Management**: Approve/reject new farmer registrations
- **Notifications**: Receive alerts for new farmer registrations
- **Farmer Details**: View comprehensive farmer information
- **Transaction Monitoring**: Track farmer transactions
- **Dashboard**: Overview of farmer-related statistics

### 📦 Product Admin
- **Product & Stock Management**: Manage products and inventory levels
- **Order Management**: Process and update order statuses
- **Merchant Management**: Oversee merchant accounts and performance
- **Transaction History**: View all product-related transactions
- **Stock Updates**: Real-time stock level management

## Technology Stack

- **Frontend**: React 18 with JSX
- **Routing**: React Router DOM
- **Styling**: Custom CSS with modern design
- **Build Tool**: Vite
- **State Management**: React Hooks (useState)

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Demo Credentials

### Super Admin
- Username: `superadmin`
- Password: `admin123`

### Farmer Admin
- Username: `farmeradmin`
- Password: `admin123`

### Product Admin
- Username: `productadmin`
- Password: `admin123`

## Project Structure

```
src/
├── components/
│   ├── Login.jsx           # Authentication component
│   ├── SuperAdmin.jsx      # Super admin dashboard
│   ├── FarmerAdmin.jsx     # Farmer admin dashboard
│   └── ProductAdmin.jsx    # Product admin dashboard
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
├── index.css              # Global styles
└── App.css                # Component-specific styles
```

## Key Features

### 🔐 Role-Based Access Control
- Each admin role has specific permissions and access levels
- Secure authentication system
- Automatic routing based on user role

### 📊 Interactive Dashboards
- Real-time statistics and metrics
- Visual status indicators
- Responsive design for all screen sizes

### 🔔 Notification System
- Real-time notifications for pending approvals
- Unread notification badges
- Status tracking for all processes

### 📋 Data Management
- CRUD operations for all entities
- Search and filter capabilities
- Bulk operations support

### 🎨 Modern UI/UX
- Clean and intuitive interface
- Responsive design
- Color-coded status indicators
- Interactive tables and forms

## Usage Examples

### For Super Admin
1. Login with super admin credentials
2. Access all system modules from the sidebar
3. Manage admin accounts, products, merchants, and farmers
4. View comprehensive system analytics

### For Farmer Admin
1. Login with farmer admin credentials
2. Review pending farmer registrations
3. Approve or reject new farmer applications
4. Monitor farmer transactions and activities

### For Product Admin
1. Login with product admin credentials
2. Manage product inventory and stock levels
3. Process orders and update their status
4. Oversee merchant performance and transactions

## Customization

The system is built with modularity in mind, making it easy to:
- Add new admin roles
- Extend functionality for existing roles
- Customize the UI/UX design
- Integrate with backend APIs
- Add new data entities

## Future Enhancements

- Backend API integration
- Real-time notifications
- Advanced analytics and reporting
- Mobile application support
- Multi-language support
- Advanced search and filtering
- Export functionality (PDF, Excel)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
