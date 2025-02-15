import React, { useState } from 'react';
  import { auth } from '@/firebase/init';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { useToast } from "@/hooks/use-toast";
  import { Link, useNavigate } from 'react-router-dom';

  const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: 'Registration Successful',
          description: 'Your account has been created.',
        });
        navigate('/login'); // Redirect to login page after successful registration
      } catch (error: any) {
        toast({
          title: 'Registration Failed',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
        <p className="text-sm text-center">
          Already have an account? <Link to="/login" className="text-primary">Login</Link>
        </p>
      </form>
    );
  };

  export default RegistrationForm;
