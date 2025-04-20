import Navbar from "@/components/Navbar"
import Link from "next/link"
import type { Metadata } from 'next'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            <span className="inline-block border-b-2 border-black pb-1">Chatteroo</span>
          </h1>
          <p className="text-xl text-gray-700 font-medium tracking-wide">Simple. Secure. Minimalist.</p>
          
          <div className="mt-16">
            <Link
              href="/chat"
              className="inline-block bg-black text-white px-10 py-3 rounded-lg hover:bg-gray-800 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-md font-medium"
            >
              Start chatting
            </Link>
          </div>
        </div>
        
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6 rounded-lg border border-transparent hover:border-gray-200 transition-all duration-500 ease-in-out hover:shadow-sm">
            <div className="text-xl font-semibold mb-3 text-gray-800">Fast</div>
            <p className="text-gray-700">Lightning quick responses, no delay</p>
          </div>
          
          <div className="text-center p-6 rounded-lg border border-transparent hover:border-gray-200 transition-all duration-500 ease-in-out hover:shadow-sm">
            <div className="text-xl font-semibold mb-3 text-gray-800">Private</div>
            <p className="text-gray-700">Your conversations stay yours</p>
          </div>
          
          <div className="text-center p-6 rounded-lg border border-transparent hover:border-gray-200 transition-all duration-500 ease-in-out hover:shadow-sm">
            <div className="text-xl font-semibold mb-3 text-gray-800">Simple</div>
            <p className="text-gray-700">No clutter, just communication</p>
          </div>
        </div>
      </main>
      
      <footer className="py-12 text-center">
        <p className="text-gray-500 text-sm tracking-wide">© 2025 Chatteroo</p>
      </footer>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Chatteroo | Simple Chat App',
  description: 'A minimalist chat application focused on simplicity and speed',
}