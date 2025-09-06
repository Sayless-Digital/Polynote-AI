"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ResetPasswordSkeleton } from '@/components/skeletons/ResetPasswordSkeleton'
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [tokenValid, setTokenValid] = useState<boolean | null>(null)

  const token = searchParams.get("token")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (token) {
      validateToken()
    } else {
      setTokenValid(false)
    }
  }, [token])

  const validateToken = async () => {
    try {
      const response = await fetch(`/api/auth/validate-reset-token?token=${token}`)
      if (response.ok) {
        setTokenValid(true)
      } else {
        setTokenValid(false)
        setError("Invalid or expired reset token")
      }
    } catch (error) {
      console.error("Token validation error:", error)
      setTokenValid(false)
      setError("Failed to validate reset token")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      })

      if (response.ok) {
        const data = await response.json()
        setSuccess(true)
        // Redirect immediately since user is now logged in
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to reset password')
      }
    } catch (error) {
      console.error('Password reset error:', error)
      setError('Failed to reset password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return <ResetPasswordSkeleton />
  }

  if (tokenValid === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Validating reset token...</p>
        </div>
      </div>
    )
  }

  if (tokenValid === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-4">
          <div className="bg-background/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg p-8 text-center">
            <div className="flex flex-col items-center space-y-4 mb-6">
              {mounted && (
                <Image
                  src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
                  alt="PolyNote Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              )}
              <h1 className="text-2xl font-bold">Invalid Reset Link</h1>
            </div>
            
            <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md mb-6">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{error || "This password reset link is invalid or has expired."}</span>
            </div>

            <Button 
              onClick={() => router.push('/')}
              className="w-full"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-4">
          <div className="bg-background/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg p-8 text-center">
            <div className="flex flex-col items-center space-y-4 mb-6">
              {mounted && (
                <Image
                  src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
                  alt="PolyNote Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              )}
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-2xl font-bold">Password Reset Successful!</h1>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Your password has been successfully reset and you are now logged in. You will be redirected to the home page shortly.
            </p>

            <Button 
              onClick={() => router.push('/')}
              className="w-full"
            >
              Continue to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-4">
        <div className="bg-background/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg p-8">
          <div className="flex flex-col items-center space-y-4 mb-6">
            {mounted && (
              <Image
                src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
                alt="PolyNote Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            )}
            <h1 className="text-2xl font-bold text-center">Reset Your Password</h1>
            <p className="text-muted-foreground text-center">
              Enter your new password below
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md mb-6">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
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
                  Resetting password...
                </>
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>

          <div className="text-center mt-6">
            <Button 
              variant="link" 
              className="text-sm"
              onClick={() => router.push('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
