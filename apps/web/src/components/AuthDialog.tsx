"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface User {
  id: string
  email: string
  name: string
  emailVerified: boolean
  avatar?: string
  preferences?: Record<string, unknown>
}

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSignIn?: (user: User) => void
}

export function AuthDialog({ open, onOpenChange, onSignIn }: AuthDialogProps) {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Clear error messages when switching tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setErrorMessage("")
    setShowForgotPassword(false)
    setShowPassword(false)
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          console.log('Signed in successfully:', data.user)
          onOpenChange(false)
          // Update global auth state
          if (onSignIn && data.user) {
            onSignIn(data.user)
          } else {
            window.location.reload() // Fallback refresh
          }
        } else {
          console.log('Signed in successfully (non-JSON response)')
          onOpenChange(false)
          window.location.reload()
        }
      } else {
        let errorMsg = 'Sign in failed';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const error = await response.json()
            errorMsg = error.error || errorMsg;
          }
        } catch (parseError) {
          console.warn('Failed to parse error response:', parseError);
        }
        setErrorMessage(errorMsg)
      }
    } catch (error) {
      console.error('Sign in error:', error)
      setErrorMessage('Sign in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (response.ok) {
        let successMsg = 'Account created successfully! Please check your email to verify your account.';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json()
            console.log('Account created successfully:', data.user)
            successMsg = data.message || successMsg;
          }
        } catch (parseError) {
          console.warn('Failed to parse success response:', parseError);
        }
        
        // Show success modal instead of alert
        setSuccessMessage(successMsg)
        setShowSuccessModal(true)
        
      } else {
        let errorMsg = 'Sign up failed';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const error = await response.json()
            errorMsg = error.error || errorMsg;
          }
        } catch (parseError) {
          console.warn('Failed to parse error response:', parseError);
        }
        setErrorMessage(errorMsg)
      }
    } catch (error) {
      console.error('Sign up error:', error)
      setErrorMessage('Sign up failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get("forgot-email") as string
    
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSuccessMessage('Password reset email sent! Please check your inbox.')
        setShowSuccessModal(true)
        setShowForgotPassword(false)
      } else {
        let errorMsg = 'Failed to send reset email';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const error = await response.json()
            errorMsg = error.error || errorMsg;
          }
        } catch (parseError) {
          console.warn('Failed to parse error response:', parseError);
        }
        setErrorMessage(errorMsg)
      }
    } catch (error) {
      console.error('Forgot password error:', error)
      setErrorMessage('Failed to send reset email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/10 backdrop-blur-md shadow-2xl auth-dialog-animated">
        <DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            {mounted ? (
              <Image
                src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
                alt="PolyNote Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            )}
            <DialogTitle className="text-2xl font-bold text-center">
              {showForgotPassword ? "Reset Password" : "Welcome to PolyNote"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {showForgotPassword 
                ? "Enter your email to receive a password reset link"
                : "Sign in to your account or create a new one to get started"
              }
            </DialogDescription>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {!showForgotPassword && (
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
          )}

          <TabsContent value="signin" className="space-y-4">
            {errorMessage && activeTab === "signin" && !showForgotPassword && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
            {errorMessage && showForgotPassword && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
            {!showForgotPassword ? (
              <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signin-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>

              <div className="text-center">
                <Button 
                  type="button"
                  variant="link" 
                  className="text-sm"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot your password?
                </Button>
              </div>
            </form>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="forgot-email"
                      name="forgot-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending reset email...
                    </>
                  ) : (
                    "Send Reset Email"
                  )}
                </Button>

                <div className="text-center">
                  <Button 
                    type="button"
                    variant="link" 
                    className="text-sm"
                    onClick={() => {
                      setShowForgotPassword(false)
                      setShowPassword(false)
                      setErrorMessage("")
                    }}
                  >
                    Back to Sign In
                  </Button>
                </div>
              </form>
            )}
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            {errorMessage && activeTab === "signup" && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Button variant="link" className="p-0 h-auto text-sm">
                Terms of Service
              </Button>{" "}
              and{" "}
              <Button variant="link" className="p-0 h-auto text-sm">
                Privacy Policy
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-background/10 backdrop-blur-md shadow-2xl auth-dialog-animated">
          <DialogHeader>
            <DialogTitle className="sr-only">Account Created Successfully</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-6 p-6">
            {/* Success Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            
            {/* Success Message */}
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                Account Created Successfully!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {successMessage}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => {
                  setShowSuccessModal(false)
                  onOpenChange(false)
                }}
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowSuccessModal(false)
                  setActiveTab("signin")
                }}
                className="flex-1"
              >
                Sign In
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  )
}
