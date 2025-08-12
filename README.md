# Admin Management System

A comprehensive React-based admin management system with three distinct admin roles: Super Admin, Farmer Admin, and Product Admin.

## Features

### 🚀 Super Admin
- **Complete System Access**: View and manage all aspects of the system
- **Admin Management**: Create, edit, and delete admin accounts
- **Product Management**: Oversee all products and inventory
- **Transaction History**: View all system transactions
- **Order Management**: Monitor and manage all orders
- **Merchant Management**: Control merchant accounts and activities
- **Farmer Management**: Oversee farmer registrations and activities

### 👨‍🌾 Farmer Admin
- **Farmer Management**: Approve/reject new farmer registrations
- **Notifications**: Receive alerts for new farmer registrations
- **Farmer Details**: View comprehensive farmer information
- **Transaction Monitoring**: Track farmer transactions
- **Registration Approval**: Manage farmer approval workflow

### 📦 Product Admin
- **Product Management**: Add, edit, and manage product inventory
- **Stock Control**: Update stock levels and monitor low stock items
- **Order Management**: Process and update order statuses
- **Merchant Management**: Oversee merchant accounts and performance
- **Transaction Tracking**: Monitor all product-related transactions

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
- Each admin type has specific permissions and access levels
- Secure login system with role validation
- Protected routes based on user role

### 📊 Interactive Dashboards
- Real-time statistics and metrics
- Visual data representation
- Quick access to key functions

### 📋 Data Management
- CRUD operations for all entities
- Search and filter capabilities
- Bulk operations support

### 🔔 Notification System
- Real-time alerts for pending approvals
- Unread notification badges
- Status tracking for all processes

### 📱 Responsive Design
- Mobile-friendly interface
- Modern UI/UX design
- Consistent styling across all components

## Usage Examples

### For Super Admin
1. Login with super admin credentials
2. Access all system modules from the sidebar
3. Monitor system-wide statistics
4. Manage other admin accounts
5. Oversee all business operations

### For Farmer Admin
1. Login with farmer admin credentials
2. Check notifications for new farmer registrations
3. Review and approve/reject farmer applications
4. Monitor farmer activities and transactions
5. Manage farmer database

### For Product Admin
1. Login with product admin credentials
2. Manage product inventory and stock levels
3. Process orders and update statuses
4. Monitor merchant performance
5. Track product transactions

## Future Enhancements

- [ ] Real-time notifications using WebSocket
- [ ] Advanced reporting and analytics
- [ ] Export functionality for data
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced search and filtering
- [ ] Bulk operations
- [ ] Audit logging
- [ ] API integration with backend services

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
