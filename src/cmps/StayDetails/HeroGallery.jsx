import { useState } from 'react'
import { TbGridDots } from 'react-icons/tb'
import { PhotoModal } from './PhotoModal'

export function HeroGallery({ images = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const show   = () => setIsOpen(true)
  const close  = () => setIsOpen(false)

  const thumbs = images.slice(0, 5)

  return (
    <>
      <section className="hero-gallery">
        {thumbs.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`stay ${idx}`}
            className={`hero-img hero-${idx}`}
            onClick={show}
          />
        ))}

        <button className="btn-show-all" onClick={show}>
          <TbGridDots size={18} style={{ marginRight: 6 }} /> Show all photos
        </button>
      </section>

      {isOpen && <PhotoModal imgs={images} onClose={close} />}
    </>
  )
}

