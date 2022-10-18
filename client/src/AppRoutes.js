import Books from './Component/Book/Books';
import Home from './Component/Home';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/books',
    // requireAuth: true,
    element: <Books />
  },

];

export default AppRoutes;
