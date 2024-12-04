import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function VerifyRequest() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-center">Check your email</CardTitle>
          <CardDescription className="text-center">
            A sign in link has been sent to your email address.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground">
          <p>Click the link in the email to sign in to your account.</p>
          <p className="mt-2">If you don't see it, check your spam folder.</p>
        </CardContent>
      </Card>
    </div>
  );
}