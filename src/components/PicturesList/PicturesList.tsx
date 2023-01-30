import React from 'react';
import { useNavigate } from 'react-router';

import { PICTURE_PAGE } from '../../constants/routes';
import useFetchData from '../../hooks/useFetchData';
import { Picture } from '../../types';
import classes from './PicturesList.module.css';

const PicturesList = React.forwardRef<HTMLHeadingElement>((_, ref) => {
  const navigate = useNavigate();

  const {
    loading,
    error,
    data: pictures
  } = useFetchData<Picture[]>('https://picsum.photos/v2/list?page=2&limit=12');

  const imageClickHandler = (id: string) => {
    navigate(`${PICTURE_PAGE}?id=${id}`);
  };

  if (error) {
    return <p className={classes['info-label']}>{error}</p>;
  }

  return loading ? (
    <p className={classes['info-label']}>Loading...</p>
  ) : (
    <>
      <h3 className={classes.caption} ref={ref}>
        All images
      </h3>
      <div className={classes['pictures-list']}>
        {pictures &&
          pictures.map(({ id, download_url }) => (
            <button
              className={classes['image-button']}
              key={id}
              type="button"
              onClick={() => imageClickHandler(id)}
            >
              <img src={download_url} alt={id} />
            </button>
          ))}
      </div>
    </>
  );
});

export default PicturesList;
