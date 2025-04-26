import { useState } from "react";
import { AdCard } from "~/components/ad-card";
import { advertisements } from "~/components/types/advertisement";

export default function Advertisements() {
  const [showCompanyAds, setShowCompanyAds] = useState(true);

  const filteredAds = advertisements.filter(
    (ad) => ad.isCompany === showCompanyAds
  );

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Annonser</h1>

      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded cursor-pointer ${
            showCompanyAds ? "bg-blue-700 text-white" : "bg-blue-400"
          }`}
          onClick={() => setShowCompanyAds(true)}
        >
          Bedriftsannonser
        </button>

        <button
          className={`px-4 py-2 rounded cursor-pointer ${
            !showCompanyAds ? "bg-blue-700 text-white" : "bg-blue-400"
          }`}
          onClick={() => setShowCompanyAds(false)}
        >
          Personlige annonser
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {filteredAds.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
}
