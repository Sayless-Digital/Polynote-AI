import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function VerifyEmailSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <Skeleton className="h-16 w-16 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-10 w-24 mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
}
