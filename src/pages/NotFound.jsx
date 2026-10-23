import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-bg py-24 sm:py-32">
      <div className="wrap max-w-xl text-center">
        <p className="font-display text-6xl font-extrabold text-navy dark:text-sky">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-muted">Sorry, we couldn&rsquo;t find that page.</p>
        <Link to="/" className="btn btn-primary mt-6">
          <Home className="h-5 w-5" aria-hidden="true" /> Back to home
        </Link>
      </div>
    </section>
  );
}
