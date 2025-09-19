// pages/index.tsx
import React, { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/PropertyCard";
import Pill from "@/components/Pill";
import { PropertyProps } from "@/interfaces";

const ALL_PILLS = [
  "Top Villa",
  "Self Checkin",
  "Free Reschedule",
  "Pool",
  "Private Pool",
  "Pet Friendly",
];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const properties = useMemo<PropertyProps[]>(
    () =>
      activeFilter
        ? PROPERTYLISTINGSAMPLE.filter((p) =>
            p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase()))
          )
        : PROPERTYLISTINGSAMPLE,
    [activeFilter]
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/images/hero.jpg')`,
            filter: "brightness(.6)",
          }}
        />
        <div className="container mx-auto relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-sm md:text-lg">The best prices for over 2 million properties worldwide.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-white text-blue-700 rounded-full">Explore</button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mt-6">
        <div className="flex gap-2 flex-wrap">
          {ALL_PILLS.map((p) => (
            <Pill
              key={p}
              title={p}
              active={activeFilter === p}
              onClick={() => setActiveFilter((cur) => (cur === p ? null : p))}
            />
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="container mx-auto px-4 mt-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop, idx) => (
            <PropertyCard key={idx} property={prop} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
