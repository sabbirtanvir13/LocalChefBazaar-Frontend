import React from 'react';

const Newsletter = () => {
    return (
      <section className="bg-orange-50 dark:bg-gray-900 py-16">
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-4">
      Discover Local Chefs & Fresh Homemade Food
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
      Subscribe to get updates on new chefs, daily menus, special discounts,
      and exclusive homemade food offers near you.
    </p>

    <form className="flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="email"
        required
        placeholder="Enter your email to get food updates"
        className="w-full sm:w-2/3 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600"
      >
        Subscribe for Updates
      </button>
    </form>
  </div>
</section>

    );
};

export default Newsletter;