"use client"

import ShaderBackground from "@/components/ui/shader-background"
import { TextScramble } from "@/components/ui/text-scramble"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ShaderBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <TextScramble
            as="p"
            className="text-primary text-sm md:text-base font-medium tracking-widest mb-4"
            duration={0.8}
            speed={0.03}
            trigger={true}
          >
            CREATIVE DEVELOPER / TECHNICAL ARTIST
          </TextScramble>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <TextScramble
              as="span"
              className="text-foreground block"
              duration={0.8}
              speed={0.04}
              trigger={true}
            >
              デジタル体験を
            </TextScramble>
            <TextScramble
              as="span"
              className="text-primary block"
              duration={0.8}
              speed={0.04}
              trigger={true}
            >
              創造する
            </TextScramble>
          </h1>

          <TextScramble
            as="p"
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            duration={1.0}
            speed={0.02}
            trigger={true}
          >
            インタラクティブなWebサイト、3Dビジュアライゼーション、モーショングラフィックスを通じて、ユニークなデジタル体験を生み出します。
          </TextScramble>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <TextScramble
                as="span"
                duration={0.6}
                speed={0.03}
                trigger={true}
              >
                作品を見る
              </TextScramble>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary"
            >
              <TextScramble
                as="span"
                duration={0.6}
                speed={0.03}
                trigger={true}
              >
                お問い合わせ
              </TextScramble>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
