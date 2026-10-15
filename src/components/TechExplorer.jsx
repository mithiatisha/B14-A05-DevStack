

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to load technologies.json: ${response.status} ${response.statusText}`
          );
        }

        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error(
            'technologies.json must contain a JSON array.'
          );
        }

        const parsedData = data.map((tech) => ({
          ...tech,
          iconComponent: iconMapping[tech.id],
        }));

        setTechnologiesData(parsedData);
        setLoadError(false);
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
      toast.info(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id) => {
    const removedTech = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };

  const handleClearStack = () => {
    if (stack.length > 0) {
      setStack([]);
      toast.info('Your stack has been cleared.');
    }
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
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white px-6 text-center font-sans">
        <p className="text-lg font-semibold text-red-500">
          Failed to load technologies.
        </p>

        <p className="text-sm text-gray-500">
          Check that the file exists at public/technologies.json.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-pink-600 px-5 py-2 text-white transition hover:bg-pink-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pt-0 pb-18 font-sans md:px-16">
      <Header />

      <ToastContainer position="top-right" autoClose={2000} />

      <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
        {/* Technology cards */}
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

        {/* Desktop stack: stays visible while scrolling */}
        <aside className="sticky top-6 hidden min-w-0 self-start lg:col-span-1 lg:block">
          <Stack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onClear={handleClearStack}
          />
        </aside>

        {/* Mobile stack */}
        <section className="w-full lg:hidden">
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
