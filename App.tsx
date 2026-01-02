import React, { useState } from 'react';
import { AdminDashboard } from './components/AdminDashboard';
import { ImageEditor } from './components/ImageEditor';
import { UserData } from './types';

function App() {
  // Default Admin User configuration to bypass login
  const adminUser: UserData = { 
    id: 'admin', 
    username: 'Administrator', 
    isActive: true, 
    expiryDate: new Date(2099, 1, 1).toISOString(),
    createdAt: new Date().toISOString(),
    dailyQuota: 99999, 
    usageCount: 0,
    lastUsageDate: new Date().toISOString().split('T')[0]
  };

  // State to toggle between Editor and Admin Dashboard
  const [adminView, setAdminView] = useState<'DASHBOARD' | 'EDITOR'>('EDITOR');

  // Render logic - Automatically logged in as Admin
  if (adminView === 'EDITOR') {
      return (
          <ImageEditor 
              user={adminUser} 
              onLogout={() => {}} 
              onBackToAdmin={() => setAdminView('DASHBOARD')}
          />
      );
  }

  return (
      <AdminDashboard 
          onLogout={() => {}} 
          onGoToEditor={() => setAdminView('EDITOR')} 
      />
  );
}

export default App;