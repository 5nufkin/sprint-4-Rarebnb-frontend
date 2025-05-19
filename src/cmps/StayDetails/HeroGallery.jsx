import { TbGridDots } from "react-icons/tb";


export function HeroGallery({ images = [] }) {
  const imgs = images.slice(0, 5)
  return (
    <section className="hero-gallery">
      {imgs.map((img, idx) => (
        <img key={idx} src={img} alt={`stay ${idx}`} className={`hero-img hero-${idx}`} />
      ))}
      <button className="btn-show-all">
        <TbGridDots size={18} style={{ marginRight: 6 }} />
        Show all photos
      </button>
      
    </section>
  )
}
