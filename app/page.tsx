import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Transform Your Future with Online Learning
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access world-class courses and unlock your potential with our
              comprehensive learning platform.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/courses">
                <Button size="lg">
                  Browse Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg">
                  Explore Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-lg shadow-sm">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    title: 'Expert Instructors',
    description: 'Learn from industry professionals and experienced educators.',
    icon: BookOpen,
  },
  {
    title: 'Flexible Learning',
    description:
      'Study at your own pace with lifetime access to course content.',
    icon: ArrowRight,
  },
  {
    title: 'Interactive Content',
    description: 'Engage with multimedia content and hands-on exercises.',
    icon: ArrowRight,
  },
];
