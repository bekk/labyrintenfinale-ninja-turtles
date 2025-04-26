"use client";

import { advertisements as initialAdvertisements } from "~/components/types/advertisement";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Avstandsmåling
export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Samme filterAds som du bruker i CompanyAds
export function filterAds(
  ads: typeof initialAdvertisements,
  searchTerm: string,
  filterCenter: { lat: number; lng: number } | null,
  radius: number,
  isCompany: boolean
) {
  const lowerCaseSearch = searchTerm.toLowerCase();

  return ads.filter((ad) => {
    if (ad.isCompany !== isCompany) return false;

    const matchesSearch =
      ad.title.toLowerCase().includes(lowerCaseSearch) ||
      ad.userId.toLowerCase().includes(lowerCaseSearch) ||
      ad.description.toLowerCase().includes(lowerCaseSearch) ||
      ad.city.toLowerCase().includes(lowerCaseSearch);

    if (!matchesSearch) return false;

    if (filterCenter) {
      const { latitude: lat, longitude: lng } = ad.location;
      const distance = getDistanceFromLatLonInKm(
        filterCenter.lat,
        filterCenter.lng,
        lat,
        lng
      );
      return distance <= radius;
    }

    return true;
  });
}

export function LocationSelector({
  onSelect,
}: {
  onSelect: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}
