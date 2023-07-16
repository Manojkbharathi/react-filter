import { useState, Fragment } from 'react';
import { data } from './data';
import { removeDuplicates } from './utils';
import ButtonContainer from './components/ButtonContainer';
import CourseContainer from './components/CourseContainer';

const App = () => {
  const [courses, setCourses] = useState(data);

  const categories = [
    'All',
    ...removeDuplicates(data.map((course) => course.category)),
  ];

  const filterCourses = (category) => {
    if (category === 'All') {
      setCourses(data);
    } else {
      const filteredCourse = data.filter((course) => {
        return course.category === category;
      });
      setCourses(filteredCourse);
    }
    // every time it will filter on the original data so it wont change
  };

  return (
    <main>
      <h1 className='title-menu'>Our Menu</h1>
      <div className='underline'></div>
      <ButtonContainer categories={categories} filterCourses={filterCourses} />
      <CourseContainer courses={courses} />
    </main>
  );
};

export default App;
