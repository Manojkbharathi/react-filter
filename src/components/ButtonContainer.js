import React from 'react';

const ButtonContainer = ({ categories, filterCourses }) => {
  const clickHandler = (category) => {
    filterCourses(category);
  };

  return (
    <div className='nav-bar'>
      {categories.map((category, index) => {
        return (
          <button onClick={() => clickHandler(category)} key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
