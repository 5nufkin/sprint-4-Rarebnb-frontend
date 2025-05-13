import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const GROUPS = [
  { key: 'adults',   label: 'Adults',   sub: 'Age 13+',  min: 1, max: 16 },
  { key: 'children', label: 'Children', sub: 'Ages 2-12', min: 0, max: 5 },
  { key: 'infants',  label: 'Infants',  sub: 'Under 2',  min: 0, max: 5 },
  { key: 'pets',     label: 'Pets',     sub: 'Bringing a service animal?', min: 0, max: 2 },
]

export function GuestsSelector({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)
  const popRef = useRef(null)

  useEffect(() => {
    function handle(e) {
      if (e.key === 'Escape') setOpen(false)
      if (e.type === 'mousedown' &&
          popRef.current &&
          !popRef.current.contains(e.target) &&
          !btnRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    document.addEventListener('keydown', handle)
    return () => {
      document.removeEventListener('mousedown', handle)
      document.removeEventListener('keydown', handle)
    }
  }, [])

  function mutate(key, delta) {
    const g = GROUPS.find(gr => gr.key === key)
    const next = { ...value, [key]: Math.max(g.min, Math.min(value[key] + delta, g.max)) }
    onChange(next)
  }
  const total = Object.values(value).reduce((s, n) => s + n, 0)

  const pop = open && createPortal(
    <div
      ref={popRef}
      className="guests-pop"
      style={{
        top: btnRef.current?.getBoundingClientRect().bottom + window.scrollY + 8,
        left: btnRef.current?.getBoundingClientRect().left + window.scrollX,
      }}
    >
      {GROUPS.map(g =>
        <div key={g.key} className="row">
          <div className="lbl">
            <span>{g.label}</span>
            <span className="sub">{g.sub}</span>
          </div>
          <div className="ctrls">
            <button disabled={value[g.key] === g.min} onClick={() => mutate(g.key, -1)}>−</button>
            <span>{value[g.key]}</span>
            <button disabled={value[g.key] === g.max} onClick={() => mutate(g.key, +1)}>+</button>
          </div>
        </div>
      )}
      <div className="footer">
        This place has a maximum of <b>16 guests</b>, not including infants.
      </div>
      <button className="close" onClick={() => setOpen(false)}>Close</button>
    </div>,
    document.body
  )

  return (
    <>
      <button ref={btnRef} className="guests-btn" onClick={() => setOpen(!open)}>
        {total} guest{total > 1 && 's'} ▾
      </button>
      {pop}
    </>
  )
}
