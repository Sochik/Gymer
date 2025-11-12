import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryimg1, galleryimg2, galleryimg3, galleryimg4, galleryimg5, galleryimg6, galleryimg7, galleryimg8 } from "../assets/images";

const gallery = [
  { id: 1, image: galleryimg1 },
  { id: 2, image: galleryimg2 },
  { id: 3, image: galleryimg3 },
  { id: 4, image: galleryimg4 },
  { id: 5, image: galleryimg5 },
  { id: 6, image: galleryimg6 },
  { id: 7, image: galleryimg7 },
  { id: 8, image: galleryimg8 },
];

const getRandomSpan = () => ({
  col: Math.floor(Math.random() * 2) + 1, // 1 or 2
  row: Math.floor(Math.random() * 2) + 1, // 1 or 2
});

// Helper to get N random unique items from an array
function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export default function Gallery() {
  const [layouts, setLayouts] = useState(gallery.map(() => getRandomSpan()));
  const [displayed, setDisplayed] = useState(gallery);

  // Responsive: check if mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayouts(gallery.map(() => getRandomSpan()));
      if (isMobile) {
        setDisplayed(getRandomItems(gallery, 4));
      } else {
        setDisplayed(gallery);
      }
    }, 9000);

    // Initial set
    if (isMobile) {
      setDisplayed(getRandomItems(gallery, 4));
    } else {
      setDisplayed(gallery);
    }

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-4 gap-3 p-4 h-[85vh] auto-rows-fr max-w-full">
        <AnimatePresence>
          {displayed.map((item, idx) => {
            const layout = layouts[idx] || { col: 1, row: 1 };
            const colSpan = `col-span-${layout.col}`;
            const rowSpan = `row-span-${layout.row}`;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative ${colSpan} ${rowSpan} overflow-hidden rounded-lg shadow-lg`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
  );
}