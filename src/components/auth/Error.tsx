import { TriangleAlert } from 'lucide-react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <div className="bg-destructive/15 p-3 rounded-md flex items-center text-destructive gap-x-2 text-sm mb-6">
    <TriangleAlert />
    <p>{error}</p>
  </div>
);

export default ErrorMessage;
