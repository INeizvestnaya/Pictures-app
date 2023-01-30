import { useRef } from 'react';

import graffiti from '../../assets/graffiti.png';
import macbook from '../../assets/macbook.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PicturesList from '../../components/PicturesList';
import classes from './Pictures.module.css';

const Pictures: React.FC = () => {
  const scrollRef = useRef<HTMLHeadingElement | null>(null);

  const scrollToPictures = () => {
    window.scrollBy(0, scrollRef.current?.getBoundingClientRect().top || 0);
  };

  return (
    <>
      <div className={classes.content}>
        <Header />
        <section className={classes['pictures-info']}>
          <div className={classes['image-wrapper']}>
            <img src={graffiti} alt="graffiti" className={classes.graffiti} />
            <img src={macbook} alt="macbook" className={classes.macbook} />
          </div>
          <div className={classes['caption-wrapper']}>
            <h1 className={classes.caption}>
              Lorem ipsum
              <br /> dolor sit amet
            </h1>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button
              type="button"
              className={classes['pictures-button']}
              onClick={scrollToPictures}
            >
              To pictures
            </button>
          </div>
        </section>
        <PicturesList ref={scrollRef} />
      </div>
      <Footer />
    </>
  );
};

export default Pictures;
