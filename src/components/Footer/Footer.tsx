import { memo } from 'react';

import maestroLogo from '../../assets/maestroLogo.png';
import mastercardLogo from '../../assets/mastercardLogo.png';
import visaLogo from '../../assets/visaLogo.png';
import FooterInfo from '../FooterInfo';
import FooterText from '../FooterText';
import classes from './Footer.module.css';

interface ImageType {
  src: string;
  alt: string;
}

const images: ImageType[] = [
  { src: visaLogo, alt: 'visa' },
  { src: mastercardLogo, alt: 'mastercard' },
  { src: maestroLogo, alt: 'maestro' }
];

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <div className={classes['footer-wrapper']}>
      <FooterText />
      <section className={classes.cards}>
        {images.map((image) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img key={image.alt} {...image} />
        ))}
      </section>
    </div>
    <FooterInfo />
  </footer>
);

export default memo(Footer);
