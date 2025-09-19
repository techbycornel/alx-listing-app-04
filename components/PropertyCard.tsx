// components/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 w-full bg-gray-200">
        {/* for production prefer next/image; using img for simplicity */}
        <img
          src={property.image}
          alt={property.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <p className="text-xs text-gray-500">
              {property.address.city}, {property.address.country}
            </p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {property.category.slice(0, 3).map((c, i) => (
                <span key={i} className="text-xs px-2 py-1 border rounded-full text-gray-600">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">${property.price}</div>
            <div className="text-sm text-gray-500">{property.rating} ⭐</div>
            {property.discount ? (
              <div className="text-xs mt-2 text-red-600">-{property.discount}%</div>
            ) : null}
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Beds: {property.offers.bed} • Baths: {property.offers.shower} • {property.offers.occupants} guests
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
