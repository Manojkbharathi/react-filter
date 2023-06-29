import React from 'react';

const CourseContainer = ({ courses }) => {
  return (
    <div className='main-container'>
      {courses.map(({ id, img, category, price, decs }) => {
        return (
          <article className='section' key={id}>
            <img className='img' src={img} alt='' />

            <div className='item-info'>
              <header>
                <h4>{category}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='description'>{decs}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CourseContainer;
