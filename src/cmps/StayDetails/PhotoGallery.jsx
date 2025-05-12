export function PhotoGallery({ images = [], isGuestFavorite }) {
    return (
      <section className="photo-gallery">
        {isGuestFavorite && <span className="badge">Guest Favorite</span>}
        <div className="grid grid-cols-2 gap-2">
          {images.map((img, idx) =>
            <img key={idx} src={img} alt={`stay img ${idx}`} className="object-cover w-full h-40 rounded-lg" />
          )}
        </div>
      </section>
    )
  }
  