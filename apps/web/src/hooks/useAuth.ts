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
        const data = await response.json()
        setUser(data.user)
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
