import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface SignInFormProps {
  setError: (error: string) => void;
  setPending: (pending: boolean) => void;
  pending: boolean;
}

const SignInForm = ({ setError, setPending, pending }: SignInFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push('/');
      toast.success('Login successful');
    } else if (res?.status === 401) {
      setError('Invalid Credentials');
    } else {
      setError('Something went wrong');
    }
    setPending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="email"
        disabled={pending}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        disabled={pending}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button className="w-full" size="lg" disabled={pending}>
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
    </form>
  );
};

export default SignInForm;
