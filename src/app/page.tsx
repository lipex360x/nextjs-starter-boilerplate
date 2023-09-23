import { Main } from '@/components/Main'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <section
      className={cn(
        'min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100',
      )}
    >
      <Main />
    </section>
  )
}
