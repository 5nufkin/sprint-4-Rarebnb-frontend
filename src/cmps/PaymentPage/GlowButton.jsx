import { useRef } from "react"

export function GlowButton({ children, onClick }) {
  const btnRef = useRef()

  function handleMouseMove(e) {
    const rect = btnRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / btnRef.current.clientWidth) * 100
    const y = ((e.clientY - rect.top) / btnRef.current.clientHeight) * 100
    btnRef.current.style.setProperty('--mouse-x', x)
    btnRef.current.style.setProperty('--mouse-y', y)
  }

  return (
    <button ref={btnRef} onMouseMove={handleMouseMove} onClick={onClick} className="glow-button">
      {children}
    </button>
  )
}
