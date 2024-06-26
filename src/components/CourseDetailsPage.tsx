// components/CourseDetailsPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Course} from "./types/Course.ts";// Ensure the import path is correct
import {getCourseById} from "./services/courseApi.ts"; // Ensure the import path is correct

const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [showSyllabus, setShowSyllabus] = useState(false);

  useEffect(() => {
    if (courseId) {
      getCourseById(parseInt(courseId, 10)).then(setCourse);
    }
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const toggleSyllabus = () => setShowSyllabus(!showSyllabus);

  return (
    <div>
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor.name}</p>
      <p><strong>Instructor Bio:</strong> {course.instructor.bio}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div>
        <button onClick={toggleSyllabus}>
          {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
        </button>
        {showSyllabus && (
          <ul>
            {course.syllabus.map((topic, index) => (
              <li key={index}>
                <strong>Week {topic.week}:</strong> {topic.topic}
                <br />
                {topic.content}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Link to="/dashboard">Go to Student Dashboard</Link>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
