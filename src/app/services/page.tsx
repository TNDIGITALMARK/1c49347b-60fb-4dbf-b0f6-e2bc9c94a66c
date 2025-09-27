'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Heart, Users, UserCheck, Cross, Clock, MapPin, Video, Mic } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'therapy' | 'speaking'>('therapy')
  const { toast } = useToast()

  const handleTherapySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Appointment Request Submitted",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    })
  }

  const handleSpeakingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Speaking Engagement Request Submitted",
      description: "We'll review your request and respond within 48 hours.",
    })
  }

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
            <Link href="/services" className="text-orange-300">Therapy</Link>
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

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Therapy Services & Speaking Engagements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing comprehensive recovery support through individual sessions, group therapy,
            family counseling, and inspiring speaking engagements that transform lives.
          </p>
        </div>

        {/* Service Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === 'therapy' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('therapy')}
              className="px-8"
            >
              <Heart className="h-4 w-4 mr-2" />
              Therapy Services
            </Button>
            <Button
              variant={activeTab === 'speaking' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('speaking')}
              className="px-8"
            >
              <Mic className="h-4 w-4 mr-2" />
              Speaking Engagements
            </Button>
          </div>
        </div>

        {activeTab === 'therapy' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Therapy Services */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Therapy Options</h2>

              {/* Individual Therapy */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-red-500" />
                    <CardTitle>Individual Therapy</CardTitle>
                  </div>
                  <CardDescription>
                    One-on-one sessions focused on your unique recovery journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>50-minute sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>In-person & telehealth available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cross className="h-4 w-4 text-muted-foreground" />
                      <span>Faith-based approach available</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Badge variant="secondary">Addiction Recovery</Badge>
                    <Badge variant="secondary" className="ml-2">OCD Support</Badge>
                    <Badge variant="secondary" className="ml-2">Mental Wellness</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Group Therapy */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-blue-500" />
                    <CardTitle>Group Therapy</CardTitle>
                  </div>
                  <CardDescription>
                    Connect with others on similar journeys in supportive group settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>90-minute sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <UserCheck className="h-4 w-4 text-muted-foreground" />
                      <span>6-8 participants maximum</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span>Virtual groups available</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Badge variant="secondary">Peer Support</Badge>
                    <Badge variant="secondary" className="ml-2">Shared Experience</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Family Therapy */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-green-500" />
                    <CardTitle>Family Therapy</CardTitle>
                  </div>
                  <CardDescription>
                    Healing relationships and rebuilding family connections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>60-minute sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span>Relationship repair focus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cross className="h-4 w-4 text-muted-foreground" />
                      <span>Reconnecting with faith together</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Badge variant="secondary">Family Healing</Badge>
                    <Badge variant="secondary" className="ml-2">Communication</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Addiction Counseling with Fitness */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Addiction Counseling + Fitness Integration</CardTitle>
                  <CardDescription>
                    Comprehensive recovery combining mental health support with physical wellness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    My personal experience overcoming 20 years of addiction gives me unique insight
                    into what truly works. I combine evidence-based therapy with fitness plans that
                    rebuild both mind and body.
                  </p>
                  <div className="mt-4">
                    <Badge variant="secondary">Personal Experience</Badge>
                    <Badge variant="secondary" className="ml-2">Holistic Approach</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Faith-Based Guidance */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Cross className="h-6 w-6 text-purple-500" />
                    <CardTitle>Faith-Based Guidance</CardTitle>
                  </div>
                  <CardDescription>
                    Reconnecting clients with their relationship with Christ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    For those seeking spiritual healing alongside recovery, I offer faith-integrated
                    therapy that helps rebuild your relationship with God and find purpose in your journey.
                  </p>
                  <div className="mt-4">
                    <Badge variant="secondary">Spiritual Healing</Badge>
                    <Badge variant="secondary" className="ml-2">Christ-Centered</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Therapy Session</CardTitle>
                  <CardDescription>
                    Take the first step towards recovery and healing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTherapySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div>
                      <Label htmlFor="therapyType">Therapy Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select therapy type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual Therapy</SelectItem>
                          <SelectItem value="group">Group Therapy</SelectItem>
                          <SelectItem value="family">Family Therapy</SelectItem>
                          <SelectItem value="addiction">Addiction Counseling + Fitness</SelectItem>
                          <SelectItem value="faith">Faith-Based Guidance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="issue">Issue Needing to be Addressed *</Label>
                      <Textarea
                        id="issue"
                        placeholder="Please describe what you'd like to work on..."
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input id="preferredDate" type="date" />
                    </div>

                    <div>
                      <Label htmlFor="sessionType">Session Format</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in-person">In-Person</SelectItem>
                          <SelectItem value="telehealth">Telehealth</SelectItem>
                          <SelectItem value="either">Either Format</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Why Choose Our Services?</h4>
                      <p className="text-sm text-muted-foreground">
                        "I have experienced their struggles, having overcome a 20 year struggle with
                        addiction and 37 year battle with OCD and I can provide them with the tools to win."
                      </p>
                    </div>

                    <Button type="submit" className="w-full">
                      Request Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'speaking' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Speaking Topics */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Speaking Topics</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                      <Heart className="h-12 w-12 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Overcoming Addiction</h3>
                    <p className="text-sm text-muted-foreground">
                      Real stories of triumph over 20 years of addiction
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Mental Wellness</h3>
                    <p className="text-sm text-muted-foreground">
                      Managing OCD and mental health challenges
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <Cross className="h-12 w-12 text-purple-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Faith & Healing</h3>
                    <p className="text-sm text-muted-foreground">
                      Finding God in the midst of struggle
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <UserCheck className="h-12 w-12 text-green-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Resilience & Recovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Building tools for lasting transformation
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Speaking Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    With decades of personal recovery experience and professional training,
                    I bring authentic, hope-filled messages that resonate with audiences
                    facing their own struggles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>• Corporate wellness events</p>
                    <p>• Addiction recovery conferences</p>
                    <p>• Church and faith-based gatherings</p>
                    <p>• Mental health awareness events</p>
                    <p>• University and school presentations</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Speaking Booking Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Book Speaking Engagement</CardTitle>
                  <CardDescription>
                    Inspire your audience with messages of hope and recovery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSpeakingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input id="contactName" required />
                      </div>
                      <div>
                        <Label htmlFor="organization">Organization *</Label>
                        <Input id="organization" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <Input id="contactPhone" type="tel" required />
                    </div>

                    <div>
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input id="contactEmail" type="email" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventDate">Event Date *</Label>
                        <Input id="eventDate" type="date" required />
                      </div>
                      <div>
                        <Label htmlFor="eventTime">Event Time *</Label>
                        <Input id="eventTime" type="time" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="audienceSize">Estimated Audience Size *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select audience size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-25">1-25 people</SelectItem>
                          <SelectItem value="26-50">26-50 people</SelectItem>
                          <SelectItem value="51-100">51-100 people</SelectItem>
                          <SelectItem value="101-250">101-250 people</SelectItem>
                          <SelectItem value="251-500">251-500 people</SelectItem>
                          <SelectItem value="500+">500+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="speakingTopic">Preferred Speaking Topic *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="addiction">Overcoming Addiction</SelectItem>
                          <SelectItem value="mental-health">Mental Wellness</SelectItem>
                          <SelectItem value="faith">Faith & Healing</SelectItem>
                          <SelectItem value="resilience">Resilience & Recovery</SelectItem>
                          <SelectItem value="custom">Custom Topic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="eventDetails">Event Details & Special Requests</Label>
                      <Textarea
                        id="eventDetails"
                        placeholder="Tell us about your event, audience, and any specific topics you'd like covered..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nonprofit">Nonprofit/Volunteer</SelectItem>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000+">$5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full">
                      Request Speaking Engagement
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            Don't let addiction, mental health struggles, or broken relationships define your story.
            You have the power to rebuild your total self - and I'm here to help you find the tools to win.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources">View Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}