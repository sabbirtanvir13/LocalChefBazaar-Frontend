import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#fff7f0]">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
                    <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>


                {/* Brand Name */}
                <h2 className="text-2xl font-extrabold tracking-wide">
                    <span className="text-gray-900">Local</span>
                    <span className="text-orange-500">Chef</span>
                    <span className="text-gray-900">Bazar</span>
                </h2>


                {/* Subtitle */}
                <p className="text-sm text-gray-500">Fresh food is loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;