import Link from 'next/link'
import { CLASSES } from '@/lib/gameData'

const PHASE_COUNTS = { 'pre-hardmode': 4, 'hardmode': 4, 'post-moon-lord': 1 }

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070f] text-slate-200 overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-900/20 blur-[100px]" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-purple-900/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="relative border-b border-white/5 bg-[#07070f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">⚡</span>
            <span className="font-bold text-white tracking-tight">Calamity Guild</span>
          </div>
          <a
            href="https://calamitymod.wiki.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            calamitymod.wiki.gg ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-24 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
            Terraria · Calamity Mod · Class Guide
          </div>

          <h1 className="text-6xl font-black tracking-tight text-white md:text-7xl">
            Guild
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Progression
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            เลือกอาชีพที่ต้องการ Guild จะแนะนำ{' '}
            <span className="text-slate-200 font-medium">อาวุธ · เกราะ · Accessories</span>
            <br />ที่ดีที่สุดในทุกเฟสของเกม ตั้งแต่เริ่มต้นจนถึง Endgame
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Pre-Hardmode', count: '4 เฟส', color: '#38bdf8' },
              { label: 'Hardmode',     count: '4 เฟส', color: '#fb923c' },
              { label: 'Post-Moon Lord', count: '1 เฟส+', color: '#c084fc' },
            ].map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                <span style={{ color: s.color }}>{s.label}</span>
                <span className="text-slate-600">{s.count}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Class grid */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white">เลือกอาชีพของคุณ</h2>
          <p className="mt-1 text-sm text-slate-600">คลิกเพื่อคู่มือ Build ทั้งเกม</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CLASSES.map((cls) => (
            <Link
              key={cls.id}
              href={`/class/${cls.id}`}
              className="class-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm"
              style={{
                '--card-glow': `${cls.color}25`,
                '--card-border': `${cls.color}40`,
              } as React.CSSProperties}
            >
              {/* Top color bar */}
              <div
                className="h-[3px] w-full flex-shrink-0"
                style={{
                  background: `linear-gradient(90deg, ${cls.color} 0%, ${cls.color}00 100%)`,
                }}
              />

              <div className="flex flex-1 flex-col p-6">
                {/* Icon */}
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
                  style={{
                    background: `${cls.color}15`,
                    border: `1px solid ${cls.color}30`,
                    boxShadow: `0 0 20px ${cls.color}10`,
                  }}
                >
                  {cls.icon}
                </div>

                {/* Name */}
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: cls.color }}>
                  {cls.name}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">{cls.nameTH}</h3>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-white/5" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-500 flex-1">{cls.playstyle}</p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-700">9 เฟส</span>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                    style={{ color: cls.color }}
                  >
                    คู่มือ
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom info bar */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: '🗺️', title: 'ครบทุกเฟส', desc: 'Pre-Hardmode → Hardmode → Post-Moon Lord' },
              { icon: '🔗', title: 'Link ไป Wiki', desc: 'ทุก Item คลิกได้ เปิด Calamity Wiki โดยตรง' },
              { icon: '🎮', title: '5 อาชีพ', desc: 'Melee · Ranged · Magic · Summoner · Rogue' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="font-semibold text-white">{f.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-700">
        อ้างอิงข้อมูลจาก{' '}
        <a href="https://calamitymod.wiki.gg" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">
          calamitymod.wiki.gg
        </a>
        {' '}· Fan-made guide · ไม่ใช่ Official Site
      </footer>
    </main>
  )
}
