'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings, LogOut } from 'lucide-react'; // Import icons for additional styling

const UserProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>
    );
  }

  if (!session) {
    return null;
  }

  const { user } = session;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="flex items-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src={user?.image || undefined} className="rounded-full" />
            <AvatarFallback className="bg-blue-500 text-white text-2xl">
              {user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-6">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {user?.name}
            </CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Добро пожаловать в ваш профиль! Здесь вы можете обновить информацию о себе или выйти из
            системы.
          </CardDescription>

          <div className="flex space-x-4 mt-6">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-2"
              onClick={() => alert('Edit Profile clicked')}
            >
              <Settings className="w-5 h-5" />
              <span>Редактировать профиль</span>
            </Button>
            <Button
              variant="destructive"
              className="w-full flex items-center justify-center space-x-2"
              onClick={() => signOut()}
            >
              <LogOut className="w-5 h-5" />
              <span>Выйти</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
