import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface SignUpFormProps {
  setError: (error: string) => void;
  setPending: (pending: boolean) => void;
  pending: boolean;
}

const SignUpForm = ({ setError, setPending, pending }: SignUpFormProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setPending(false);
      toast.success(data.message);
      router.push('/sign-in');
    } else {
      setPending(false);
      setError(data.error || 'Something went wrong');
      toast.error(data.error || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        disabled={pending}
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <Input
        type="email"
        disabled={pending}
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <Input
        type="password"
        disabled={pending}
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <Input
        type="password"
        disabled={pending}
        placeholder="Confirm Password"
        value={form.passwordConfirm}
        onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })}
        required
      />
      <Button className="w-full" size="lg" disabled={pending}>
        {pending ? 'Signing Up...' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default SignUpForm;
