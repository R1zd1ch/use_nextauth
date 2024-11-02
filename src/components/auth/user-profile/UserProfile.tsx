'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Ensure you import useRouter
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const UserProfile = () => {
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter(); // Call useRouter at the top level

  // Redirect if session is not available
  React.useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) {
      router.push('/'); // Redirect to home if not logged in
    }
  }, [session, status, router]);

  // Loading or error handling
  if (status === 'loading') {
    return <div className="text-gray-600">Loading...</div>;
  }

  if (!session) {
    return null; // This case shouldn't be reached due to redirection
  }

  const { user } = session;

  return (
    <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader>
        <div className="flex items-center">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user?.image || undefined} />
            <AvatarFallback className="bg-sky-900 text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {user?.name}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500 dark:text-gray-400 mt-2">
          This is a brief bio about the user.
        </CardDescription>
        <Button className="mt-4">Edit Profile</Button>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
