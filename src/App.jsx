import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import {
  DraggableCardContainer,
  DraggableCardBody,
} from './components/ui/draggable-card';
import { AuroraBackground } from './components/ui/aurora-background';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Story structure with text blocks followed by image sliders
  const storyElements = [
    {
      type: 'text',
      text: 'Después de una aventura más con nuestra familia, y de darme un momento para recoger los lindos pasos de nuestro viaje juntos en la tierra.',
    },
    {
      type: 'images',
      images: [
        {
          src: '/src/assets/images/1 (1).jpg',
          className: 'absolute top-16 left-[10%] rotate-[-5deg]',
          title: 'Aventuras',
        },
        {
          src: '/src/assets/images/1 (2).jpg',
          className: 'absolute top-24 left-[30%] rotate-[8deg]',
          title: 'Familia',
        },
        {
          src: '/src/assets/images/1 (9).jpg',
          className: 'absolute top-12 left-[50%] rotate-[-3deg]',
          title: 'Juntos',
        },
        {
          src: '/src/assets/images/1 (20).jpg',
          className: 'absolute top-20 left-[70%] rotate-[4deg]',
          title: 'Momentos',
        },
      ],
    },
    {
      type: 'text',
      text: 'En estos días tuve la oportunidad de verte reír, de verte llorar, de descubrir el mundo contigo. Una montaña rusa de emociones fuertes que me unen a ti de la manera más íntima y profunda.',
    },
    {
      type: 'images',
      images: [
        {
          src: '/src/assets/images/1 (13).jpg',
          className: 'absolute top-18 left-[15%] rotate-[6deg]',
          title: 'Reír',
        },
        {
          src: '/src/assets/images/1 (14).jpg',
          className: 'absolute top-14 left-[42%] rotate-[-4deg]',
          title: 'Emociones',
        },
        {
          src: '/src/assets/images/1 (16).jpg',
          className: 'absolute top-26 left-[65%] rotate-[7deg]',
          title: 'Descubrir',
        },
      ],
    },
    {
      type: 'text',
      text: 'Me acuerdo de nuestros chistes y de tu risa, de como me molestas y me alivianas los días, y quiero llorar de la felicidad.',
    },
    {
      type: 'images',
      images: [
        {
          src: '/src/assets/images/1 (10).jpg',
          className: 'absolute top-16 left-[20%] rotate-[-6deg]',
          title: 'Risas',
        },
        {
          src: '/src/assets/images/1 (11).jpg',
          className: 'absolute top-22 left-[45%] rotate-[5deg]',
          title: 'Felicidad',
        },
        {
          src: '/src/assets/images/1 (18).jpg',
          className: 'absolute top-12 left-[68%] rotate-[-3deg]',
          title: 'Alegría',
        },
      ],
    },
    {
      type: 'text',
      text: 'Me acuerdo de tus lágrimas y del susto de verte enfermita y siento el deber de cuidarte en cuerpo y alma toda la vida.',
    },
    {
      type: 'images',
      images: [
        {
          src: '/src/assets/images/1 (3).jpg',
          className: 'absolute top-18 left-[8%] rotate-[-5deg]',
          title: 'Cuidarte',
        },
        {
          src: '/src/assets/images/1 (4).jpg',
          className: 'absolute top-12 left-[28%] rotate-[4deg]',
          title: 'Proteger',
        },
        {
          src: '/src/assets/images/1 (5).jpg',
          className: 'absolute top-24 left-[48%] rotate-[-2deg]',
          title: 'Amor',
        },
        {
          src: '/src/assets/images/1 (6).jpg',
          className: 'absolute top-14 left-[68%] rotate-[6deg]',
          title: 'Siempre',
        },
      ],
    },
    {
      type: 'text',
      text: 'Pienso en nuestras conversaciones largas y encuentros inesperados, y en cuanto aprendo de ti, cuanto le ayuda a crecer a mi alma tu forma de pensar y tu forma de actuar.',
    },
    {
      type: 'images',
      images: [
        {
          src: '/src/assets/images/1 (7).jpg',
          className: 'absolute top-16 left-[15%] rotate-[5deg]',
          title: 'Conversaciones',
        },
        {
          src: '/src/assets/images/1 (8).jpg',
          className: 'absolute top-22 left-[40%] rotate-[-7deg]',
          title: 'Aprender',
        },
        {
          src: '/src/assets/images/1 (17).jpg',
          className: 'absolute top-12 left-[65%] rotate-[3deg]',
          title: 'Crecer',
        },
      ],
    },
    {
      type: 'text',
      text: 'Pienso en las señales que nos mandan nuestros guías y se me conmueve el corazón.',
    },
    {
      type: 'images',
      images: [
        {
          src: '/src/assets/images/1 (12).jpg',
          className: 'absolute top-20 left-[10%] rotate-[-4deg]',
          title: 'Señales',
        },
        {
          src: '/src/assets/images/1 (21).jpg',
          className: 'absolute top-14 left-[25%] rotate-[6deg]',
          title: 'Corazón',
        },
        {
          src: '/src/assets/images/1 (15).jpg',
          className: 'absolute top-18 left-[55%] rotate-[3deg]',
          title: 'Destino',
        },
      ],
    },
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="loading-content"
        >
          <div className="loading-heart">
            <Heart className="heart-icon" fill="currentColor" />
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
            className="loading-bar"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="hero-icon"
          >
            <Heart className="main-heart" fill="currentColor" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
            className="hero-title"
          >
            <span className="gradient-text">HBD</span>{' '}
            <span className="title-word">love of my life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
            className="hero-subtitle"
          >
            Celebro tu vida, que se ha vuelto irreparablemente atada a la mía.
          </motion.p>

          {/* Single Angled Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}
            className="hero-card"
          >
            <div className="hero-polaroid-card">
              <img
                src="/src/assets/images/1 (8).jpg"
                alt="Special moment"
                className="hero-polaroid-image"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300&h=400&fit=crop&crop=faces';
                }}
              />
            </div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Story Flow - Alternating Text and Images */}
      <div className="story-flow">
        {storyElements.map((element, index) => {
          if (element.type === 'text') {
            return (
              <section key={index} className="story-section text-section">
                <div className="section-container">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-content-centered"
                  >
                    <p className="story-text">{element.text}</p>
                  </motion.div>
                </div>
              </section>
            );
          }

          if (element.type === 'images') {
            return (
              <section key={index} className="story-section images-section">
                <div className="section-container">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="images-container"
                  >
                    <DraggableCardContainer className="card-container">
                      {element.images.map((image, imgIndex) => (
                        <DraggableCardBody
                          key={imgIndex}
                          className={image.className}
                        >
                          <div className="polaroid-card">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="polaroid-image"
                              onError={(e) => {
                                // Fallback to placeholder if image doesn't exist yet
                                e.target.src = `https://images.unsplash.com/photo-${
                                  1500000000000 + imgIndex
                                }?w=400&h=500&fit=crop&crop=faces`;
                              }}
                            />
                            <div className="polaroid-caption">
                              {image.title}
                            </div>
                          </div>
                        </DraggableCardBody>
                      ))}
                    </DraggableCardContainer>
                  </motion.div>
                </div>
              </section>
            );
          }

          return null;
        })}

        {/* Final Section */}
        <section className="story-section final-section">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="final-content"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="celebration"
              >
                <h2 className="celebration-text gradient-text">
                  HBD love of my life ♡
                </h2>
                  <p className="final-message">
                    Hoy mi corazón está de fiesta porque te tengo a ti.
                  </p>

                  {/* Standalone Final Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 6 }}
                    transition={{ delay: 2.0, duration: 1, ease: 'easeOut' }}
                    className="final-card-image"
                  >
                    <div className="final-polaroid-card">
                      <img
                        src="/src/assets/images/1 (19).jpg"
                        alt="Final moment"
                        className="final-polaroid-image"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=400&fit=crop&crop=faces';
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
