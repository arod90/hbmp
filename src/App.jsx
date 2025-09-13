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
      backgroundMessage: 'gracias por llegar a mi vida',
      images: [
        {
          src: '/images/1 (1).jpg',
          className: 'absolute top-16 left-[14%] rotate-[-5deg]',
          title: 'el chancho',
        },
        {
          src: '/images/1 (2).jpg',
          className: 'absolute top-24 left-[24%] rotate-[8deg]',
          title: 'la rata',
        },
        {
          src: '/images/1 (9).jpg',
          className: 'absolute top-12 left-[34%] rotate-[-3deg]',
          title: 'nuestra familia',
        },
        {
          src: '/images/1 (20).jpg',
          className: 'absolute top-20 left-[44%] rotate-[4deg]',
          title: 'llevarles a la playa <3',
        },
      ],
    },
    {
      type: 'text',
      text: 'En estos días tuve la oportunidad de verte reír, de verte llorar, de descubrir el mundo contigo. Una montaña rusa de emociones fuertes que me unen a ti de la manera más íntima y profunda.',
    },
    {
      type: 'images',
      backgroundMessage: 'por crecer de la mano conmigo',
      images: [
        {
          src: '/images/1 (13).jpg',
          className: 'absolute top-18 left-[9%] rotate-[6deg]',
          title: 'buceando contigo <3',
        },
        {
          src: '/images/1 (14).jpg',
          className: 'absolute top-14 left-[21%] rotate-[-4deg]',
          title: 'la mujer mas hermosa',
        },
        {
          src: '/images/1 (16).jpg',
          className: 'absolute top-26 left-[33%] rotate-[7deg]',
          title: 'una aventura extrema',
        },
        {
          src: '/images/1 (23).jpg',
          className: 'absolute top-10 left-[43%] rotate-[-2deg]',
          title: 'cuando recien llego',
        },
      ],
    },
    {
      type: 'text',
      text: 'Me acuerdo de nuestros chistes y de tu risa, de como me molestas y me alivianas los días, y quiero llorar de la felicidad.',
    },
    {
      type: 'images',
      backgroundMessage: 'por reir juntos y nunca dejar de explorar juntos',
      images: [
        {
          src: '/images/1 (10).jpg',
          className: 'absolute top-16 left-[11%] rotate-[-6deg]',
          title: 'key west',
        },
        {
          src: '/images/1 (11).jpg',
          className: 'absolute top-22 left-[23%] rotate-[5deg]',
          title: 'es un mono <3',
        },
        {
          src: '/images/1 (18).jpg',
          className: 'absolute top-12 left-[35%] rotate-[-3deg]',
          title: 'como pinguino',
        },
        {
          src: '/images/1 (24).jpg',
          className: 'absolute top-6 left-[45%] rotate-[8deg]',
          title: '24 horas de viaje',
        },
      ],
    },
    {
      type: 'text',
      text: 'Me acuerdo de tus lágrimas y del susto de verte enfermita y siento el deber de cuidarte en cuerpo y alma toda la vida.',
    },
    {
      type: 'images',
      backgroundMessage: 'prometo cuidarte y amarte siempre',
      images: [
        {
          src: '/images/1 (3).jpg',
          className: 'absolute top-18 left-[14%] rotate-[-5deg]',
          title: 'pasochoa norte',
        },
        {
          src: '/images/1 (4).jpg',
          className: 'absolute top-12 left-[25%] rotate-[4deg]',
          title: 'ser cursi contigo',
        },
        {
          src: '/images/1 (5).jpg',
          className: 'absolute top-24 left-[36%] rotate-[-2deg]',
          title: 'nuestra cumbre',
        },
        {
          src: '/images/1 (6).jpg',
          className: 'absolute top-14 left-[47%] rotate-[6deg]',
          title: 'donde don jimmy',
        },
      ],
    },
    {
      type: 'text',
      text: 'Pienso en nuestras conversaciones largas y encuentros inesperados, y en cuanto aprendo de ti, cuanto le ayuda a crecer a mi alma tu forma de pensar y tu forma de actuar.',
    },
    {
      type: 'images',
      backgroundMessage: 'y siempre ser roca y tu mayor soporte',
      images: [
        {
          src: '/images/1 (7).jpg',
          className: 'absolute top-16 left-[7%] rotate-[5deg]',
          title: 'una palomita <3',
        },
        {
          src: '/images/1 (8).jpg',
          className: 'absolute top-22 left-[21%] rotate-[-7deg]',
          title: 'mi foto favorita de ti',
        },
        {
          src: '/images/1 (17).jpg',
          className: 'absolute top-12 left-[35%] rotate-[3deg]',
          title: 'un date especial',
        },
        {
          src: '/images/1 (26).jpg',
          className: 'absolute top-6 left-[45%] rotate-[-6deg]',
          title: 'la foto del coquito',
        },
      ],
    },
    {
      type: 'text',
      text: 'Pienso en las señales que nos mandan nuestros guías y se me conmueve el corazón.',
    },
    {
      type: 'images',
      backgroundMessage: 'por muchos años más y por nuestros sueños!',
      images: [
        {
          src: '/images/1 (12).jpg',
          className: 'absolute top-20 left-[9%] rotate-[-4deg]',
          title: 'señales',
        },
        {
          src: '/images/1 (21).jpg',
          className: 'absolute top-14 left-[21%] rotate-[6deg]',
          title: 'buscando cuarzos',
        },
        {
          src: '/images/1 (15).jpg',
          className: 'absolute top-18 left-[33%] rotate-[3deg]',
          title: 'papallacta!',
        },
        {
          src: '/images/1 (27).jpg',
          className: 'absolute top-8 left-[43%] rotate-[7deg]',
          title: 'encontrarnos en paris',
        },
      ],
    },
    {
      type: 'text',
      text: 'Gracias por llegar a mi vida, por crecer de la mano conmigo, por reír juntos y nunca dejar de explorar juntos.',
    },
    {
      type: 'images',
      backgroundMessage: 'gracias por llegar a mi vida',
      images: [
        {
          src: '/images/1 (28).jpg',
          className: 'absolute top-16 left-[10%] rotate-[-3deg]',
          title: 'nuestra segunda aventura',
        },
        {
          src: '/images/1 (29).jpg',
          className: 'absolute top-12 left-[25%] rotate-[5deg]',
          title: 'portugal!',
        },
        {
          src: '/images/1 (30).jpg',
          className: 'absolute top-20 left-[40%] rotate-[-7deg]',
          title: 'en tu ciudad favorita!',
        },
      ],
    },
    {
      type: 'text',
      text: 'Prometo cuidarte y amarte siempre, y siempre ser roca y tu mayor soporte por muchos años más y por nuestros sueños!',
    },
    {
      type: 'images',
      backgroundMessage: 'por muchos años más y por nuestros sueños!',
      images: [
        {
          src: '/images/1 (31).jpg',
          className: 'absolute top-14 left-[10%] rotate-[4deg]',
          title: 'con mi pelo "largo"',
        },
        {
          src: '/images/1 (22).jpg',
          className: 'absolute top-8 left-[25%] rotate-[6deg]',
          title: 'cuando vimos un alien!',
        },
        {
          src: '/images/1 (25).jpg',
          className: 'absolute top-18 left-[40%] rotate-[-4deg]',
          title: 'me haces mas feliz que nunca',
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
              type: 'tween',
              ease: 'easeOut',
              duration: 0.6,
              delay: 0.2,
            }}
            className="hero-icon"
          >
            <Heart className="main-heart" fill="currentColor" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: 'easeOut',
              type: 'tween',
            }}
            className="hero-title"
          >
            <span className="gradient-text">HBD</span>{' '}
            <span className="title-word">love of my life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.6,
              ease: 'easeOut',
              type: 'tween',
            }}
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
                src="/images/1 (8).jpg"
                alt="Special moment"
                className="hero-polaroid-image"
                loading="eager"
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
                      {/* Background message */}
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <p className="text-center text-2xl md:text-4xl font-bold text-neutral-400 dark:text-neutral-600 max-w-sm mx-auto px-4 select-none">
                          {element.backgroundMessage ||
                            'Swipe the cards to explore our memories'}
                        </p>
                      </div>

                      {/* Draggable cards */}
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
                              loading="lazy"
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
                  initial={{ opacity: 0, scale: 0.95, rotate: 4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 6 }}
                  transition={{ delay: 1.8, duration: 0.6, ease: 'easeOut' }}
                  className="final-card-image"
                >
                  <div className="final-polaroid-card">
                    <img
                      src="/images/1 (19).jpg"
                      alt="Final moment"
                      className="final-polaroid-image"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=400&fit=crop&crop=faces';
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
