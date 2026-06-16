import { Navigation }  from '@/components/ui/navigation'
import { Hero }         from '@/components/sections/hero'
import { About }        from '@/components/sections/about'
import { FunFacts }     from '@/components/sections/fun-facts'
import { Skills }       from '@/components/sections/skills'
import { Research }     from '@/components/sections/research'
import { Projects }     from '@/components/sections/projects'
import { GithubStats }  from '@/components/sections/github-stats'
import { AiTools }      from '@/components/sections/ai-tools'
import { Reading }      from '@/components/sections/reading'
import { Contact }      from '@/components/sections/contact'
import { Footer }       from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <FunFacts />
        <Skills />
        <About />
        <Research />
        <Projects />
        <GithubStats />
        <AiTools />
        <Reading />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
