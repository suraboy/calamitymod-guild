import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CLASSES,
  PHASES,
  SECTIONS,
  type ClassId,
  type Phase,
  type Item,
  wikiUrl,
  wikiImageUrl,
  localImageUrl,
} from '@/lib/gameData'
import ItemImage from '@/components/ItemImage'

const SECTION_ORDER = ['pre-hardmode', 'hardmode', 'post-moon-lord'] as const

const SECTION_META: Record<string, { icon: string; color: string }> = {
  'pre-hardmode':  { icon: '🌙', color: '#38bdf8' },
  'hardmode':      { icon: '🔥', color: '#fb923c' },
  'post-moon-lord': { icon: '☄️', color: '#c084fc' },
}

const COL_META = [
  { key: 'weapons',     label: 'Weapons',     labelTH: 'อาวุธ',    icon: '⚔️' },
  { key: 'armor',       label: 'Armor',       labelTH: 'เกราะ',    icon: '🛡️' },
  { key: 'accessories', label: 'Accessories', labelTH: 'Accessories', icon: '💍' },
] as const

function ItemPill({ item, color }: { item: Item; color: string }) {
  return (
    <a
      href={wikiUrl(item.wikiSlug)}
      target="_blank"
      rel="noopener noreferrer"
      className="item-card group flex flex-col items-center gap-1.5 rounded-xl p-2 text-center"
      style={{
        '--item-bg':           `${color}08`,
        '--item-border':       `${color}20`,
        '--item-bg-hover':     `${color}18`,
        '--item-border-hover': `${color}45`,
        '--item-glow':         `${color}30`,
      } as React.CSSProperties}
      title={item.name}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <ItemImage
          src={localImageUrl(item.wikiSlug)}
          fallbackSrc={wikiImageUrl(item.wikiSlug)}
          alt={item.name}
          size={36}
        />
      </div>
      <span className="line-clamp-2 max-w-[72px] text-[10px] leading-tight text-slate-500 transition-colors group-hover:text-slate-200">
        {item.name}
      </span>
    </a>
  )
}

function PhaseCard({ phase, classId, color }: { phase: Phase; classId: ClassId; color: string }) {
  const classData = phase.classes[classId]
  const sm = SECTION_META[phase.section]

  return (
    <div
      id={phase.id}
      className="phase-card group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 h-full w-[3px]"
        style={{ background: `linear-gradient(to bottom, ${color}, ${color}00)` }}
      />

      <div className="p-6 pl-7">
        {/* Phase header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* Phase number */}
            <div
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              style={{ background: `${color}20`, color, border: `1px solid ${color}40` }}
            >
              {String(phase.order).padStart(2, '0')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">{phase.name}</h3>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ background: `${sm.color}15`, color: sm.color, border: `1px solid ${sm.color}30` }}
                >
                  {sm.icon} {SECTIONS[phase.section].label}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-600">{phase.nameTH} · {phase.description}</p>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {COL_META.map((col) => {
            const items = classData[col.key]
            return (
              <div key={col.key} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-sm">{col.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
                    {col.label}
                  </span>
                  <span className="ml-auto rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-600">
                    {items.length}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {items.map((item) => (
                    <ItemPill key={item.wikiSlug} item={item} color={color} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return CLASSES.map((cls) => ({ classId: cls.id }))
}

export default async function ClassPage({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params
  const cls = CLASSES.find((c) => c.id === classId)
  if (!cls) notFound()

  const color = cls.color
  const phasesBySection = SECTION_ORDER.map((section) => ({
    section,
    phases: PHASES.filter((p) => p.section === section).sort((a, b) => a.order - b.order),
  }))

  return (
    <div className="min-h-screen bg-[#07070f] text-slate-200">
      {/* Ambient bg */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-60 left-1/3 h-[500px] w-[500px] rounded-full blur-[120px] opacity-10"
          style={{ background: color }}
        />
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07070f]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3.5">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition-all hover:border-white/15 hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            หน้าหลัก
          </Link>
          <span className="text-white/20">/</span>
          <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color }}>
            {cls.icon} {cls.name}
          </span>
          <span className="ml-auto text-xs text-slate-700">9 เฟส</span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden w-48 shrink-0 xl:block">
            <div className="sticky top-20">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Navigation</p>
              {SECTION_ORDER.map((section) => {
                const sm = SECTION_META[section]
                const sectionPhases = PHASES.filter((p) => p.section === section).sort((a, b) => a.order - b.order)
                return (
                  <div key={section} className="mb-4">
                    <p
                      className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: sm.color }}
                    >
                      <span>{sm.icon}</span>
                      {SECTIONS[section].label}
                    </p>
                    {sectionPhases.map((phase) => (
                      <a
                        key={phase.id}
                        href={`#${phase.id}`}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-slate-600 transition-all hover:bg-white/5 hover:text-slate-300"
                      >
                        <span
                          className="h-1 w-1 rounded-full flex-shrink-0"
                          style={{ background: sm.color }}
                        />
                        {phase.name}
                      </a>
                    ))}
                  </div>
                )
              })}
            </div>
          </aside>

          {/* Main */}
          <main className="min-w-0 flex-1">
            {/* Class hero card */}
            <div
              className="mb-10 overflow-hidden rounded-2xl border"
              style={{ borderColor: `${color}30` }}
            >
              {/* Color strip */}
              <div
                className="h-1"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}00)` }}
              />
              <div
                className="p-8"
                style={{ background: `linear-gradient(135deg, ${color}08 0%, transparent 60%)` }}
              >
                <div className="flex flex-wrap items-center gap-6">
                  <div
                    className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl text-5xl"
                    style={{
                      background: `${color}15`,
                      border: `2px solid ${color}30`,
                      boxShadow: `0 0 40px ${color}20`,
                    }}
                  >
                    {cls.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>
                      {cls.name} Class
                    </p>
                    <h1 className="mt-1 text-4xl font-black text-white">{cls.nameTH}</h1>
                    <p className="mt-2 text-slate-400">{cls.description}</p>
                    <p className="mt-1 text-sm text-slate-600">{cls.playstyle}</p>
                  </div>

                  {/* Stats */}
                  <div className="hidden sm:flex flex-col gap-2 text-right">
                    {[
                      { label: 'เฟสทั้งหมด', value: '9' },
                      { label: 'Pre-HM', value: '4' },
                      { label: 'Hardmode', value: '4' },
                      { label: 'Post-ML', value: '1' },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-3">
                        <span className="text-xs text-slate-600">{s.label}</span>
                        <span className="min-w-[1.5rem] text-right text-sm font-bold" style={{ color }}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase sections */}
            <div className="flex flex-col gap-12">
              {phasesBySection.map(({ section, phases }) => {
                const sm = SECTION_META[section]
                return (
                  <div key={section}>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="text-xl">{sm.icon}</span>
                      <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: sm.color }}>
                        {SECTIONS[section].label}
                      </h2>
                      <div className="h-px flex-1 bg-white/5" />
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ background: `${sm.color}15`, color: sm.color }}
                      >
                        {phases.length} เฟส
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      {phases.map((phase) => (
                        <PhaseCard key={phase.id} phase={phase} classId={cls.id as ClassId} color={color} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/5 py-6 text-center text-xs text-slate-700">
        อ้างอิงจาก{' '}
        <a href="https://calamitymod.wiki.gg" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">
          calamitymod.wiki.gg
        </a>
      </footer>
    </div>
  )
}
