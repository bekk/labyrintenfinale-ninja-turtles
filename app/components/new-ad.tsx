import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type NewAdFormProps = {
  onSave: (ad: {
    title: string;
    description: string;
    city: string;
    location: string;
    startDate: string;
    endDate: string;
    userId: string;
    image: string;
  }) => void;
  onCancel: () => void;
};

function LocationSelector({
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

export function NewAdForm({ onSave, onCancel }: NewAdFormProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "",
    location: "", // Vi lagrer "lat,lng" som string her
    startDate: "",
    endDate: "",
    userId: "",
    image: "",
  });
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectLocation = (lat: number, lng: number) => {
    setMarker({ lat, lng });
    setForm({ ...form, location: `${lat},${lng}` });
  };

  const handleSubmit = () => {
    if (!form.title || !form.description || !form.location) {
      alert("Tittel, beskrivelse og lokasjon må fylles ut.");
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 flex h-screen items-center justify-center bg-[#0A2343] text-black bg-opacity-40 z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4 h-9/10 overflow-y-auto">
        <h2 className="text-xl font-bold">Ny annonse</h2>
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Tittel"
          className="w-full border rounded p-2"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Beskrivelse"
          className="w-full h-24 border rounded p-2 resize-none"
        />
        <input
          name="city"
          type="text"
          value={form.city}
          onChange={handleChange}
          placeholder="By"
          className="w-full border rounded p-2"
        />
        <div className="space-y-2">
          <label className="font-semibold">Velg lokasjon på kartet:</label>
          <MapContainer
            center={[59.9139, 10.7522]}
            zoom={6}
            className="h-60 w-full rounded"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationSelector onSelect={handleSelectLocation} />
            {marker && <Marker position={[marker.lat, marker.lng]} />}
          </MapContainer>
          {form.location && (
            <p className="text-sm text-gray-600">
              Valgt posisjon: {form.location}
            </p>
          )}
        </div>
        <div className="flex gap-5">
          <div>
            <label htmlFor="">Startdato:</label>
            <input
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />{" "}
          </div>
          <div>
            <label htmlFor="">Sluttdato:</label>
            <input
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Avbryt
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-[#1767CE] text-white hover:bg-blue-600 transition"
          >
            Lagre
          </button>
        </div>
      </div>
    </div>
  );
}
