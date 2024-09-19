import { Link, useLocation } from "@remix-run/react";

export function NotFound() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-gray-800">
      <h1 className="text-5xl font-bold text-red-500">
        websiteErrors.siteNotFound
      </h1>
      <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
        websiteErrors.pageNotFoundMessage
      </h3>
      <pre>{location.pathname.substring(1)}</pre>
      <p className="mt-4 text-lg text-gray-600">
        websiteErrors.wrongTurnMessage
      </p>
      <Link className="notFoundLink" to="/">
        websiteErrors.goBackToHomepage
      </Link>
      <h1 className="mt-20 text-5xl font-bold text-red-500">404</h1>
    </div>
  );
}