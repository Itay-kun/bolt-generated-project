import React from 'react';
  import { auth } from '@/firebase/init';
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { signOut } from 'firebase/auth';
  import { Button } from "@/components/ui/button";
  import { useToast } from "@/hooks/use-toast";
  import { useNavigate } from 'react-router-dom';
  import Navbar from '@/components/layout/Navbar';

  const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        toast({
          title: 'Logout Successful',
          description: 'You have been successfully logged out.',
        });
        navigate('/');
      } catch (error: any) {
        toast({
          title: 'Logout Failed',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!user) {
      return <div>Please <a href="/login">login</a> to view your profile.</div>;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100">
        <Navbar />
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Name:</p>
              <p>{user.displayName || 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{user.email}</p>
            </div>
            <Button onClick={handleLogout} className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;
