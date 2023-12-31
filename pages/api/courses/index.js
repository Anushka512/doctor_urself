import { connectToDatabase } from '../../../database/utils/dbConnect';
import { getCourses, createUser} from '../../../database/controller/course.controller';

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
      await getCourses(req, res);
      break;
    case 'POST':
      await createUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}