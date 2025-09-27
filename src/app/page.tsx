import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Heart, Users, Video, BookOpen, Target, Shield, Zap, RefreshCcw } from 'lucide-react'
import EmailSubscription from '@/components/EmailSubscription'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-12 w-12 text-primary-foreground" />
            <span className="text-xl font-bold">Full Circle Resilience</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-300 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-orange-300 transition-colors">Services</Link>
            <Link href="/programs" className="hover:text-orange-300 transition-colors">Programs</Link>
            <Link href="/community" className="hover:text-orange-300 transition-colors">Community</Link>
            <Link href="/resources" className="hover:text-orange-300 transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-orange-300 transition-colors">Contact</Link>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/services">Get Started</Link>
          </Button>
        </nav>
      </header>

      {/* Prominent Headline Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-b-4 border-primary py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Newspaper-style Header */}
            <div className="border-b-2 border-primary mb-8 pb-4">
              <div className="text-sm text-muted-foreground mb-2 font-serif">EST. 2024 • BUILDING RESILIENCE • EMPOWERING LIVES</div>
            </div>

            {/* Main Headline - Prominent Display */}
            <h1 className="headline-primary text-primary leading-none mb-8">
              FULL CIRCLE<br />
              <span className="headline-secondary">
                RESILIENCE
              </span>
            </h1>

            {/* Subheading */}
            <div className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto">
              Building Strength • Fostering Recovery • Creating Lasting Change
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/services">Begin Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-recovery-warm-gold" style={{background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--recovery-warm-gold)))'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-recovery-warm-gold to-primary" style={{background: 'linear-gradient(to right, hsl(var(--recovery-warm-gold)), hsl(var(--primary)))'}}></div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Core Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">OUR APPROACH</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Full Circle Resilience represents the complete journey of healing, growth, and empowerment.
              We believe in addressing every aspect of your well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCcw className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">HOLISTIC HEALING</h3>
                <p className="text-muted-foreground">
                  Addressing mind, body, and spirit through comprehensive, evidence-based approaches that honor your whole self.
                </p>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-recovery-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'hsl(var(--recovery-warm-gold) / 0.1)'}}>
                  <Shield className="h-8 w-8" style={{color: 'hsl(var(--recovery-warm-gold))'}} />
                </div>
                <h3 className="text-xl font-bold mb-3">STRENGTH BUILDING</h3>
                <p className="text-muted-foreground">
                  Developing inner resilience and practical tools to navigate life's challenges with confidence and grace.
                </p>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-recovery-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'hsl(var(--recovery-sage-green) / 0.1)'}}>
                  <Zap className="h-8 w-8" style={{color: 'hsl(var(--recovery-sage-green))'}} />
                </div>
                <h3 className="text-xl font-bold mb-3">LASTING TRANSFORMATION</h3>
                <p className="text-muted-foreground">
                  Creating sustainable change that empowers you to thrive, not just survive, in all areas of your life.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Services Preview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">OUR SERVICES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support designed to meet you wherever you are in your journey toward resilience and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Heart className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Individual Support</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized one-on-one sessions focused on your unique needs, goals, and healing journey.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/services/individual">Learn More</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Group Programs</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with others on similar journeys through structured group sessions and peer support.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/services/group">Learn More</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Target className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Life Coaching</h3>
                <p className="text-muted-foreground text-sm">
                  Goal-oriented sessions to help you build resilience, develop skills, and create lasting positive change.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/services/coaching">Learn More</Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* Email Subscription */}
        <section className="bg-primary/5 rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Join our community for inspiration, resources, and updates on your journey toward full circle resilience.
          </p>
          <div className="max-w-md mx-auto">
            <EmailSubscription />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Become part of a supportive community committed to growth and healing.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-recovery-warm-gold/10 rounded-lg p-12 text-center" style={{background: 'linear-gradient(to right, hsl(var(--primary) / 0.1), hsl(var(--recovery-warm-gold) / 0.1))'}}>
            <h2 className="text-3xl font-bold mb-6">OUR MISSION</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Full Circle Resilience, we believe that true healing encompasses every aspect of who you are.
              Our mission is to provide comprehensive, compassionate support that honors your unique journey
              while building the skills, strength, and resilience needed for lasting transformation.
              Together, we create a complete circle of healing, growth, and empowerment.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8" />
                <h3 className="font-bold text-lg">Full Circle Resilience</h3>
              </div>
              <p className="text-sm opacity-90">
                Comprehensive support for your complete journey toward healing, strength, and lasting transformation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Individual Support</li>
                <li>Group Programs</li>
                <li>Life Coaching</li>
                <li>Family Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Resilience Tools</li>
                <li>Community Support</li>
                <li>Educational Content</li>
                <li>Progress Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <p className="text-sm mb-4">
                Ready to begin your journey toward full circle resilience?
              </p>
              <Button variant="secondary" size="sm" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2024 Full Circle Resilience. Building strength, fostering recovery, creating lasting change.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}