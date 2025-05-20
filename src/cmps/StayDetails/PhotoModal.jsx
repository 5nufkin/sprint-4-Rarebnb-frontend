import React, { useState, useEffect } from 'react';

export function PhotoModal({ imgs = [], onClose, startIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!imgs.length) return null;

  return (
    <div className="photos-modal" onClick={onClose}>
      <div className="photos-modal__inner" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>

        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imgs.map((src, index) => (
              <div className="slider-slide" key={index}>
                <img src={src} alt={`Image ${index + 1}`} className="slider-image" />
              </div>
            ))}
          </div>
        </div>

        {imgs.length > 1 && (
          <>
            <button className="slider-btn slider-btn--prev" onClick={goToPrevious} aria-label="Previous image">&lt;</button>
            <button className="slider-btn slider-btn--next" onClick={goToNext} aria-label="Next image">&gt;</button>
          </>
        )}
        
        {imgs.length > 1 && (
            <div className="slider-counter">{currentIndex + 1} / {imgs.length}</div>
        )}
      </div>
    </div>
  );
}