"use client"

import { ArrowUpRight } from "lucide-react"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

const works = [
  {
    title: "STELLAR BRAND",
    category: "Web Design / Development",
    description: "宇宙をテーマにしたブランドサイト。Three.jsによる3Dビジュアル。",
    tags: ["Next.js", "Three.js", "GSAP"],
  },
  {
    title: "MOTION STUDIO",
    category: "Interactive Experience",
    description: "映像制作会社のポートフォリオサイト。スクロール連動アニメーション。",
    tags: ["React", "Framer Motion", "WebGL"],
  },
  {
    title: "DIGITAL ART GALLERY",
    category: "3D Visualization",
    description: "バーチャルギャラリー体験。没入型3D空間。",
    tags: ["Three.js", "React Three Fiber", "Blender"],
  },
  {
    title: "TECH CONFERENCE",
    category: "Event Website",
    description: "テックカンファレンスのイベントサイト。パーティクルアニメーション。",
    tags: ["Next.js", "Canvas API", "TypeScript"],
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
                SELECTED WORK
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <article className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                  <div className="aspect-video bg-secondary rounded-md mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {work.category}
                      </p>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
