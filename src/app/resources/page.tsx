'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Play,
  Download,
  TrendingUp,
  Calendar,
  CheckCircle,
  Video,
  FileText,
  Target,
  Dumbbell,
  Brain,
  Heart,
  Clock,
  Award,
  BookOpen
} from 'lucide-react'

export default function ResourcesPage() {
  const [progressData] = useState({
    workoutStreak: 7,
    meditationMinutes: 180,
    journalEntries: 12,
    goalsCompleted: 3
  })

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
            <Link href="/resources" className="text-orange-300">Resources</Link>
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
          <h1 className="text-4xl font-bold mb-4">Fitness & Recovery Resources Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and resources for your holistic wellness journey,
            combining physical fitness, mental wellness, and spiritual growth.
          </p>
        </div>

        <Tabs defaultValue="videos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="videos">Video Library</TabsTrigger>
            <TabsTrigger value="guides">Guides & Programs</TabsTrigger>
            <TabsTrigger value="tracking">Progress Tracking</TabsTrigger>
            <TabsTrigger value="pathways">Structured Pathways</TabsTrigger>
          </TabsList>

          {/* Video Demonstrations */}
          <TabsContent value="videos" className="space-y-8">
            <h2 className="text-3xl font-bold">Video Demonstrations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Workout Videos */}
              <Card>
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    15 min
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Dumbbell className="h-5 w-5" />
                    <span>Morning Recovery Workout</span>
                  </CardTitle>
                  <CardDescription>
                    Start your day with gentle movements designed for early recovery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Badge variant="outline">Beginner</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    10 min
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5" />
                    <span>Mindful Meditation</span>
                  </CardTitle>
                  <CardDescription>
                    Guided meditation for anxiety and stress management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Badge variant="outline">All Levels</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video bg-gradient-to-br from-green-400 to-teal-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    20 min
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Strength Building</span>
                  </CardTitle>
                  <CardDescription>
                    Progressive strength training for rebuilding physical confidence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Badge variant="outline">Intermediate</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    8 min
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Evening Wind Down</span>
                  </CardTitle>
                  <CardDescription>
                    Gentle stretches and breathing for better sleep
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Badge variant="outline">All Levels</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    25 min
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>My Recovery Story</span>
                  </CardTitle>
                  <CardDescription>
                    Personal journey through 20 years of addiction and finding hope
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Badge variant="outline">Inspiration</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    12 min
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Daily Affirmations</span>
                  </CardTitle>
                  <CardDescription>
                    Powerful affirmations for self-worth and recovery motivation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Badge variant="outline">Daily Practice</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Downloadable Guides */}
          <TabsContent value="guides" className="space-y-8">
            <h2 className="text-3xl font-bold">Downloadable Guides & Programs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6" />
                    <span>30-Day Recovery Kickstart</span>
                  </CardTitle>
                  <CardDescription>
                    Complete daily action plan for your first month of recovery
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm">✓ Daily workout routines</p>
                    <p className="text-sm">✓ Meal planning guides</p>
                    <p className="text-sm">✓ Reflection prompts</p>
                    <p className="text-sm">✓ Emergency coping strategies</p>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (Free)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Dumbbell className="h-6 w-6" />
                    <span>Recovery Fitness Manual</span>
                  </CardTitle>
                  <CardDescription>
                    Progressive exercise program designed for addiction recovery
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm">✓ Beginner to advanced programs</p>
                    <p className="text-sm">✓ Home and gym workouts</p>
                    <p className="text-sm">✓ Nutrition guidelines</p>
                    <p className="text-sm">✓ Progress tracking sheets</p>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (Free)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-6 w-6" />
                    <span>Mental Wellness Toolkit</span>
                  </CardTitle>
                  <CardDescription>
                    Comprehensive guide for managing anxiety, depression, and OCD
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm">✓ CBT techniques</p>
                    <p className="text-sm">✓ Mindfulness practices</p>
                    <p className="text-sm">✓ Crisis management plans</p>
                    <p className="text-sm">✓ Support network building</p>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (Free)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-6 w-6" />
                    <span>Family Healing Guide</span>
                  </CardTitle>
                  <CardDescription>
                    Resources for families navigating addiction and recovery together
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm">✓ Communication strategies</p>
                    <p className="text-sm">✓ Boundary setting</p>
                    <p className="text-sm">✓ Forgiveness practices</p>
                    <p className="text-sm">✓ Family therapy exercises</p>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (Free)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Progress Tracking */}
          <TabsContent value="tracking" className="space-y-8">
            <h2 className="text-3xl font-bold">Progress Tracking Tools</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Dumbbell className="h-5 w-5 text-blue-500" />
                    <span>Workout Streak</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {progressData.workoutStreak} days
                  </div>
                  <Progress value={(progressData.workoutStreak / 30) * 100} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Goal: 30 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-green-500" />
                    <span>Meditation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    {progressData.meditationMinutes}min
                  </div>
                  <Progress value={(progressData.meditationMinutes / 300) * 100} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Goal: 300 min/week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-purple-500" />
                    <span>Journal Entries</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    {progressData.journalEntries}
                  </div>
                  <Progress value={(progressData.journalEntries / 30) * 100} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Goal: 30/month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    <span>Goals</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    {progressData.goalsCompleted}/5
                  </div>
                  <Progress value={(progressData.goalsCompleted / 5) * 100} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Monthly goals</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Recovery Journal</CardTitle>
                  <CardDescription>
                    Track your thoughts, feelings, and progress daily
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-medium">Monday Reflection</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-medium">Tuesday Reflection</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-medium">Wednesday Reflection</span>
                      <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>
                  <Button className="w-full mt-4">Add Today's Entry</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Milestone Achievements</CardTitle>
                  <CardDescription>
                    Celebrate your recovery milestones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                      <span className="font-medium">7 Days Clean</span>
                      <Award className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded">
                      <span className="font-medium">First Therapy Session</span>
                      <Award className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-100 border border-gray-200 rounded opacity-50">
                      <span className="font-medium">30 Days Clean</span>
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Structured Program Pathways */}
          <TabsContent value="pathways" className="space-y-8">
            <h2 className="text-3xl font-bold">Structured Program Pathways</h2>

            <div className="space-y-8">
              {/* Beginner Pathway */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Beginner Recovery Pathway</CardTitle>
                  <CardDescription>
                    Perfect for those in early recovery or just starting their wellness journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Week 1-2: Foundation</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Morning Recovery Workout</li>
                        <li>✓ 5-min Daily Meditation</li>
                        <li>✓ Evening Wind Down</li>
                        <li>✓ Recovery Journal Setup</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Week 3-4: Building</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Add Strength Building</li>
                        <li>✓ Increase Meditation to 10min</li>
                        <li>✓ Daily Affirmations</li>
                        <li>✓ Weekly Goal Setting</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Month 2+: Growth</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Intermediate Workouts</li>
                        <li>✓ Advanced Mindfulness</li>
                        <li>✓ Community Connection</li>
                        <li>✓ Service to Others</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    Start Beginner Pathway
                  </Button>
                </CardContent>
              </Card>

              {/* Intermediate Pathway */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Intermediate Wellness Pathway</CardTitle>
                  <CardDescription>
                    For those with some recovery experience looking to deepen their practice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Physical Wellness</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ 4-5 Workouts/Week</li>
                        <li>✓ Strength + Cardio Mix</li>
                        <li>✓ Nutrition Planning</li>
                        <li>✓ Body Composition Tracking</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Mental Wellness</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ 15-20min Daily Meditation</li>
                        <li>✓ CBT Techniques Practice</li>
                        <li>✓ Stress Management Tools</li>
                        <li>✓ Therapy Integration</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Spiritual Growth</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Daily Prayer/Reflection</li>
                        <li>✓ Scripture Study</li>
                        <li>✓ Service Projects</li>
                        <li>✓ Faith Community</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    Start Intermediate Pathway
                  </Button>
                </CardContent>
              </Card>

              {/* Advanced Pathway */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Advanced Leadership Pathway</CardTitle>
                  <CardDescription>
                    Transform your recovery into a platform for helping others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Personal Mastery</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Peak Physical Fitness</li>
                        <li>✓ Advanced Meditation</li>
                        <li>✓ Emotional Regulation</li>
                        <li>✓ Life Purpose Clarity</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Leadership Skills</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Mentoring Others</li>
                        <li>✓ Group Facilitation</li>
                        <li>✓ Public Speaking</li>
                        <li>✓ Recovery Advocacy</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Impact Creation</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Support Group Leadership</li>
                        <li>✓ Community Outreach</li>
                        <li>✓ Story Sharing</li>
                        <li>✓ Next Generation Mentorship</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    Start Leadership Pathway
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Access Your Resources?</h2>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            All resources are available through our website and delivered directly to your email.
            Start building the tools you need for lasting recovery and total self-renewal.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/services">Book a Session</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}