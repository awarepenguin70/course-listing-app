// services/courseApi.ts
import axios from 'axios';
import { Course } from '../types/Course';

const apiUrl = 'http://localhost:3000/courses'; // Replace with your actual API endpoint

export const getCourses = async (): Promise<Course[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const getCourseById = async (id: number): Promise<Course> => {
  const response = await axios.get(`${apiUrl}/${id}`);
  return response.data;
};