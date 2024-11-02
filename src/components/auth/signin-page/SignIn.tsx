'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ErrorMessage from '../Error';
import SignInForm from './SignInForm';
import ProviderButtons from '../ProviderButtons';
import { Separator } from '@radix-ui/react-separator';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIN = () => {
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div className=" flex justify-center mt-10">
      <Card className="w-full md:h-auto md:w-2/6 sm:w-[420px] p-4 mx-4 sm:mx-0 sm:p-8 border-black">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use your email or a service to sign in
          </CardDescription>
        </CardHeader>
        {!!error && <ErrorMessage error={error} />}
        <CardContent className="px-2 sm:px-6">
          <SignInForm setError={setError} setPending={setPending} pending={pending} />
          <Separator />
          <ProviderButtons />
          <p className="text-center text-sm mt-2 text-muted-foreground">
            Create new account
            <Link className="text-sky-700 ml-1 hover:underline cursor-pointer" href="sign-up">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIN;
