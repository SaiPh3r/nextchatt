import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="bg-white text-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-extrabold text-black tracking-tight">
              Chatteroo
              <span className="text-black text-sm ml-1">●</span>
            </div>
            <li className=" cursor-pointer font-medium">Home</li>
            <li className=" cursor-pointer font-medium">About</li>
            <li className=" cursor-pointer font-medium">Contact</li>
          </div>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar