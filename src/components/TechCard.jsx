
import React from 'react';

function TechCard({ tech, onAdd }) {
  const IconComponent = tech.iconComponent;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-800">
            {IconComponent && <IconComponent size={22} />}
          </div>

          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            {tech.badge}
          </span>
        </div>

        <h3 className="mb-1 text-base font-bold text-gray-900">
          {tech.name}
        </h3>

        <p className="mb-6 text-xs leading-relaxed text-gray-500">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
          <span className="rounded border border-gray-100 bg-gray-50 px-2 py-1 text-gray-500">
            {tech.category}
          </span>

          <span className="rounded border border-gray-100 bg-gray-50 px-2 py-1 text-gray-500">
            {tech.difficulty}
          </span>

          <span className="ml-auto flex items-center gap-1 font-medium text-gray-700">
            ⭐ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          className="w-full rounded-xl bg-gray-900 py-2.5 text-xs font-medium text-white transition-colors hover:bg-gray-800"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
}

export default TechCard;

