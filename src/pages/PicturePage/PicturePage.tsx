import { useLocation } from 'react-router';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import useFetchData from '../../hooks/useFetchData';
import { Picture } from '../../types';
import classes from './PicturePage.module.css';

const detailsLabels = ['Resolution', 'Author', 'ID'];

const PicturePage: React.FC = () => {
  const location = useLocation();

  const {
    loading,
    error,
    data: picture
  } = useFetchData<Picture>(
    `https://picsum.photos/id/${location.search.split('=')[1]}/info`
  );

  return (
    <>
      <div className={classes.content}>
        <Header />
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!(loading || error) && (
          <section className={classes['picture-wrapper']}>
            <img
              src={picture?.download_url}
              alt={picture?.id}
              className={classes.picture}
            />
            <article className={classes['details-wrapper']}>
              <h2>Details</h2>
              <div className={classes.details}>
                {detailsLabels.map((label) => (
                  <span key={label} className={classes['details-label']}>
                    {label}
                  </span>
                ))}
                <span>
                  {picture?.width} x {picture?.height}
                </span>
                <span>{picture?.author}</span>
                <span>{picture?.id}</span>
              </div>
            </article>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PicturePage;
