"use client";

import { useState } from "react";
import { AdCard } from "~/components/ad-card";
import { NewAdForm } from "~/components/new-ad";
import { advertisements as initialAdvertisements } from "~/components/types/advertisement";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { filterAds, LocationSelector } from "~/components/location-helpers";
import CloseIcon from "~/icons/CloseIcon";
import MapIcon from "~/icons/MapIcon";
import AddBoxIcon from "~/icons/AddBoxIcon";

export default function CompanyAds() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [ads, setAds] = useState(initialAdvertisements);

  const [filterCenter, setFilterCenter] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [radius, setRadius] = useState(50); // i km
  const [showMapFilter, setShowMapFilter] = useState(false); // 👈 ny state

  const handleSave = (newAd: {
    title: string;
    description: string;
    city: string;
    location: string;
    startDate: string;
    endDate: string;
    userId: string;
    image: string;
  }) => {
    const now = new Date();
    const createdAt = now.toISOString().split("T")[0];

    const newAdWithDefaults = {
      ...newAd,
      id: Date.now().toString(),
      createdAt,
      isCompany: true,
      isEquipment: false,
      image: "/nrk.png",
      location: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    };

    setAds([newAdWithDefaults, ...ads]);
    setIsOpen(false);
  };

  const filteredAds = filterAds(ads, searchTerm, filterCenter, radius, true);

  let loggedIn = false;
  let isCompany = false;

  if (typeof window !== "undefined") {
    loggedIn = localStorage.getItem("isLoggedIn") === "true";
    isCompany = localStorage.getItem("isCompany") === "true";
    console.log("loggedIn", loggedIn);
  }

  return (
    <div className="p-8 space-y-8 min-h-screen">
      <div className="flex justify-between flex-wrap gap-4 mb-6">
        <h2 className="text-2xl font-bold">Oppdrag</h2>

        <div className="flex flex-wrap items-center gap-4">
          <input
            id="search"
            type="text"
            placeholder="Søk ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
          {loggedIn && isCompany && (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded h-full bg-[#1767CE] text-white hover:bg-blue-600 transition cursor-pointer"
            >
              <AddBoxIcon />
              <p>Nytt oppdrag</p>
            </button>
          )}
          <button
            onClick={() => setShowMapFilter((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded h-full bg-[#1767CE] transition cursor-pointer"
          >
            {showMapFilter ? <CloseIcon /> : <MapIcon />}
          </button>
        </div>
      </div>

      {/* Kart + Radiusvalg (Skjult bak knapp) */}
      {showMapFilter && (
        <div className="space-y-4">
          <label className="font-semibold">
            Velg område på kartet for å filtrere:
          </label>

          <MapContainer
            center={[59.9139, 10.7522]}
            zoom={6}
            className="h-60 w-full rounded"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationSelector
              onSelect={(lat, lng) => setFilterCenter({ lat, lng })}
            />
            {filterCenter && (
              <>
                <Marker position={[filterCenter.lat, filterCenter.lng]} />
                <Circle
                  center={[filterCenter.lat, filterCenter.lng]}
                  radius={radius * 1000}
                />
              </>
            )}
          </MapContainer>

          <div className="flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={500}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full"
            />
            <span>{radius} km</span>
          </div>
        </div>
      )}

      {/* Ny annonse popup */}
      {isOpen && (
        <NewAdForm onSave={handleSave} onCancel={() => setIsOpen(false)} />
      )}

      {/* Annonseliste */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => <AdCard key={ad.id} ad={ad} />)
        ) : (
          <p>Fant ingen oppdrag som matcher søket eller området.</p>
        )}
      </div>
    </div>
  );
}
