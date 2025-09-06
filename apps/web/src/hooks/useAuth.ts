"use client"

import { useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
  emailVerified: boolean
  avatar?: string
  preferences?: Record<string, unknown>
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include',
      })

      if (response.ok) {
        // Check if response is JSON before parsing
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          try {
            const data = await response.json()
            setUser(data.user)
          } catch (parseError) {
            console.error('Failed to parse auth response:', parseError)
            setUser(null)
          }
        } else {
          console.warn('Auth response is not JSON')
          setUser(null)
        }
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (userData: User) => {
    setUser(userData)
  }

  const signOut = () => {
    setUser(null)
  }

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signOut,
    checkAuth,
  }
}
