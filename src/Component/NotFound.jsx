import React from 'react';
import { Link, useParams } from 'react-router';

const NotFound = () => {
    const path = useParams()
    const pathName = path["*"];
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full text-center bg-white rounded-xl shadow-lg p-8">

                    {/* 404 Number */}
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="text-9xl font-bold text-gray-800">4</span>

                        {/* Zero with icon */}
                        <div className="relative w-20 h-20 rounded-full border-4 border-gray-800 flex items-center justify-center">
                            <span className="text-9xl font-bold text-gray-800">O</span>
                        </div>

                        <span className="text-9xl font-bold text-gray-800">4</span>
                    </div>

                    {/* Text */}
                    <h2 className="text-xl font-semibold uppercase text-gray-800 mb-2">
                        Sorry, we can’t find {pathName} page
                    </h2>

                    <p className="text-gray-500 text-sm mb-6">
                        Oops! The page you are looking for does not exist. It might have been
                        moved or deleted.
                    </p>

                    {/* Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        Go Back to Home
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;