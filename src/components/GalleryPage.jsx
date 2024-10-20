import React from 'react';
import Gallery_1 from '../img/gallery/gallery_1.jpg'
import Gallery_2 from '../img/gallery/gallery_2.jpg'
import Gallery_3 from '../img/gallery/gallery_3.jpg'
import Gallery_4 from '../img/gallery/gallery_4.jpg'
import Gallery_5 from '../img/gallery/gallery_5.jpg'
import Gallery_6 from '../img/gallery/gallery_6.jpg'
import Gallery_7 from '../img/gallery/gallery_7.jpg'
import Gallery_8 from '../img/gallery/gallery_8.jpg'
import Gallery_9 from '../img/gallery/gallery_9.jpg'
import Gallery_10 from '../img/gallery/gallery_10.jpg'
import Gallery_11 from '../img/gallery/gallery_11.jpg'
import Gallery_12 from '../img/gallery/gallery_12.jpg'
import Gallery_13 from '../img/gallery/gallery_13.jpg'
import Gallery_14 from '../img/gallery/gallery_14.jpg'
import Gallery_15 from '../img/gallery/gallery_15.jpg'
import Gallery_16 from '../img/gallery/gallery_16.jpg'
import Gallery_17 from '../img/gallery/gallery_17.jpg'
import Gallery_18 from '../img/gallery/gallery_18.jpg'
import Gallery_19 from '../img/gallery/gallery_19.jpg'
import Gallery_20 from '../img/gallery/gallery_20.jpg'
import Gallery_21 from '../img/gallery/gallery_21.jpg'
import Gallery_22 from '../img/gallery/gallery_22.jpg'
import Gallery_23 from '../img/gallery/gallery_23.jpg'
import Gallery_24 from '../img/gallery/gallery_24.jpg'
import Gallery_25 from '../img/gallery/gallery_25.jpg'
import Gallery_26 from '../img/gallery/gallery_26.jpg'
import Gallery_27 from '../img/gallery/gallery_27.jpg'
import Gallery_28 from '../img/gallery/gallery_28.jpg'

const GalleryPage = () => {
  const images = [
    Gallery_1,
    Gallery_2,
    Gallery_3,
    Gallery_4,
    Gallery_5,
    Gallery_6,
    Gallery_7,
    Gallery_8,
    Gallery_9,
    Gallery_10,
    Gallery_11,
    Gallery_12,
    Gallery_13,
    Gallery_14,
    Gallery_15,
    Gallery_16,
    Gallery_17,
    Gallery_18,
    Gallery_19,
    Gallery_20,
    Gallery_21,
    Gallery_22,
    Gallery_23,
    Gallery_24,
    Gallery_25,
    Gallery_26,
    Gallery_27,
    Gallery_28,
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Фотогалерея</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery item ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
