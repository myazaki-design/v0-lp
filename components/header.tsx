"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { TextScramble } from "@/components/ui/text-scramble"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <TextScramble
              as="span"
              className="text-primary"
              duration={0.6}
              speed={0.03}
              trigger={true}
            >
              TAKU
            </TextScramble>
            <TextScramble
              as="span"
              className="text-foreground"
              duration={0.6}
              speed={0.03}
              trigger={true}
            >
              {" YAMADA"}
            </TextScramble>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TextScramble
                as="span"
                duration={0.5}
                speed={0.03}
                trigger={true}
              >
                ABOUT
              </TextScramble>
            </Link>
            <Link
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TextScramble
                as="span"
                duration={0.5}
                speed={0.03}
                trigger={true}
              >
                WORK
              </TextScramble>
            </Link>
            <Link
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TextScramble
                as="span"
                duration={0.5}
                speed={0.03}
                trigger={true}
              >
                SKILLS
              </TextScramble>
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TextScramble
                as="span"
                duration={0.5}
                speed={0.03}
                trigger={true}
              >
                CONTACT
              </TextScramble>
            </Link>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              WORK
            </Link>
            <Link
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SKILLS
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
