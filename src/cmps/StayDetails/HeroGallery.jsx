export function HeroGallery({ images = [] }) {
  const imgs = images.slice(0, 5)
  return (
    <section className="hero-gallery">
      {imgs.map((img, idx) => (
        <img key={idx} src={img} alt={`stay ${idx}`} className={`hero-img hero-${idx}`} />
      ))}
      <button className="btn-show-all">Show all photos</button>
    </section>
  )
}
