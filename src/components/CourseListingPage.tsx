// components/CourseListingPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Course} from "./types/Course.ts";
import {getCourses} from "./services/courseApi.ts";

const CourseListingPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div>
      <h1>Course Listing</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link> {/* Link to course details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListingPage;