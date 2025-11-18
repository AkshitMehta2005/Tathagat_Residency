"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export interface FloorPlanData {
  id: string
  title: string
  area: string
  thumbnail: string
  fullImage: string
}

interface FloorPlanCardProps {
  plan: FloorPlanData
}

export function FloorPlanCard({ plan }: FloorPlanCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
          className="
            mx-auto
            border border-border 
            hover:border-primary/50 
            transition-all duration-300 
            cursor-pointer 
            group 
            overflow-hidden 
            bg-white 
            shadow-sm 
            hover:shadow-md
            w-full
            max-w-[360px]
          "
        >
          <div className="relative h-72 overflow-hidden">
            <img
              src={plan.thumbnail || "/placeholder.svg"}
              alt={plan.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <p className="text-sm text-white/90">{plan.area}</p>
            </div>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-white">
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
          <img src={plan.fullImage || "/placeholder.svg"} alt={plan.title} className="w-full h-auto" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
