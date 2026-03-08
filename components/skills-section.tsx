"use client"

import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

const skills = [
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "Three.js / WebGL", level: 85 },
  { name: "GSAP / Framer Motion", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Figma / Adobe Suite", level: 75 },
]

const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "GSAP",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "After Effects",
  "Blender",
  "Git",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
                SKILLS
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollFadeIn delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
