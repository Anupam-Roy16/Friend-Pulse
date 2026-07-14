import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Error Code Tag */}
        <p className="text-6xl font-semibold text-indigo-600">404</p>
        
        {/* Main Heading */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        
        {/* Description */}
        <p className="mt-6 text-base leading-7 text-slate-600 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you misspelled the URL or the page has been moved.
        </p>
        
        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            Go back home
          </Link>
          
          
        </div>
      </div>
    </div>
  );
}