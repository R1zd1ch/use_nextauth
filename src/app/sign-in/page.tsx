// 'use client';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@radix-ui/react-separator';
// import Link from 'next/link';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { useCallback, useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'sonner';
// import { TriangleAlert } from 'lucide-react';

// const SignIN = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [pending, setPending] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setPending(true);
//     const res = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });
//     if (res?.ok) {
//       router.push('/');
//       toast.success('Login successful');
//     } else if (res?.status === 401) {
//       setError('Invalid Credentials');
//       setPending(false);
//     } else {
//       setError('Something went wrong');
//       setPending(false);
//     }
//   };

//   const handleProvider = useCallback(
//     (event: React.MouseEvent<HTMLButtonElement>, provider: 'github' | 'google') => {
//       event.preventDefault();
//       signIn(provider, { callbackUrl: '/' });
//     },
//     [],
//   );

//   const ErrorMessage = ({ error }: { error: string }) => (
//     <div className="bg-destructive/15 p-3 rounded-md flex items-center text-destructive gap-x-2 text-sm mb-6">
//       <TriangleAlert />
//       <p>{error}</p>
//     </div>
//   );

//   return (
//     <div className="h-full flex items-center justify-center bg-black">
//       <Card className="w-full md:h-auto md:w-2/6 sm:w-[420px] p-4 mx-4 sm:mx-0 sm:p-8">
//         <CardHeader>
//           <CardTitle className="text-center">Sign In</CardTitle>
//           <CardDescription className="text-sm text-center text-accent-foreground">
//             Use your email or a service to sign in
//           </CardDescription>
//         </CardHeader>
//         {!!error && <ErrorMessage error={error} />}
//         <CardContent className="px-2 sm:px-6">
//           <form action="" className="space-y-3" onSubmit={handleSubmit}>
//             <Input
//               type="email"
//               disabled={pending}
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <Input
//               type="password"
//               disabled={pending}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <Button className="w-full" size="lg" disabled={pending}>
//               {pending ? 'Signing In...' : 'Sign In'}
//             </Button>
//           </form>
//           <Separator />
//           <div className="flex my-2 justify-evenly mx-auto items-center">
//             <Button
//               disabled={false}
//               onClick={(e) => handleProvider(e, 'google')}
//               variant="outline"
//               size="lg"
//               className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
//             >
//               <FaGoogle className="size-8 left-2.5 top-2.5" />
//             </Button>
//             <Button
//               disabled={false}
//               onClick={(e) => handleProvider(e, 'github')}
//               variant="outline"
//               size="lg"
//               className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
//             >
//               <FaGithub className="size-8 left-2.5 top-2.5" />
//             </Button>
//           </div>
//           <p className="text-center text-sm mt-2 text-muted-foreground">
//             Create new account
//             <Link className="text-sky-700 ml-1 hover:underline cursor-pointer" href="sign-up">
//               Sign Up
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SignIN;

import SignIN from '@/components/auth/signin-page/SignIn';
const SignIn = () => {
  return <SignIN />;
};

export default SignIn;
