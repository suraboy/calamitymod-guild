export type ClassId = 'melee' | 'ranged' | 'magic' | 'summoner' | 'rogue'
export type SectionId = 'pre-hardmode' | 'hardmode' | 'post-moon-lord'

export interface Item {
  name: string
  wikiSlug: string
}

export interface PhaseClass {
  weapons: Item[]
  armor: Item[]
  accessories: Item[]
}

export interface Phase {
  id: string
  name: string
  nameTH: string
  section: SectionId
  order: number
  description: string
  classes: Record<ClassId, PhaseClass>
}

export interface ClassInfo {
  id: ClassId
  name: string
  nameTH: string
  description: string
  playstyle: string
  color: string
  bgGradient: string
  borderColor: string
  icon: string
}

export const CLASSES: ClassInfo[] = [
  {
    id: 'melee',
    name: 'Melee',
    nameTH: 'นักรบ',
    description: 'ชอบต่อสู้ระยะประชิด ทนต่อการโจมตีสูง',
    playstyle: 'ใช้ดาบ หอก และโล่ — มีพลังชีวิตสูง เหมาะสำหรับผู้ที่ชอบต่อสู้แบบตัวต่อตัว',
    color: '#f87171',
    bgGradient: 'from-red-950 to-red-900',
    borderColor: 'border-red-500',
    icon: '⚔️',
  },
  {
    id: 'ranged',
    name: 'Ranged',
    nameTH: 'นักธนู',
    description: 'ต่อสู้ระยะไกล ปลอดภัยจากอันตราย',
    playstyle: 'ใช้ธนู ปืน และกระสุน — ความเสียหายสูงจากระยะไกล ต้องจัดการแอมโม่',
    color: '#4ade80',
    bgGradient: 'from-green-950 to-green-900',
    borderColor: 'border-green-500',
    icon: '🏹',
  },
  {
    id: 'magic',
    name: 'Magic',
    nameTH: 'นักเวทย์',
    description: 'ใช้เวทมนตร์โจมตีจากระยะไกล',
    playstyle: 'ใช้ Staff และ Tome — ความเสียหายสูงมาก แต่ต้องจัดการ Mana ให้ดี',
    color: '#818cf8',
    bgGradient: 'from-indigo-950 to-indigo-900',
    borderColor: 'border-indigo-400',
    icon: '✨',
  },
  {
    id: 'summoner',
    name: 'Summoner',
    nameTH: 'ผู้เรียก',
    description: 'เรียกมิเนี่ยนมาต่อสู้แทน',
    playstyle: 'ใช้ Staff เรียก Minion — สามารถโจมตีอัตโนมัติขณะทำอย่างอื่น แต่ Minion ทำความเสียหายน้อยกว่า',
    color: '#c084fc',
    bgGradient: 'from-purple-950 to-purple-900',
    borderColor: 'border-purple-400',
    icon: '👾',
  },
  {
    id: 'rogue',
    name: 'Rogue',
    nameTH: 'โจร',
    description: 'คลาสพิเศษจาก Calamity Mod ใช้ Stealth',
    playstyle: 'ใช้อาวุธพุ่ง + Stealth Mechanic — ออกจาก Stealth ครั้งเดียวความเสียหายพุ่งสูงมาก',
    color: '#fbbf24',
    bgGradient: 'from-amber-950 to-amber-900',
    borderColor: 'border-amber-400',
    icon: '🗡️',
  },
]

const w = (name: string, wikiSlug?: string): Item => ({
  name,
  wikiSlug: wikiSlug ?? name.replace(/ /g, '_'),
})

export const PHASES: Phase[] = [
  {
    id: 'pre-boss',
    name: 'Pre-Boss',
    nameTH: 'ก่อนล้มบอสตัวแรก',
    section: 'pre-hardmode',
    order: 1,
    description: 'ช่วงเริ่มเกม สำรวจโลกและเก็บไอเทมพื้นฐาน',
    classes: {
      melee: {
        weapons: [w('Burnt Sienna'), w('Monstrous Knives'), w('Bladecrest Oathsword')],
        armor: [w('Desert Prowler armor'), w('Gold armor'), w('Platinum armor')],
        accessories: [w('Cloud in a Bottle'), w('Band of Regeneration'), w('Hermes Boots')],
      },
      ranged: {
        weapons: [w('Blood Rain Bow'), w('Boomstick'), w('Tendon Bow')],
        armor: [w('Fossil armor'), w('Gold armor'), w('Platinum armor')],
        accessories: [w('Hermes Boots'), w('Sandstorm in a Bottle'), w('Sea Spirit Amulet')],
      },
      magic: {
        weapons: [w('Space Gun'), w('Plasma Rod'), w('Vilethorn'), w('Water Bolt')],
        armor: [w('Jungle armor'), w('Diamond Robe')],
        accessories: [w('Mana Flower'), w('Magic Cuffs'), w('Cloud in a Bottle')],
      },
      summoner: {
        weapons: [w('Stormjaw Staff'), w('Enchanted Knife Staff'), w('Sun Spirit Staff'), w('Rusty Beacon Prototype')],
        armor: [w('Wulfrum armor'), w('Gold armor')],
        accessories: [w('Cloud in a Bottle'), w('Hermes Boots'), w('Band of Regeneration')],
      },
      rogue: {
        weapons: [w('Wulfrum Knife'), w('Gilded Dagger'), w('Gleaming Dagger'), w('Contaminated Bile'), w('Urchin Stinger')],
        armor: [w('Desert Prowler armor'), w('Gold armor')],
        accessories: [w("Gladiator's Locket"), w('Craw Carapace'), w('Rover Drive')],
      },
    },
  },
  {
    id: 'pre-eoc',
    name: 'Pre-Eye of Cthulhu',
    nameTH: 'ก่อนล้ม Eye of Cthulhu',
    section: 'pre-hardmode',
    order: 2,
    description: 'หลังล้ม King Slime หรือ Desert Scourge เก็บอุปกรณ์เพิ่ม',
    classes: {
      melee: {
        weapons: [w('Bladecrest Oathsword'), w('Mandible Claws'), w('Burnt Sienna')],
        armor: [w('Desert Prowler armor'), w('Ninja armor'), w('Fossil armor')],
        accessories: [w('Cloud in a Bottle'), w("Gladiator's Locket"), w('Frostspark Boots')],
      },
      ranged: {
        weapons: [w('Shellshooter'), w('Boomstick'), w('Blood Rain Bow')],
        armor: [w('Fossil armor')],
        accessories: [w("Luxor's Gift"), w("Scion's Curio"), w('Unstable Granite Core'), w('Frostspark Boots')],
      },
      magic: {
        weapons: [w('Water Bolt'), w('Vilethorn'), w('Space Gun')],
        armor: [w('Jungle armor'), w('Diamond Robe')],
        accessories: [w('Mana Flower'), w('Magic Cuffs'), w('Cloud in a Bottle')],
      },
      summoner: {
        weapons: [w('Stormjaw Staff'), w('Sun Spirit Staff'), w('Slime Staff')],
        armor: [w('Wulfrum armor'), w('Fossil armor')],
        accessories: [w('Cloud in a Bottle'), w('Hermes Boots')],
      },
      rogue: {
        weapons: [w('Contaminated Bile'), w('Urchin Stinger'), w('Starved Injector'), w('Ghoulish Gouger')],
        armor: [w('Desert Prowler armor'), w('Fossil armor')],
        accessories: [w("Gladiator's Locket"), w('Craw Carapace'), w('Frostspark Boots')],
      },
    },
  },
  {
    id: 'pre-skeletron',
    name: 'Pre-Skeletron',
    nameTH: 'ก่อนล้ม Skeletron',
    section: 'pre-hardmode',
    order: 3,
    description: 'หลังล้ม Eye of Cthulhu และ Crabulon สำรวจ Dungeon ได้',
    classes: {
      melee: {
        weapons: [w('Crystalline'), w('Bladecrest Oathsword'), w('Mandible Claws')],
        armor: [w('Ninja armor'), w('Fossil armor'), w('Jungle armor')],
        accessories: [w('Lightning Boots'), w("Gladiator's Locket"), w('Frostspark Boots')],
      },
      ranged: {
        weapons: [w('Minishark'), w('Fungicide'), w('Firestorm Cannon')],
        armor: [w('Fossil armor'), w('Shadow armor')],
        accessories: [w('Frog Leg'), w('Shield of Cthulhu'), w('Bundle of Horseshoe Balloons')],
      },
      magic: {
        weapons: [w('Magic Missile'), w('Flamelash'), w('Aqua Scepter')],
        armor: [w('Jungle armor'), w('Shadow armor')],
        accessories: [w('Mana Flower'), w('Magic Cuffs'), w('Lightning Boots')],
      },
      summoner: {
        weapons: [w('Vampire Frog Staff'), w('Imp Staff'), w('Stormjaw Staff')],
        armor: [w('Jungle armor'), w('Fossil armor')],
        accessories: [w('Lightning Boots'), w('Hermes Boots')],
      },
      rogue: {
        weapons: [w('Crystalline'), w('Ghoulish Gouger'), w('Clam Crusher')],
        armor: [w('Fossil armor'), w('Ninja armor')],
        accessories: [w('Lightning Boots'), w("Gladiator's Locket"), w('Craw Carapace')],
      },
    },
  },
  {
    id: 'pre-wof',
    name: 'Pre-Wall of Flesh',
    nameTH: 'ก่อนล้ม Wall of Flesh',
    section: 'pre-hardmode',
    order: 4,
    description: 'ปลาย Pre-Hardmode หลังล้ม Skeletron และ Hive Mind/Perforators',
    classes: {
      melee: {
        weapons: [w('Beekeeper'), w("Night's Edge"), w('Muramasa'), w('Sunfury')],
        armor: [w('Molten armor'), w('Shadow armor'), w('Crimson armor')],
        accessories: [w('Lightning Boots'), w('Magma Stone'), w('Obsidian Shield')],
      },
      ranged: {
        weapons: [w('Flurrystorm Cannon'), w('Overloaded Blaster'), w('Bullet-Filled Shotgun'), w('Shadethrower')],
        armor: [w('Aerospec armor'), w('Statigel armor'), w('Necro armor')],
        accessories: [w('Counter Scarf'), w('Skyline Wings'), w('Bundle of Horseshoe Balloons')],
      },
      magic: {
        weapons: [w('Demon Scythe'), w('Flower of Fire'), w('Shadowflame Hex Doll')],
        armor: [w('Jungle armor'), w('Meteor armor'), w('Mystic Robe')],
        accessories: [w('Mana Flower'), w('Lightning Boots'), w('Sorcerer Emblem')],
      },
      summoner: {
        weapons: [w('Imp Staff'), w('Hornet Staff'), w('Vampire Frog Staff')],
        armor: [w('Bee armor'), w('Jungle armor')],
        accessories: [w('Lightning Boots'), w('Papyrus Scarab')],
      },
      rogue: {
        weapons: [w('Molten Amputator'), w('Valkyrie Yoyo'), w('Old Lord Claymore')],
        armor: [w('Necro armor'), w('Fossil armor')],
        accessories: [w('Lightning Boots'), w("Gladiator's Locket"), w('Rogue Emblem')],
      },
    },
  },
  {
    id: 'pre-mech',
    name: 'Pre-Mechanical Bosses',
    nameTH: 'ก่อนล้มบอสกล',
    section: 'hardmode',
    order: 5,
    description: 'เข้า Hardmode แล้ว หาอาวุธและเกราะ Hardmode ชุดแรก',
    classes: {
      melee: {
        weapons: [w('Aftershock'), w('Bladestorm'), w('Ball O\' Hurt'), w('Cascade')],
        armor: [w('Palladium armor'), w('Orichalcum armor'), w('Titanium armor')],
        accessories: [w('Lightning Boots'), w('Magma Stone'), w('Destroyer Emblem')],
      },
      ranged: {
        weapons: [w('Daedalus Stormbow'), w('Polaris Parrotfish')],
        armor: [w('Palladium armor'), w('Cobalt armor'), w('Mythril armor')],
        accessories: [w("Stalker's Quiver"), w('Ranger Emblem'), w('Fairy Wings'), w('Fairy Boots')],
      },
      magic: {
        weapons: [w('Sky Fracture'), w('Crystal Serpent'), w('Frost Staff')],
        armor: [w('Palladium armor'), w('Orichalcum armor'), w('Titanium armor')],
        accessories: [w('Mana Flower'), w('Lightning Boots'), w('Sorcerer Emblem')],
      },
      summoner: {
        weapons: [w('Spider Staff'), w('Blade Staff')],
        armor: [w('Spider armor'), w('Palladium armor')],
        accessories: [w('Lightning Boots'), w('Papyrus Scarab'), w('Summoner Emblem')],
      },
      rogue: {
        weapons: [w('Duststorm in a Bottle'), w('Ghoulish Gouger'), w('Throwing Brick')],
        armor: [w('Statigel armor'), w('Palladium armor'), w('Titanium armor')],
        accessories: [w('Lightning Boots'), w('Rogue Emblem'), w("Gladiator's Locket")],
      },
    },
  },
  {
    id: 'pre-plantera',
    name: 'Pre-Plantera / Pre-Calamitas',
    nameTH: 'ก่อนล้ม Plantera',
    section: 'hardmode',
    order: 6,
    description: 'หลังล้มบอสกลทั้งสาม เตรียมล้ม Plantera และ Calamitas',
    classes: {
      melee: {
        weapons: [w('Fetid Baghnakhs'), w('Death Sickle'), w('Cutlass')],
        armor: [w('Hallowed armor'), w('Titanium armor')],
        accessories: [w('Mechanical Glove'), w('Lightning Boots'), w('Destroyer Emblem')],
      },
      ranged: {
        weapons: [w('Titanium Railgun'), w('Flak Toxicannon'), w('Daedalus Stormbow')],
        armor: [w('Orichalcum armor'), w('Chlorophyte armor')],
        accessories: [w('Ornate Shield'), w('Angel Treads'), w('Evasion Scarf'), w('Ranger Emblem')],
      },
      magic: {
        weapons: [w('Crystal Serpent'), w('Frost Staff'), w('Rainbow Rod')],
        armor: [w('Hallowed armor'), w('Titanium armor')],
        accessories: [w('Mana Flower'), w('Lightning Boots'), w('Sorcerer Emblem')],
      },
      summoner: {
        weapons: [w('Sanguine Staff'), w('Blade Staff'), w('Optic Staff')],
        armor: [w('Spider armor'), w('Hallowed armor')],
        accessories: [w('Papyrus Scarab'), w('Lightning Boots'), w('Summoner Emblem')],
      },
      rogue: {
        weapons: [w('Swordsplosion'), w('Animosity'), w('Ichor Dart')],
        armor: [w('Hallowed armor'), w('Titanium armor')],
        accessories: [w('Lightning Boots'), w('Rogue Emblem'), w('Cross Necklace')],
      },
    },
  },
  {
    id: 'pre-golem',
    name: 'Pre-Golem',
    nameTH: 'ก่อนล้ม Golem',
    section: 'hardmode',
    order: 7,
    description: 'หลังล้ม Plantera ปลดล็อค Jungle Temple',
    classes: {
      melee: {
        weapons: [w('Terra Blade'), w('Death Sickle'), w('Chlorophyte Saber')],
        armor: [w('Hallowed armor'), w('Forbidden armor')],
        accessories: [w('Mechanical Glove'), w('Fire Gauntlet'), w('Lightning Boots')],
      },
      ranged: {
        weapons: [w('Blossom Flux'), w('Hellborn')],
        armor: [w('Shroomite armor')],
        accessories: [w('Deadshot Brooch'), w('Hoverboard'), w("Asgard's Valor"), w('Sand Shark Tooth Necklace')],
      },
      magic: {
        weapons: [w('Spectre Staff'), w('Razorblade Typhoon'), w('Bubble Gun')],
        armor: [w('Spectre armor'), w('Forbidden armor')],
        accessories: [w('Mana Flower'), w('Sorcerer Emblem'), w('Lightning Boots')],
      },
      summoner: {
        weapons: [w('Pirate Staff'), w('Xeno Staff'), w('Sanguine Staff')],
        armor: [w('Forbidden armor'), w('Spider armor')],
        accessories: [w('Papyrus Scarab'), w('Necromantic Scroll'), w('Lightning Boots')],
      },
      rogue: {
        weapons: [w('Soul Harvester'), w('Chlorophyte Kunai'), w('Swordsplosion')],
        armor: [w('Hallowed armor'), w('Forbidden armor')],
        accessories: [w('Rogue Emblem'), w('Cross Necklace'), w('Lightning Boots')],
      },
    },
  },
  {
    id: 'pre-moon-lord',
    name: 'Pre-Moon Lord',
    nameTH: 'ก่อนล้ม Moon Lord',
    section: 'hardmode',
    order: 8,
    description: 'หลังล้ม Lunatic Cultist เตรียมล้มบอสสุดท้ายของ Vanilla',
    classes: {
      melee: {
        weapons: [w("Paladin's Hammer"), w('Terra Blade'), w('Influx Waver')],
        armor: [w('Beetle armor'), w('Solar Flare armor')],
        accessories: [w('Mechanical Glove'), w('Fire Gauntlet'), w('Celestial Shell')],
      },
      ranged: {
        weapons: [w('Pestilent Defiler')],
        armor: [w('Plague Reaper armor')],
        accessories: [w('Recon Scope'), w('Sniper Scope'), w('Destroyer Emblem'), w('Tattered Fairy Wings')],
      },
      magic: {
        weapons: [w('Last Prism'), w('Nebula Blaze'), w('Lunar Flare')],
        armor: [w('Spectre armor'), w('Nebula armor')],
        accessories: [w('Mana Flower'), w('Celestial Emblem'), w('Celestial Shell')],
      },
      summoner: {
        weapons: [w('Terraprisma'), w('Stardust Cell Staff'), w('Stardust Dragon Staff')],
        armor: [w('Stardust armor')],
        accessories: [w('Papyrus Scarab'), w('Necromantic Scroll'), w('Celestial Shell')],
      },
      rogue: {
        weapons: [w("Night's Ray"), w('Prismalline'), w('Celestus')],
        armor: [w('Titan Heart armor'), w('Hallowed armor')],
        accessories: [w('Rogue Emblem'), w('Statis\' Ninja Belt'), w('Celestial Shell')],
      },
    },
  },
  {
    id: 'post-moon-lord',
    name: 'Post-Moon Lord / Pre-Providence',
    nameTH: 'หลังล้ม Moon Lord',
    section: 'post-moon-lord',
    order: 9,
    description: 'เข้าสู่ Calamity endgame เริ่มต้นด้วยอาวุธ Drowtanium และ Auric',
    classes: {
      melee: {
        weapons: [w('Brimlash'), w('Catastrophe Claymore'), w('True Biome Blade')],
        armor: [w('Silva armor'), w('Auric Tesla armor')],
        accessories: [w('The Absorber'), w('Elysian Aegis'), w('Asgardian Aegis')],
      },
      ranged: {
        weapons: [w("Prideful Hunter's Planar Ripper"), w('Clockwork Bow'), w('Golden Eagle')],
        armor: [w('Vortex armor')],
        accessories: [w('Vortex Booster'), w('Deific Amulet'), w('The Community'), w('The Absorber')],
      },
      magic: {
        weapons: [w('Voltaic Climax'), w('Eternity'), w('Celestial Reaper')],
        armor: [w('Silva armor'), w('Auric Tesla armor')],
        accessories: [w('The Absorber'), w('Sigil of Calamitas'), w('Asgardian Aegis')],
      },
      summoner: {
        weapons: [w('Profaned Guardian summon'), w('Elemental Axe'), w("Deific Amulet")],
        armor: [w('Silva armor'), w('Auric Tesla armor')],
        accessories: [w('The Absorber'), w('Statis\' Blessing'), w('Asgardian Aegis')],
      },
      rogue: {
        weapons: [w('Celestus'), w('Executioner\'s Blade'), w('Titan Heart armor')],
        armor: [w('Silva armor'), w('Auric Tesla armor')],
        accessories: [w('The Absorber'), w('Nanotech'), w('Asgardian Aegis')],
      },
    },
  },
]

export const SECTIONS: Record<SectionId, { label: string; color: string }> = {
  'pre-hardmode': { label: 'Pre-Hardmode', color: 'text-sky-400' },
  'hardmode': { label: 'Hardmode', color: 'text-orange-400' },
  'post-moon-lord': { label: 'Post-Moon Lord', color: 'text-purple-400' },
}

export function getClassInfo(id: ClassId): ClassInfo {
  return CLASSES.find((c) => c.id === id)!
}

export function getPhasesBySection(section: SectionId): Phase[] {
  return PHASES.filter((p) => p.section === section).sort((a, b) => a.order - b.order)
}

export function wikiUrl(slug: string): string {
  return `https://calamitymod.wiki.gg/wiki/${slug}`
}

export function localImageUrl(slug: string): string {
  return `/items/${slug.replace(/_/g, '')}.png`
}

export function wikiImageUrl(slug: string): string {
  return `https://calamitymod.wiki.gg/wiki/Special:Filepath/${slug}.png`
}
