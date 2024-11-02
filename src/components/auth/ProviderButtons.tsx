import { Button } from '@/components/ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const ProviderButtons = () => {
  const handleProvider = (provider: 'github' | 'google') => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <div className="flex my-2 justify-evenly mx-auto items-center">
      <Button
        onClick={() => handleProvider('google')}
        variant="outline"
        size="lg"
        className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
      >
        <FaGoogle className="size-8 left-2.5 top-2.5" />
      </Button>
      <Button
        onClick={() => handleProvider('github')}
        variant="outline"
        size="lg"
        className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
      >
        <FaGithub className="size-8 left-2.5 top-2.5" />
      </Button>
    </div>
  );
};

export default ProviderButtons;
