import { SECTORS } from '../data/sectors.js';
import { go } from '../store.js';

// Sahifa tepasidagi soha tanlash tugmalari
export default function SectorPicker({ page, sector, lang, t }) {
  return (
    <div className="chips">
      <button className={`chip ${sector === 'all' ? 'active' : ''}`} onClick={() => go(page, 'all')}>
        🌏 {t.allSectors}
      </button>
      {SECTORS.map((s) => (
        <button
          key={s.id}
          className={`chip ${sector === s.id ? 'active' : ''}`}
          style={{ '--c': s.color }}
          onClick={() => go(page, s.id)}
        >
          {s.icon} {s.name[lang]}
        </button>
      ))}
    </div>
  );
}
