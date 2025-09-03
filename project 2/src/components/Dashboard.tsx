import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">{user?.displayName || user?.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl">
          <div className="px-8 py-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome, {user?.displayName || 'User'}!
            </h2>
            <p className="text-gray-600 mb-8">
              You're now signed in to your account. This is your protected dashboard area.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-2">Account Details</h3>
              <div className="text-left space-y-2">
                <p className="text-sm"><span className="font-medium">Email:</span> {user?.email}</p>
                <p className="text-sm"><span className="font-medium">User ID:</span> {user?.id}</p>
                <p className="text-sm"><span className="font-medium">Account Created:</span> {new Date(user?.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;