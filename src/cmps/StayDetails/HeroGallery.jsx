import { useState } from 'react';
import { TbGridDots } from 'react-icons/tb';
import { PhotoModal } from './PhotoModal'; // נניח שקומפוננטה זו מקבלת startIndex

export function HeroGallery({ images = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoModalStartIndex, setPhotoModalStartIndex] = useState(0);

  const openPhotoModal = (index = 0) => { // ברירת מחדל לאינדקס 0
    setPhotoModalStartIndex(index);
    setIsModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsModalOpen(false);
  };

  // הצג עד 5 תמונות תצוגה מקדימה בגלריה הראשית
  const thumbs = images.slice(0, 5);

  return (
    <>
      <section className="hero-gallery">
        {thumbs.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`stay ${idx + 1}`} // שיניתי ל-idx + 1 שיהיה יותר ידידותי למשתמש
            className={`hero-img hero-${idx}`}
            onClick={() => openPhotoModal(idx)} // פתיחת המודל עם האינדקס של התמונה הנלחצת
          />
        ))}

        {/* הצג את הכפתור רק אם יש 5 תמונות או יותר */}
        {images.length >= 5 && (
          <button className="btn-show-all" onClick={() => openPhotoModal(0)}> {/* פתיחה מהתמונה הראשונה */}
            <TbGridDots size={18} style={{ marginRight: 6 }} /> Show all photos
          </button>
        )}
      </section>

      {isModalOpen && (
        <PhotoModal
          imgs={images}
          onClose={closePhotoModal}
          startIndex={photoModalStartIndex} // העברת האינדקס ההתחלתי למודל
        />
      )}
    </>
  );
}