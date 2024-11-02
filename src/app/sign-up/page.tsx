// 'use client';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@radix-ui/react-separator';
// import Link from 'next/link';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { useEffect, useState } from 'react';
// import { toast } from 'sonner';
// import { useRouter } from 'next/navigation';
// import { TriangleAlert } from 'lucide-react';

// const SignUP = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     passwordConfirm: '',
//   });
//   const [pending, setPending] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setPending(true);
//     const res = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     });
//     if (res.ok) {
//       setPending(false);
//       const data = await res.json();
//       toast.success(data.message);
//       router.push('/sign-in');
//     } else if (res.status === 400) {
//       setPending(false);
//       const data = await res.json();
//       setError(data.error);
//       toast.error(data.error);
//     } else if (res.status === 500) {
//       setPending(false);
//       const data = await res.json();
//       setError(data.error);
//       toast.error('Something went wrong');
//     }
//   };

//   useEffect(() => {
//     console.log(form);
//   }, [form]);

//   return (
//     <div className="h-full flex items-center justify-center bg-black">
//       <Card className="w-full md:h-auto md:w-2/6 sm:w-[420px] p-4 mx-4 sm:mx-0 sm:p-8">
//         <CardHeader>
//           <CardTitle className="text-center">SignUp</CardTitle>
//           <CardDescription className="text-sm text-center text-accent-foreground">
//             Используйте почту или сервис для создания аккаунта
//           </CardDescription>
//         </CardHeader>
//         {!!error && (
//           <p className="bg-destructive/15 p-3 rounded-md flex items-center text-destructive gap-x-2 text-sm mb-6">
//             <TriangleAlert></TriangleAlert>
//             <p>{error}</p>
//           </p>
//         )}
//         <CardContent className="px-2 sm:px-6">
//           <form onSubmit={handleSubmit} action="" className="space-y-3">
//             <Input
//               type="text"
//               disabled={pending}
//               placeholder="FullName"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             ></Input>
//             <Input
//               type="email"
//               disabled={pending}
//               placeholder="email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             ></Input>
//             <Input
//               type="password"
//               disabled={pending}
//               placeholder="password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               required
//             ></Input>
//             <Input
//               type="password"
//               disabled={pending}
//               placeholder="confirm password"
//               value={form.passwordConfirm}
//               onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })}
//               required
//             ></Input>
//             <Button className="w-full" size="lg" disabled={pending}>
//               Next
//             </Button>
//           </form>
//           <Separator></Separator>
//           <div className="flex my-2 justify-evenly mx-auto items-center">
//             <Button
//               disabled={false}
//               onClick={() => {}}
//               variant="outline"
//               size="lg"
//               className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
//             >
//               <FaGoogle className="size-8 left-2.5 top-2.5"></FaGoogle>
//             </Button>
//             <Button
//               disabled={false}
//               onClick={() => {}}
//               variant="outline"
//               size="lg"
//               className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
//             >
//               <FaGithub className="size-8 left-2.5 top-2.5"></FaGithub>
//             </Button>
//           </div>
//           <p className="text-center text-sm mt-2 text-muted-foreground">
//             Already have an account?
//             <Link className="text-sky-700 ml-1 hover:underline cursor-pointer" href="sign-in">
//               SignIn
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SignUP;
import SignUP from '@/components/auth/signup-page/SignUp';
const SignUp = () => {
  return <SignUP />;
};

export default SignUp;
