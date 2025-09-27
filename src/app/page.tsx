import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Heart, Users, Video, BookOpen, Target } from 'lucide-react'
import EmailSubscription from '@/components/EmailSubscription'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/generated/holistic-recovery-logo.png"
              alt="Holistic Recovery Logo"
              className="h-12 w-12"
            />
            <span className="text-xl font-bold">Holistic Recovery</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-300 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-orange-300 transition-colors">Therapy</Link>
            <Link href="/wellness" className="hover:text-orange-300 transition-colors">Wellness</Link>
            <Link href="/services" className="hover:text-orange-300 transition-colors">Speaking</Link>
            <Link href="/resources" className="hover:text-orange-300 transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-orange-300 transition-colors">Contact</Link>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/services">Book Session</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              FINDING WHOLENESS.<br />
              EMBRACING HOPE
            </h1>
            <p className="text-xl mb-4">
              Holistic Recovery & Therapy for a Fulfilling Life
            </p>
            <p className="text-lg mb-8 opacity-90">
              I have experienced their struggles, having overcome a 20 year struggle with addiction and 37 year battle with OCD and I can provide them with the tools to win.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Daily Inspiration Hub */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">DAILY INSPIRATION</h2>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Watch More</Button>
              <Button variant="outline">More Content</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Personal Triumph</h3>
                <p className="text-sm text-muted-foreground">
                  Overcoming 20 years of addiction - my story of hope and healing.
                </p>
                <Badge variant="secondary" className="mt-2">Personal Story</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Mindful Moments</h3>
                <p className="text-sm text-muted-foreground">
                  Daily meditation practices for mental clarity and peace.
                </p>
                <Badge variant="secondary" className="mt-2">Educational Tips</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Quick & Moves</h3>
                <p className="text-sm text-muted-foreground">
                  Simple exercises to boost mood and energy levels throughout your day.
                </p>
                <Badge variant="secondary" className="mt-2">Workout Tips</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Appointment Booking Preview */}
        <section className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">APPOINTMENT BOOKING</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Therapy Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>Individual Therapy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>Group Therapy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-green-500" />
                      <span>Family Therapy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Speaking Engagements</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Overcoming Addiction</li>
                    <li>• Mental Wellness</li>
                    <li>• Faith-Healing</li>
                    <li>• Resilience & Recovery</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-card border rounded-lg p-4 min-w-[280px]">
              <h4 className="font-semibold mb-4">Quick Schedule</h4>
              <Calendar className="h-32 w-full text-gray-300 mb-4" />
              <Button className="w-full" asChild>
                <Link href="/services">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Email Subscription */}
        <section className="bg-primary/5 rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Receive daily inspiration, wellness tips, and updates on your recovery journey.
          </p>
          <div className="max-w-md mx-auto">
            <EmailSubscription />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands on their path to wholeness and hope.
          </p>
        </section>

        {/* Speaking Engagements Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">SPEAKING ENGAGEMENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm">Addiction Recovery</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm">Mental Wellness</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm">Strength & Spirit</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm">Life Coaching</h3>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Holistic Recovery</h3>
              <p className="text-sm opacity-90">
                Providing tools to rebuild your total self through faith, fitness, and therapy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Individual Therapy</li>
                <li>Group Sessions</li>
                <li>Family Counseling</li>
                <li>Speaking Events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Workout Programs</li>
                <li>Meditation Guides</li>
                <li>Progress Tracking</li>
                <li>Daily Inspiration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm">
                Ready to start your recovery journey? Book a session today.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}