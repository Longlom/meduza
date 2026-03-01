
import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

import styles from './style.module.css';

import page1 from "../../assets/menu/1.jpg";
import page2 from "../../assets/menu/2.jpg";
import page3 from "../../assets/menu/3.jpg";
import page4 from "../../assets/menu/4.jpg";
import page5 from "../../assets/menu/5.jpg";
import page6 from "../../assets/menu/6.jpg";
import page7 from "../../assets/menu/7.jpg";
import page8 from "../../assets/menu/8.jpg";

const images: GalleryItem[] = [
  {
    original: page1,
  },
  {
    original: page2,
  },
  {
    original: page3,
  },
  {
    original: page4,
  },
  {
    original: page5,
  },
  {
    original: page6,
  },
  {
    original: page7,
  },
  {
    original: page8,
  },

];

function MenuPage() {
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="app-container">
      <h1>Our Cafe Menu</h1>
      <ul className={styles.menuList}>
        <ImageGallery
          ref={galleryRef}
          items={images}
          onSlide={(index) => console.log("Slid to", index)}
        />
      </ul>
    </div>
  );
}

export default MenuPage;
