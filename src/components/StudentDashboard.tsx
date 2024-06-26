// components/StudentDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Course } from "./types/Course"; // Update the import path if needed
import { getCourses } from "./services/courseApi"; // Update the import path if needed

const StudentDashboard: React.FC = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const studentId = 101; // Assuming the logged-in student has ID 101. Update this as necessary.

  useEffect(() => {
    // For simplicity, we're fetching all courses as enrolled courses
    getCourses().then(setEnrolledCourses);
  }, []);

  const markCourseCompleted = (courseId: number) => {
    // Here you would typically call an API to update the course progress
    // For this example, we'll just update the local state
    setEnrolledCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? {
              ...course,
              students: course.students.map(student =>
                student.id === studentId
                  ? { ...student, progress: 'Completed' }
                  : student
              )
            }
          : course
      )
    );
  };

  return (
    <div>
      <h1>My Courses</h1>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <img src={course.thumbnail} alt={`${course.name} thumbnail`} style={{ width: '100px', height: '100px' }} />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor.name}</p>
            <p>Description: {course.description}</p>
            {course.students
              .filter(student => student.id === studentId)
              .map(student => (
                <div key={student.id}>
                  {student.progress !== 'Completed' && (
                    <button onClick={() => markCourseCompleted(course.id)}>Mark as Completed</button>
                  )}
                </div>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
