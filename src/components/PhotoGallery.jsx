import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Heart, Download } from 'lucide-react';
import { DraggableCard, DraggableCardContainer } from './ui/DraggableCard';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=800&fit=crop&crop=faces',
      alt: 'Beautiful moment together',
      caption: 'Our first adventure together',
      date: 'March 2024',
      location: 'Central Park',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop&crop=faces',
      alt: 'Romantic dinner',
      caption: 'That perfect dinner date',
      date: 'February 2024',
      location: 'Downtown',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=800&fit=crop&crop=faces',
      alt: 'Beach sunset',
      caption: 'Watching the sunset together',
      date: 'January 2024',
      location: 'Malibu Beach',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=800&fit=crop&crop=faces',
      alt: 'Cozy moment',
      caption: 'Cozy nights are the best nights',
      date: 'December 2023',
      location: 'Home',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=800&fit=crop&crop=center',
      alt: 'Laughing together',
      caption: 'You always make me laugh',
      date: 'November 2023',
      location: 'Coffee Shop',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop&crop=center',
      alt: 'Special celebration',
      caption: 'Celebrating us',
      date: 'October 2023',
      location: 'Rooftop Bar',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-5xl md:text-7xl font-bold font-heading gradient-text mb-6">
            Our Beautiful
            <br />
            Memories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Every photograph captures a moment in time, a story of our love,
            laughter, and the incredible journey we're creating together
          </motion.p>
        </motion.div>

        {/* Photo grid with draggable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <DraggableCardContainer>
                <DraggableCard
                  className="group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-slate-800 shadow-2xl">
                    {/* Image */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover content */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white">
                          <h3 className="font-semibold text-lg mb-1">
                            {photo.caption}
                          </h3>
                          <p className="text-sm text-slate-300">
                            {photo.location} • {photo.date}
                          </p>
                        </div>
                      </div>

                      {/* Heart icon */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Heart
                            className="w-5 h-5 text-pink-400"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </DraggableCard>
              </DraggableCardContainer>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected photo */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Photo details */}
                <div className="p-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedPhoto.caption}
                  </h3>
                  <p className="text-slate-400 mb-6">
                    {selectedPhoto.location} • {selectedPhoto.date}
                  </p>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                    >
                      Close
                    </button>
                    <button className="px-6 py-3 glass-morphism text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Save
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;
