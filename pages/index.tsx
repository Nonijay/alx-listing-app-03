import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";

export default function Home() {
  return (
    <>
      <div className="px-4 md:px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div>
              <PropertyCard
                key={index}
                name={property.name}
                price={`$${property.price.toLocaleString()}`}
                rating={property.rating}
                image={property.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
