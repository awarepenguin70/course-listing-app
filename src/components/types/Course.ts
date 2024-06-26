// types/Course.ts
export interface Course {
  id: number;
  name: string;
  instructor: {
    name: string;
    bio: string;
  };
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  fee: string;
  syllabus: { week: number; topic: string; content: string }[];
  students: { id: number; name: string; email: string; progress: string }[];
  reviews: { studentId: number; rating: number; comment: string }[];
  additionalResources: { title: string; link: string }[];
}
