"use client"

import { Code2, Palette, Sparkles } from "lucide-react"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
                ABOUT
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollFadeIn delay={0.1}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  テクノロジーと
                  <br />
                  <span className="text-primary">クリエイティビティ</span>の融合
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10年以上のWeb開発経験と、デジタルアートへの情熱を持つクリエイターです。
                  コードを使って美しいビジュアル体験を生み出すことに喜びを感じています。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Three.js、WebGL、モーションデザインを駆使し、
                  ブランドの価値を高めるインタラクティブな体験を創造します。
                </p>
              </div>
            </ScrollFadeIn>

            <div className="grid gap-6">
              <ScrollFadeIn delay={0.2}>
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <Code2 className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Creative Development
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    React、Next.js、TypeScriptを用いた高品質なフロントエンド開発
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.3}>
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Interactive Experiences
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Three.js、WebGL、GSAPを活用したインタラクティブコンテンツ
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.4}>
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <Palette className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Motion Design
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    After Effects、Lottieを使用したモーショングラフィックス制作
                  </p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
