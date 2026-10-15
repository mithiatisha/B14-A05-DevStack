import React from 'react';

function Header() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
        Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Technologies</span>
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
  );
}

export default Header;