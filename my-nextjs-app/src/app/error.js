"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl text-red-500">
        Something went wrong...
      </h1>
      <h1 className="text-center text-3xl text-red-500">{error.message}</h1>
      <button onClick={() => reset()} className="btn btn-error">
        Error
      </button>
    </div>
  );
};

export default ErrorPage;
