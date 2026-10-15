
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if (stack.some((item) => item.id === tech.id)) {
      toast.info(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id) => {
    const technology = stack.find((item) => item.id === id);

    if (!technology) {
      return;
    }

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    toast.info(`${technology.name} removed from your stack.`);
  };

  const handleClearStack = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty!');
      return;
    }

    setStack([]);
    toast.success('All technologies removed from your stack!');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white font-sans text-gray-500">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-600" />
        <p>Loading technologies...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 font-sans text-red-500">
        <p>
          Failed to load technologies. Please check technologies.json and try
          again.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pt-0 pb-18 font-sans md:px-16">
      <Header />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
        {/* Technology explorer */}
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

       
        <aside className="hidden min-w-0 lg:col-span-1 lg:block">
          <Stack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onClear={handleClearStack}
          />
        </aside>

        
        <section className="w-full lg:hidden">
          <Stack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onClear={handleClearStack}
          />
        </section>
      </div>

     
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default TechExplorer;

