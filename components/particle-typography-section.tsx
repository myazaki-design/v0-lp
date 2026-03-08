"use client"

import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particles-typography"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export function ParticleTypographySection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Interactive Experience
            </p>
          </div>
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.1}>
          <div className="h-[400px] md:h-[500px] flex items-center justify-center">
            <CursorDrivenParticleTypography
              text="CREATIVE"
              fontSize={160}
              particleDensity={5}
              dispersionStrength={20}
              returnSpeed={0.08}
              particleSize={1.5}
              color="#2dd4bf"
              className="text-primary"
            />
          </div>
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.2}>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              マウスを動かしてインタラクションをお楽しみください
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
