'use client';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
          credentials: 'include', // Sends cookies with the request
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('An error occurred while fetching user details', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <div>Error: No user data found</div>;
  }

  return (
    <>
      <Header />
      <h1>Welcome, {user.username}</h1>
      <p>Email: {user.email}</p>
      <Footer />
    </>
  );
};

export default Dashboard;
