import { connectToDatabase } from '../../../database/utils/dbConnect';
import {  updateUser, deleteUser } from '../../../database/controller/user.controller';
import { getCourseById } from '@/database/controller/course.controller';

// Attempt to connect to database
connectToDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});

export default async function handler(req, res) {
  // Get HTTP method
  const { method } = req;

  switch (method) {
    case 'GET':
      await getCourseById(req, res);
      break;
    case 'PUT':
      await updateUser(req, res);
      break;
    case 'DELETE':
      await deleteUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}