
import React from 'react';

function Stack({ stack, onRemove, onClear }) {
  return (
    <div className="flex max-h-[calc(100vh-3rem)] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

      
      <div className="mb-5 shrink-0">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length === 0
            ? 'No technologies added'
            : `${stack.length} ${
                stack.length === 1 ? 'technology' : 'technologies'
              } added`}
        </p>
      </div>

      
      {stack.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 px-4 py-10 text-center">
          <p className="text-sm font-medium text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          
          <div className="min-h-0 space-y-3 overflow-y-auto">
            {stack.map((item) => {
              const IconComponent = item.iconComponent;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-gray-800">
                      {IconComponent && (
                        <IconComponent size={22} />
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="truncate text-xs text-gray-500">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>

          
          <button
            type="button"
            onClick={onClear}
            className="mt-4 w-full shrink-0 rounded-xl border border-red-100 bg-red-50/50 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
}

export default Stack;


