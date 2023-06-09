import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NotFoundPage() {
  const location = useLocation();

  useEffect(() => {
    // Do something with the location object to analyze the URL
    // and redirect to the appropriate child page
  }, [location]);

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;
