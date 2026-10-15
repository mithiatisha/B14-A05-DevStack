import React, { useState, useEffect } from 'react';
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiTailwindcss,
  SiDocker,
} from 'react-icons/si';

import Header from './Header';
import TechCard from './TechCard';
import Stack from './Stack';

const iconMapping = {
  react: SiReact,
  vue: SiVuedotjs,
  svelte: SiSvelte,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  redis: SiRedis,
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: SiOpenjdk,
  tailwind: SiTailwindcss,
  docker: SiDocker,
};

function TechExplorer() {
  const [technologiesData, setTechnologiesData] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load technologies data');
        }

        return response.json();
      })
      .then((data) => {
        const parsedData = data.map((tech) => ({
          ...tech,
          iconComponent: iconMapping[tech.id],
        }));

        setTechnologiesData(parsedData);
      })
      .catch((error) => {
        console.error('Error fetching technologies:', error);
        setLoadError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    setStack((previousStack) => {
      if (previousStack.some((item) => item.id === tech.id)) {
        return previousStack;
      }

      return [...previousStack, tech];
    });
  };

  const handleRemoveFromStack = (id) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  const handleClearStack = () => {
    setStack([]);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white font-sans text-gray-500">
        Loading technologies...
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white font-sans text-red-500">
        Failed to load technologies. Please check technologies.json.
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pt-0 pb-18 font-sans md:px-16">
      <Header />

   
      <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-4">

       
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
          {technologiesData.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAdd={handleAddToStack}
              isAdded={stack.some((item) => item.id === tech.id)}
            />
          ))}
        </section>

    
        <aside className="hidden min-w-0 lg:col-span-1 lg:block sticky top-6 self-start">
          <Stack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onClear={handleClearStack}
          />
        </aside>

     
        <section className="lg:hidden w-full">
          <Stack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onClear={handleClearStack}
          />
        </section>

      </div>
    </div>
  );
}

export default TechExplorer;
