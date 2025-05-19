import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'

export function PhotoModal({ imgs, onClose }) {
  useEffect(() => {
    function onKey(ev) {
      if (ev.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div className="photos-modal" onClick={onClose}>
      <div className="photos-modal__inner" onClick={ev => ev.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close gallery">
          <IoClose size={32} />
        </button>
        <div className="photos-grid">
          {imgs.map((src, idx) => (
            <img key={idx} src={src} alt={`stay photo ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}
