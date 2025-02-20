"use client"

import Link from "next/link"
import { Search, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 px-4 py-1" style={{'borderBottom': '1px solid #eee'}}>
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center text-black text-xl font-bold">
          <img className="w-16" src="/clothbuddy_logo.png" />ClothBuddy
        </Link>

        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for Products"
              className="w-full pl-10 pr-4 py-2 bg-[#333333] border-none text-white placeholder-gray-400 rounded-md focus:ring-0"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div> */}

        {/* Right Navigation Items */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <Button variant="ghost" size="icon" className="md:hidden text-black">
            <Search className="h-5 w-5" />
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="text-black">
            <Heart className="h-5 w-5" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="text-black">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* Sign In Button */}
          <Button variant="ghost" className="text-black hover:bg-[#073453] hover:text-white">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  )
}

