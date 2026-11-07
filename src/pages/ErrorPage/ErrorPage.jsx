import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">Error!</h1>
      <p>Something went wrong.</p>
      <p className="mt-4">
        But you can always go back to the{" "}
        <Link to="/" className="link link-primary">
          Home
        </Link>{" "}
        page.
      </p>
    </div>
  );
};

export default ErrorPage;
