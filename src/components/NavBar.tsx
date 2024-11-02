'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from './ui/button';
// import { ModeToggle } from './theme-toggle';

export function NavigationMenuDemo() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <div className="mx-4">
      <div className="w-full px-20 flex justify-between items-center p-4 bg-white dark:bg-[hsl(var(--background))] border-b rounded-xl border-gray-200 dark:border-gray-700 shadow-lg shadow-black/10">
        {/* App Name */}
        <Link href={'/'}>
          <div className="text-xl font-bold text-gray-800 dark:text-[hsl(var(--foreground))]">
            myApp
          </div>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link href="/posts" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    'text-gray-600 dark:text-[hsl(var(--primary-foreground))] hover:text-gray-800 dark:hover:text-[hsl(var(--foreground))] font-medium',
                  )}
                >
                  Посты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/chat" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    'text-gray-600 dark:text-[hsl(var(--primary-foreground))] hover:text-gray-800 dark:hover:text-[hsl(var(--foreground))] font-medium',
                  )}
                >
                  Чат
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Theme Toggle */}
            {/* <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem> */}

            {/* Authentication Status */}
            {status === 'authenticated' ? (
              <NavigationMenuItem>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="outline-none relative float-right">
                    <div className="flex gap-4 items-center">
                      <span className="text-gray-800 dark:text-[hsl(var(--foreground))]">
                        {session.user?.name}
                      </span>
                      <Avatar className="size-10 hover:opacity-75 transition">
                        <AvatarImage
                          className="size-10 hover:opacity-75 transition rounded-full"
                          src={session.user?.image || undefined}
                        />
                        <AvatarFallback className="bg-sky-900 text-white">
                          {avatarFallback}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" side="bottom" className="w-50">
                    <Link href={'/profile'}>
                      <DropdownMenuItem className="h-10">Профиль</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="h-10" onClick={handleSignOut}>
                      Выход
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            ) : (
              <div className="flex items-center gap-4">
                <Button>
                  <Link href="/sign-in">Войдите</Link>
                </Button>
              </div>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default NavigationMenuDemo;
