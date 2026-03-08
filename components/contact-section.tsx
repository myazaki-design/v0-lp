"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send } from "lucide-react"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
                CONTACT
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollFadeIn delay={0.1}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  プロジェクトについて
                  <br />
                  <span className="text-primary">お話しましょう</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  新しいプロジェクト、クリエイティブなアイデア、
                  またはお仕事の機会について、お気軽にご連絡ください。
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">hello@takuyamada.dev</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Tokyo, Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-6">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-foreground mb-2"
                    >
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-foreground mb-2"
                    >
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-foreground mb-2"
                    >
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="プロジェクトについてお聞かせください..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    送信する
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
