import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthError() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-destructive/10 rounded-full">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-center">Authentication Error</CardTitle>
          <CardDescription className="text-center">
            There was a problem signing you in.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link href="/auth/signin">
            <Button>Try Again</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}